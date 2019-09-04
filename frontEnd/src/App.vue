<template>

<div>
    <headmast></headmast>
    <!-- <nav-bar></nav-bar>
    <router-view></router-view> -->
    <test></test>

</div>

</template>

<script>
import header from "./components/header.vue"
import nav from "./components/nav.vue"
import test from "./components/test.vue"

export default {
    components:{
        navBar:nav,
        headmast:header,
        test
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
