<template>
    <div>
        <comment v-for="(comment, index) in mainComments" 
        :key= "index" 
        :id= "comment._id"
        :commentBody = "comment.body"
        :author = "comment.author"
        :level = 0
        >
        </comment>
        <div id ="showMore" v-if="showMore">
            <button  @click="numberOfComments += 1 ">Show More</button>
        </div>
        <form  @submit.prevent>
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
            numberOfComments: 1,
            mainComments:[],
            showMore:false
        }
    },
    components:{
        comment
    },

    computed:{
        ...mapGetters(["getToken"])
      
    },
    methods:{
        postComment(){
            axios.post("/comment/add", {body:this.newComment, author:this.getUserName})
            .then(reponse=>{
                console.log(reponse.data)
                this.fetchMainComments()
            })
            .catch(e=>{
                if(e.response.status == 401){
                    alert("you must login to post")
                }else{
                    console.error(e)
                }
            })
        },
        fetchMainComments: async function(){
            try{
                const response = await axios.get("/comment/getAllMainComments")
                if(response.data.length > this.numberOfComments){
                    this.showMore = true
                    return this.mainComments = response.data.slice(0, this.numberOfComments)
                }
                this.showMore = false
                this.mainComments = response.data

        }catch(e){
          console.error(e)
         }
        
        }
        
    },
    watch:{
        numberOfComments: function(){
            this.fetchMainComments()
  
        }
    },
    created(){
        this.fetchMainComments()
        eventBus.$on("getMainComments", ()=>{
            this.fetchMainComments()
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
    padding:5px;
    font-size:1.2em;
    border:none;
    border-radius:2px;
    background-color:blue;

}
#showMore{
    text-align: center;
}
</style>
