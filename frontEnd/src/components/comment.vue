<template>
    <div id = "comment">
            <div id = "comment-body">
                <strong>{{author}}</strong>
                <p>{{commentBody}}</p>
            </div>
            <div v-if = "editOrReply == 'edit'" class = "edit-pane">
                <textarea v-model= "updatedComment"></textarea> <br>
                <font-awesome-icon class = "icons" @click = "editComment" icon="save"/>
                <font-awesome-icon class = "icons" @click = "editOrReply = 'none'" icon="window-close" />
            </div>
            <div v-else-if = "editOrReply == 'reply'" class = "edit-pane">
                <textarea v-model= "reply"></textarea> <br>
                <font-awesome-icon class = "icons" @click = "postReply" icon="save" />
                <font-awesome-icon class = "icons" @click = "editOrReply = 'none'" icon="window-close" />
            </div>
            <div v-else id="nav-pane">
                <span v-if="author == getUserName">
                    <font-awesome-icon class = "icons" @click = "editOrReply = 'edit'" icon="edit" />
                    <font-awesome-icon class = "icons"  @click = "removeComment()"  icon="trash" />
                </span>
                <span v-if="this.getToken">
                    <font-awesome-icon class = "icons" @click = "editOrReply = 'reply'"  icon="reply" />
                </span>
            </div>
            <div v-if = "(level + 1)< levelRange">
                <comment  class = "replies" v-for="(reply, index) in retrieveComments" 
                :index = "index"
                :key= "index" 
                :id= "reply._id"
                :commentBody = "reply.body"
                :author = "reply.author"
                :linkedTo = "reply.linkedTo"
                :propsLevel = "level + 1"
                >
                </comment>
                <div id ="showMoreComments" v-if = "showMore">
                    <button  @click="numberOfComments += increment">Show More Comments</button>
                </div>
            </div>
             <div v-if = "(level+1) == levelRange && replies.length >0">
                <button id= "showMoreReplies" @click = "level -= 2">Show More Replies</button>
            </div> 
    

    </div>
</template>

<script>
import {eventBus} from "../main.js"
import {mapGetters} from  "vuex"
import axios from "../axios.js"

export default {

    name : "comment",

    props: ["commentBody", "author" ,"id", "linkedTo", "propsLevel", "index"],

    data(){
        return {
            updatedComment:"",
            reply:"",
            replies:[],
            editOrReply : "none",
            showMore: false,
            numberOfComments: 2,
            increment: 5,
            levelRange: 1,
            level : this.propsLevel
            
        }
    },
    computed:{
        ...mapGetters(["getUserName","getToken"]),

        retrieveComments(){
                if(this.replies.length > this.numberOfComments){
                    return this.replies.slice(0, this.numberOfComments)
                }
                return this.replies

        },  
    },

    methods:{
        removeComment(){
            function remove(id, linkedTo){
                axios.delete(`/comment/remove/${id}`)
                .then(()=>{
                            if(!linkedTo){
                                return eventBus.$emit("getMainComments")
                            }
                            return eventBus.$emit("generateReplies", linkedTo)
                })
                .catch(e=>console.error(e))
            }

            if(this.replies.length > 0){
                if(confirm("All associated comments will also be deleted")){
                    remove(this.id, this.linkedTo)
                }
            }else{
                remove(this.id, this.linkedTo)
            }            
           
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
        showMoreButton(){
            if(this.replies.length > this.numberOfComments){
                    this.showMore = true
            }else{
                this.showMore = false
            }
        },
        
        getReplies(){
            axios.get(`comment/getAllReplies/${this.id}`)
            .then(response => {
                    this.replies = response.data
                    this.showMoreButton()
            })

        },
        postReply(){
            this.editOrReply = "none"
            axios.post("/comment/add", {body:this.reply, author:this.getUserName, linkedTo: this.id})
            .then(()=>{
                if((this.level+1) == this.levelRange){
                    this.level -= 2 
                }
                this.getReplies()
            })
            .catch(e=>{
                if(e.response.status == 401){
                    alert("You must login to post")
                }
            })
        }

    },
    watch:{
        numberOfComments: function(){
            this.showMoreButton()
        }
    },
    created(){
        this.getReplies()
        setInterval(()=>this.getReplies()
        ,5000)

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
    width: 200px;
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
    position: relative;
    bottom:15px;
}

.edit-pane textarea{
    width:95%;
    height:40px;

}

#nav-pane{
    width:200px;
    text-align:right;
    margin: 0 auto;
    position: relative;
    bottom:15px;

}

.replies{
    position:relative;
    left:30px;
    
}
#showMoreComments{
    text-align: center;
    position:relative;
    left:30px;
    background-color: rgb(73, 180, 216);
    padding:5px;
    border-style:none;
    border-radius:2px;
}

#showMoreReplies{
    position:relative;
    left:150px;
    color:black;
    background-color: rgb(73, 180, 216);
    padding:5px;
    border-style:none;
    border-radius:2px;
}


.icons{
    font-size: 17px;
    color: rgb(12, 86, 110);
    margin-left:4px;
}

</style>
