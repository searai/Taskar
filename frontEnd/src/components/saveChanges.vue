<template>

    <div id="changeStatus" :style="{display:display}">
        <input type="text" v-model = "editedData">
        <button id ="edit" @click = "editItem()">Edit</button>
    </div>

</template>


<script>

import Vue from "vue"
import {eventBus} from "../main.js"
import axios from "../axios.js"

export default {
    props:["id","display"],

    data(){
        return {
            editedData : ""
        }
    },

    methods:{
        editItem(){
            axios.put(`/toDo/update/${this.id}`,{body:this.editedData})
            .then(response=>{
                eventBus.$emit("updateList")
                console.log(response)
            }).catch(e=>console.log(e))

            eventBus.$emit("change")

        }
    }

}
</script>

<style>
#changeStatus{
    width:60%;
    margin:10px auto;
    text-align: center;
}
#edit{
  padding:2px;
  background-color:lightgreen;
  color:black;
  width:80px;
  border: solid grey 1px;
  border-radius: 2px;
}

</style>
