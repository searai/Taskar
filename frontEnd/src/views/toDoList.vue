<template>
  <div id="app">
    <div id="changeView">
      <button :style="{backgroundColor : addItemOrSeachItemStyling.addItem}"  @click = "addItemOrSeachItem('addItem')">Add item</button>
      <button :style="{backgroundColor : addItemOrSeachItemStyling.searchItem}" id="searchButton" @click = "addItemOrSeachItem('searchItem')">Search</button>
    </div>
    <add-item v-if="addItem"></add-item>
    <div v-else id= "search">
      <input v-model="searchData" type="text" placeholder= "enter item details">
      <button @click="search()">Search</button>
    </div>
    
    <toDoItem v-for="(item) in listOfItems" 
    :key = "item._id"
    :id = "item._id"
    :data="item.body"
    >
     </toDoItem>
  
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
      addItem : true
    }
  },
 computed:{
   addItemOrSeachItemStyling(){
     if(this.addItem){
       return {
          addItem : "blue",
          searchItem: "grey"
       }
     }else{
       return {
          addItem : "grey",
          searchItem : "blue"
       }
     }

   }
 },
 methods:{
    getAll: async function(){
        try{
          const response = await axios.get(`/toDo/getAll/${this.$store.getters.getUserName}`)
          this.listOfItems = response.data
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
      if(val ==="addItem"){
        this.addItem = true
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
          .then((response)=>this.listOfItems = response.data)
          .catch((e)=>console.log(e))

    }else{this.getAll()}

    eventBus.$on("updateList",()=>{
      this.getAll()
    })
    

  }
}
</script>

<style scoped>

#search{
  margin:10px 0px;
  text-align:center;

}
#changeView{
  text-align: center;
  margin:10px 0;
}
#searchButton{
  margin-left:10px;

}

</style>
