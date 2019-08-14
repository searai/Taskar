<template>

    <div id="saveChanges" >
        <div id="icons">
            <font-awesome-icon @click = "editItem()" icon="save" />
            <font-awesome-icon style="margin-left:6px" @click = "cancel()" icon="window-close" />
        </div>
        <input id= "edit" type="text" v-model = "editedData">
    </div>

</template>


<script>

import Vue from "vue"
import {eventBus} from "../main.js"
import axios from "../axios.js"

export default {
    props:["id"],

    data(){
        return {
            editedData : ""
        }
    },

    methods:{
        editItem(){
            eventBus.$emit("save", this.id)
            axios.put(`/toDo/update/${this.id}`,{body:this.editedData})
            .then(response=>{
                eventBus.$emit("updateList")
            }).catch(e=>console.log(e))

        },
        cancel(){
            eventBus.$emit("cancelEdit")
        }
    }

}
</script>

<style scoped>

#saveChanges{
    width:60%;
    margin:10px auto;
    border-bottom:solid black 1px;
    padding:2px;
}
#edit{
    
}
#icons{
    float:right;
    color:blue;
    font-size: 16px;
}

</style>
