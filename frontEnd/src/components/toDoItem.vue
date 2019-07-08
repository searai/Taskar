<template>
  <div>
    <div class = "toDoItem" :style ="{display:currentDisplay}">
      <div id="inner-div">
        {{data}}
        <div id="buttons">
          <button id ="edit" @click = "displayEdit()">Edit</button>
          <button id ="remove" @click = "removeItem()">Remove</button>
        </div> 
      </div>
    </div>
    <save-changes :id = "id" :display="editDisplay"></save-changes>
    
      
  </div>
</template>

<script>
import saveChanges from "@/components/saveChanges.vue"
import {eventBus} from "@/main.js"
import axios from "../axios.js"


export default {
  props: ["data", "id"],
  data(){
    return {
      currentDisplay: "block",
      editDisplay : "none"

    }
  },
  methods:{
    displayEdit(){
      this.currentDisplay ="none"
      this.editDisplay ="block"
    },

    removeItem(){
      axios.delete(`/toDo/remove/${this.id}`)
      .then(()=>{
        eventBus.$emit("updateList")
      }).catch(e=>console.error(e))

      
    },
   
  },
  components:{
      saveChanges
  },
  created(){
    eventBus.$on("change",()=>{
      this.currentDisplay = "block"
      this.editDisplay ="none"
    })
  }

  
}
</script>


<style scoped>
.toDoItem{
  width:60%;
  border-bottom:solid black 1px;
  margin: 10px auto;


}
#inner-div{
  padding: 2px 0;
}
#buttons{
  float:right;
}

#remove{
  background-color:lightgreen;
  color:black;
  border: solid grey 1px;
  border-radius: 2px;
  padding:2px;
  position:relative;
  bottom:2px;
  margin-left:3px;
  
}

#edit{
  background-color:lightgreen;
  color:black;
  border: solid grey 1px;
  border-radius: 2px;
  padding:2px;
  position:relative;
  bottom:2px;
  
}


</style>
