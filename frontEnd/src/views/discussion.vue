<template>
    <div>
        <comment v-for="(comment, index) in retrieveComments" 
        :key= "index" 
        :id= "comment._id"
        :commentBody = "comment.body"
        :author = "comment.author"
        :propsLevel = 0
        >
        </comment>
        <div id ="showMore" v-if="showMore">
            <button  @click="numberOfComments += increment ">Show More</button>
        </div>
        <div v-if = "loading" id = "loading">
        </div>

        <form  v-else @submit.prevent>
            <textarea  v-model="newComment"  rows= "4"></textarea> <br>   
            <input type="submit" id="submit" @click="postComment"> 
        </form> 
      
    </div>
    

</template>

<script>
import comment from "../components/comment.vue"
import axios from "../axios.js"
import {mapGetters} from "vuex"
import {eventBus} from "../main.js"

export default {
    data(){
        return {
            newComment: "",
            increment: 10,
            numberOfComments: 5,
            mainComments:[],
            showMore:false,
            loading: true
        }
    },
    components:{
        comment
    },

    computed:{
        ...mapGetters(["getUserName"]),

        retrieveComments(){
                if(this.mainComments.length > this.numberOfComments){
                    return this.mainComments.slice(0, this.numberOfComments)
                }
                return this.mainComments

        },
      
    },
    methods:{
        postComment(){
            this.loading = true
            axios.post("/comment/add", {body:this.newComment, author:this.getUserName})
            .then(()=>{
                this.getMainComments()
            })
            .catch(e=>{
                if(e.response.status == 401){
                    alert("you must login to post")
                }
                this.loading = false
            })
            this.newComment = ""
        },
        showMoreButton(){
            if(this.mainComments.length > this.numberOfComments){
                    this.showMore = true
            }else{
                this.showMore = false
            }
        },

        getMainComments(){
            axios.get("comment/getAllMainComments")
            .then((response)=>{
                    eventBus.$emit("cancelLoading")
                    this.loading = false
                    this.mainComments = response.data
                    this.showMoreButton()

            }).catch(e=>{
                this.loading = false
                alert("An error occured on the server")
            })
        }
     
    },
    watch:{
        numberOfComments : function(){
           this.showMoreButton()
        }
    },

    created(){
        this.getMainComments()

        setInterval(()=>{
            this.getMainComments()
        }, 5000)

        eventBus.$on("getMainComments",()=>{
            this.getMainComments()
        })

    }

}
</script>


<style scoped>

form{
    width: 250px;
    margin: 10px auto;
    text-align:center;
}
textarea{
    width:200px;
    border-radius: 5px;
}
#submit{
    width:60%;
    color:black;
    background-color: rgb(73, 180, 216);
    padding:5px;
    border-style:none;
    border-radius:2px;

}
#showMore{
    text-align: center;
}
#showMore button{
    color:black;
    background-color: rgb(73, 180, 216);
    padding:5px;
    border-style:none;
    border-radius:2px;
}

</style>
