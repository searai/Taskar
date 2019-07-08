<template>
    <div id="SignUp">
        <div id="container">
            <div id="inner-container">
                    <label for="userName">User-name</label> <br> 
                    <input type="text" v-model="userName" class="input-boxes"> <br> 
                    <p v-if="userNameError" class="errors">{{userNameErr}}</p> <br> <br>

                    <label for="email">Email</label> <br> 
                    <input type="text" v-model="email" class="input-boxes"> <br> 
                    <p v-if="emailError" class="errors">{{emailError}}</p> <br> <br>

                    <label for="password">Password</label> <br>
                    <input type="password" v-model="password" class="input-boxes"> <br>
                    <p v-if="passwordError" class="errors">{{passwordError}}</p> <br> <br>  
            </div>
            <div id="submit-container">
                <input type="submit" id="submit" @click="sendData">
            </div>
            
        </div>
    </div>
</template>

<script>
import axios from "../axios.js"
import {mapMutations} from "vuex"

export default {
    data(){
        return {
            userName:"",
            email:"",
            password:"",
            userNameError: undefined,
            emailError: undefined,
            passwordError: undefined
        }
    },
    methods:{
        sendData(){
            axios.post("/user/signUp", {userName : this.userName, email:this.email,  password:this.password})
            .then((response)=>{
                if(response.data.success){
                    this.$router.push({path:"/login", query:{msg :"You are now signed up please login"}})

                }
            }).catch(e=>{
                if(e.response.data.emailError){
                    this.emailError = e.response.data.emailError
                }else if(e.response.data.userError){
                    this.userError = e.response.data.userError
                }else if(e.response.data.passwordError){
                    this.passwordError = e.response.data.passwordError
                }else{
                    console.error(e)
                    }
                })
        }
    }

}
</script>

<style scoped>

#SignUp{
    width:250px;
    margin: 40px auto;
    border:solid grey .5px;
    padding: 40px;
   
}

.input-boxes{
    width:100%;
 }

#submit-container{
    text-align: center;
}
#submit{
    padding: 5px 5px;
    width: 70%;
    background-color:blue;
    font-size:1.2em;
    border:none;
    border-radius: 2px;
}

.errors{
    color:red;
    font-weight:bold; 
}

</style>
