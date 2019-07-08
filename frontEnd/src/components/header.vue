<template>

    <div id="header">
            <div v-if="getUserName">
                <button id="logout" @click="logout">Logout</button>
                <span id="username">Welcome {{getUserName}}</span>
            </div>
            <div id="LoginLinks" v-else>
                <router-link  :style ="{textDecoration:linkStyle.login}" to="/login">Login</router-link>
                <router-link  :style ="{textDecoration:linkStyle.signUp}" to="/signUp">Sign-Up</router-link>
            </div>

        <h1>Welcome to TASKAR</h1>
    </div>
    
</template>

<script>
import {mapGetters} from "vuex"

export default {

computed:{
    ...mapGetters(["getUserName", "getValue", "getTitle"]),
    linkStyle(){

            if(this.$route.path == "/login"){
                return {
                    login : "underline",
                    signUp : "none",
                
                }
            }
            else if(this.$route.path == "/signUp"){
                return {
                    login : "none",
                    signUp : "underline",
                    
                }
            }else{
               return {
                    home : "none",
                    toDoList : "none",
                    about : "none",
                    discussion : "none",
                    
                } 
            }
        }


},
methods:{
    logout(){
        this.$store.commit("logout")
    }
}
    
}
</script>

<style scoped>

#logout{
    float:right;
}

#username{
    float:left;
}

#LoginLinks{
    float:right;
}
#header{
    text-align:center;
}

h1{
    clear:right;

}
button{ 
    background-color:blue;
    color:white;
    padding:10px;
    border-radius: 2px;
    width:60px;
}
a{
    display:inline-block;
    background-color:blue;
    color:white;
    text-decoration: none;
    margin-left:2px;
    padding:10px;
    border-radius: 2px;
    width:60px;
}

</style>
