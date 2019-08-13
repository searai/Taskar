<template>
    <div>
        <div id="addItem">
            <input type="text" @keyup.enter ="addItem"  placeholder="Enter new item " v-model="newItem" >
            <button @click="addItem"><font-awesome-icon icon="plus"/></button>
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
            axios.post("/toDo/add",{body:this.newItem, author:this.getUserName})
            .then(doc=>{
                    eventBus.$emit("updateList", "addItem")
                })
            .catch(e=>console.error(e))

        }
    }
 
}
</script>

<style scoped>
#addItem{
  margin:10px 0px;
  text-align:center;
    
}
#addItem input, button{
    font-size:18px
}

#addItem button{
    color:blue;
}

</style>


