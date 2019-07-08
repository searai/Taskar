<template>
    <div>
        <div id="addItem">
            <input type="text" @keyup.enter ="addItem"  placeholder="Enter the new item" v-model="newItem" >
            <button @click="addItem">Submit</button>
        </div>
    </div>
</template>

<script>
import axios from "../axios.js"
import {eventBus}  from "../main.js"
import {mapGetters} from "vuex"

export default {

    props: [],

    data(){
        return {
            newItem:""
        }
    },
    computed:{
        ...mapGetters(["getUserName"])
    },

    methods:{
        addItem(){
            axios.post("/toDo/add",{body:this.newItem,author:this.getUserName})
            .then(doc=>{
                    console.log(doc)
                    eventBus.$emit("updateList")
                })
            .catch(e=>console.error(e))


        }

    }
 
}
</script>

<style scoped>
#addItem{
    width:60%;
    text-align: center;
    margin: 0 auto;
    
}

button{
    border:none;
    background-color: rgba(220, 20, 60, 0.836);
    margin-left: .2em;
    height:2em;
    border-radius: 2px;
}
input{
    height:1.7em;
    border-radius: 2px;
    border: solid grey 1px;;
}

</style>


