<template>
  <div id="toDoList">
    <div>
        <div id="changeView">
          <button :style="{textDecoration : addItemOrSeachItemStyling.addItem}"  @click = "addItemOrSeachItem('addItem')">Add item</button>
          <button id= "test" style="margin-left:10px;" :style="{textDecoration: addItemOrSeachItemStyling.searchItem}" @click = "addItemOrSeachItem('searchItem')">Search</button>
        </div>

        <add-item v-if="addItem"></add-item>
        <div v-else id= "search">
          <input v-model="searchData" type="text" placeholder= "enter item details">
          <button  @click="search()"> <font-awesome-icon icon="search" /></button>
        </div>
        
        <toDoItem v-for="(item) in listOfItems" 
          :key = "item._id"
          :id = "item._id"
          :data = "item.body"
        >
        </toDoItem>
     </div>
     <div v-if = "loading" id = "loading">
     </div> 

  </div>
</template>

<script>
import toDoItem from '../components/toDoItem.vue'
import addItem from "../components/addItem.vue"
import axios from "../axios.js"
import {eventBus} from "../main.js"

export default {
  name: 'app',
  
  components: {
    toDoItem,
    addItem
  },

  data(){
    return {
      listOfItems : [],
      searchData: "",
      addItem : true,
      loading: true
    }
  },
  computed:{
    addItemOrSeachItemStyling(){
      if(this.addItem){
        return {
          addItem : "underline",
          searchItem: "none"
        }
      }else{
        return{
          addItem : "none",
          searchItem: "underline"
        }
      }
    }
  },
 methods:{
    getAll: async function(){
        try{
          const response = await axios.get(`/toDo/getAll/${this.$store.getters.getUserName}`)
          this.listOfItems = response.data
          this.loading = false
      
        }catch(e){
          console.error(e)
        }
    },
    search: async function(){
        try{
          localStorage.setItem("search",this.searchData)
          const response = await axios.get(`/toDo/search/${this.$store.getters.getUserName}?search=${this.searchData}`)
          this.listOfItems = response.data
        }catch(e){
          console.error(e)
        }    

    },
    addItemOrSeachItem(val){
      if(val === "addItem"){
        this.addItem = true
        localStorage.removeItem("search")
        this.getAll()
      }else{
        this.addItem = false
      }
    }

  },
  created(){
    if(localStorage.getItem("search")){
          this.addItem = false
          this.searchData = localStorage.getItem("search")
          axios.get(`/toDo/search/${this.$store.getters.getUserName}?search=${this.searchData}`)
          .then((response)=>{
            this.listOfItems = response.data
            this.loading = false
          })
          .catch((e)=>console.log(e))

    }else{
      this.getAll()
      }

    eventBus.$on("updateList",(payload)=>{
      if(payload === "addItem"){
        this.loading = true
      }
      axios.get(`/toDo/getAll/${this.$store.getters.getUserName}`)
      .then((response)=>{
        this.listOfItems = response.data
        eventBus.$emit("cancelLoading")
        this.loading = false
      })
      .catch(()=>{
        this.loading = false
        alert("An error occured on the server")
      })
    })
    

  }
}
</script>

<style scoped>

#search{
  margin:10px 0px;
  text-align:center;
}

#search input, button{
    font-size:18px
}

#search button{
    color:blue;
}

#changeView{
  text-align: center;
  margin:10px 0;
}

#changeView button{
  color:white;
  border-style:none;
  border-radius:3px;
  font-size:14px;
  padding:8px;
  cursor:pointer;
  background-color:blue;

}

#loading{
  border: 16px solid #f3f3f3;
  border-radius: 50%;
  border-top: 16px solid #3498db;
  width: 20px;
  height: 20px;
  animation: spin 2s linear infinite;
  margin: 10px auto;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

</style>
