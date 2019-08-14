<template>
  <div>
    <div v-if="!loading">
      <div class = "toDoItem" v-if="!editDisplay">
        <div id="data">
          {{data}}
          <div id="icons">
            <font-awesome-icon @click = "displayEdit()" icon="edit" />
            <font-awesome-icon style="margin-left:4px" @click = "removeItem()" icon="trash" />
          </div> 
        </div>
      </div>
      <save-changes v-else
        :id = "id"
      >
      </save-changes>
    </div>
    <div v-else id = "loading">
    </div>   
  </div>
</template>

<script>
import saveChanges from "./saveChanges.vue"
import {eventBus} from "../main.js"
import axios from "../axios.js"


export default {
  props: ["data", "id"],
  data(){
    return {
      editDisplay : false,
      loading: false

    }
  },
  methods:{
    displayEdit(){
      this.editDisplay = true
    },

    removeItem(){
      this.loading = true
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
    eventBus.$on("save",(payload)=>{
      this.editDisplay = false
      if(payload == this.id){
        this.loading = true
      }
     
    })

    eventBus.$on("cancelLoading",()=>{
      this.loading = false
    })

    eventBus.$on("cancelEdit",()=>{
      this.editDisplay = false
    })

  }
}
</script>

<style scoped>

.toDoItem{
  width:60%;
  border-bottom:solid black 1px;
  margin: 10px auto;
  padding:2px;
}

#data{
  padding: 2px 0;
}
#icons{
  float:right;
  color:blue;
  font-size: 16px;
}


</style>
