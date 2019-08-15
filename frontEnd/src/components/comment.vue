<template>
    <div id = "comment">
        <div v-if= "!loading">
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
        </div>
        <div v-else id = "loading">
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
            increment: 2,
            levelRange: 1,
            level : this.propsLevel,
            loading: false
            
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
            this.loading = true
            this.level += 5
            if(this.replies.length > 0){
                this.level += 5
                if(confirm("All associated comments will also be deleted")){
                 axios.delete(`/comment/removeMany/${this.id}`)
                .then(()=>{ 
                            if(!this.linkedTo){
                                return eventBus.$emit("getMainComments")
                            }
                            return eventBus.$emit("generateReplies", this.linkedTo)
                })
                .catch((e)=>{
                     if(e.response.status == 500){
                        this.$router.replace("/serverError")
                    }
                })
                }
            }else{
                axios.delete(`/comment/removeOne/${this.id}`)
                .then(()=>{ 
                            if(!this.linkedTo){
                                return eventBus.$emit("getMainComments")
                            }
                            return eventBus.$emit("generateReplies", this.linkedTo)
                })
                .catch(e=>{
                     if(e.response.status == 500){
                        this.$router.replace("/serverError")
                    }
                })
            }            
           
        },
        editComment(){
            this.loading = true
            this.editOrReply = "none"
             axios.put(`/comment/update/${this.id}`, {body:this.updatedComment})
            .then(()=>{
                        if(!this.linkedTo){
                            return eventBus.$emit("getMainComments")
                        }
                        return eventBus.$emit("generateReplies", this.linkedTo)
            })
            .catch(e=>{
                 if(e.response.status == 500){
                    this.$router.replace("/serverError")
                }
            })
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
                eventBus.$emit("cancelLoading")
                this.replies = response.data
                this.showMoreButton()
            }).catch((e)=>{
                 if(e.response.status == 500){
                    this.$router.replace("/serverError")
                }
            })

        },
        postReply(){
            this.editOrReply = "none"
            axios.post("/comment/add", {body:this.reply, author:this.getUserName, linkedTo: this.id})
            .then(()=>{
                if((this.level+1) == this.levelRange){
                    this.level -= 2 
                }
                if((this.replies.length + 1) > this.numberOfComments){
                    this.numberOfComments = (this.replies.length + 1) + this.increment
                }

                this.getReplies()
            })
            .catch(e=>{
                if(e.response.status == 401){
                    alert("You must login to post")
                }else if(e.response.status == 500){
                    alert("An error occured on the server")
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

        eventBus.$on("generateReplies",(id)=>{
            if(this.id == id){
                this.getReplies()
            }
        })

        eventBus.$on("cancelLoading", ()=>{
            this.loading = false
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
   
}

#showMoreComments button{
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
