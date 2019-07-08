<template>
    <div>
        <div v-if = "getLevel < getLevelRange"  id= "comment">
            <div id = "comment-body">
                <strong>{{author}}</strong>
                <p>{{commentBody}}</p>
            </div>
            <div v-if = "editOrReply == 'edit'" class = "edit-pane">
                <textarea v-model= "updatedComment"></textarea> <br>
                <button  class="buttons" @click = "editComment">Save changes</button>
                <button  class="buttons" @click = "editOrReply = 'none'">Cancel</button>
            </div>
            <div v-else-if = "editOrReply == 'reply'" class = "edit-pane">
                <textarea v-model= "reply"></textarea> <br>
                <button  class="buttons" @click = "postReply">Post</button>
                <button  class="buttons" @click = "editOrReply = 'none'">Cancel</button>
            </div>
            <div v-else id="nav-pane">
                <span v-if="author == getUserName">
                    <button class="buttons" @click = "editOrReply = 'edit'">Edit</button>
                    <button class="buttons" @click = "removeComment" >Remove</button>
                </span>
                <span v-if="this.getToken">
                    <button class="buttons" @click = "editOrReply = 'reply'">Reply</button>
                </span>
            </div>

            <comment class = "replies" v-for="(reply, index) in replies" 
            :key= "index" 
            :id= "reply._id"
            :commentBody = "reply.body"
            :author = "reply.author"
            :linkedTo = "reply.linkedTo"
            :level = "level + 1"
            >
            </comment>
            <div id ="showMore" v-if = "showMore">
                <button  @click="numberOfComments += 1">Show More</button>
            </div>
        </div>
        <div v-else-if = "getLevel == getLevelRange">
            <button @click = "decreaseLevel()">Show more</button>
        </div>


    </div>
</template>

<script>
import {eventBus} from "../main.js"
import {mapGetters} from  "vuex"
import axios from "../axios.js"

export default {

    name : "comment",

    props: ["commentBody", "author" ,"id", "linkedTo", "level"],

    data(){
        return {
            updatedComment:"",
            reply:"",
            replies:[],
            editOrReply : "none",
            showMore: false,
            numberOfComments: 1,
            levelStep: 0,

        }
    },
    computed:{
        ...mapGetters(["getUserName","getToken", "getLevelRange"]),

        getLevel(){
            return this.level - this.levelStep
        }
        
    },

    methods:{
        removeComment(){
             axios.delete(`/comment/remove/${this.id}`)
            .then(()=>{
                        if(!this.linkedTo){
                            return eventBus.$emit("getMainComments")
                        }
                        return eventBus.$emit("generateReplies",this.linkedTo)
            })
            .catch(e=>console.error(e))
        },
        editComment(){
            this.editOrReply = "none"
             axios.put(`/comment/update/${this.id}`, {body:this.updatedComment})
            .then(()=>{
                        if(!this.linkedTo){
                            return eventBus.$emit("getMainComments")
                        }
                        return eventBus.$emit("generateReplies",this.linkedTo)
            })
            .catch(e=>console.error(e))
        },
        
        getReplies(){
            axios.get(`comment/getAllReplies/${this.id}`)
            .then(response => {
                if(response.data.length > this.numberOfComments){
                    this.showMore = true
                    return this.replies = response.data.slice(0, this.numberOfComments)
                }
                this.showMore = false
                this.replies = response.data
                })
            .catch(e=>console.error(e))

        },
        postReply(){
            this.editOrReply = "none"
            axios.post("/comment/add", {body:this.reply, author:this.getUserName, linkedTo: this.id}, {headers:{"authorization": `Bearer ${this.getToken}`}})
            .then(()=>{
                this.getReplies()
            })
            .catch(e=>{
                if(e.response.status == 401){
                    alert("you must login to post")
                }else{
                    console.error(e)
                }
            })
        },
        decreaseLevel(){
            this.levelStep += 1
        }

    },
    watch:{
        numberOfComments: function(){
            this.getReplies()
  
        }
    },
    created(){
        this.getReplies()
        eventBus.$on("generateReplies",(payload)=>{
            if(this.id ==payload){
                this.getReplies()
            }
        })
        

    }
}
</script>

<style scoped>

#comment{
    width: 250px;
    margin: 10px auto;
}

#comment-body{
    width:200px;
    word-wrap:break-word;
    background-color: rgb(73, 180, 216);
    border-radius: 2px;
    margin: 0 auto;
    position:relative;
    left:2px;
}

.edit-pane{
    width:200px;
    text-align:right;
    margin: 0 auto;
}

.edit-pane textarea{
    width:95%;
    height:40px;

}

#nav-pane{
    width:200px;
    text-align:right;
    margin: 2px auto;

}
.buttons{
    padding:2px;
    width:60px;
    background-color:rgb(39, 133, 165);
    border:none;
    border-radius:2px;
    margin-left:5px;

}

.replies{
    position:relative;
    left:30px;
    
}
#showMore{
    text-align: center;
    position:relative;
    left:30px;
}
</style>
