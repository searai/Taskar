<template>

<div>
    <headmast></headmast>
    <nav-bar></nav-bar>
    <router-view></router-view>

</div>

</template>

<script>
import header from "./components/header.vue"
import nav from "./components/nav.vue"

export default {
    components:{
        navBar:nav,
        headmast:header
    },
    created(){
        if(localStorage.getItem("userName")){
            this.$store.commit("storeUser", {userName:localStorage.getItem("userName"),
                                            token: localStorage.getItem("token")
            })
        }
    }
       
        
    
}
</script>

<style>

</style>
