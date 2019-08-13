<template>
    <div id="SignUp">
        <div id="container">
            <div>
                <label for="userName">User-name</label> <br> 
                <input type="text" v-model="userName" class="input-boxes"> <br> 
                <p class="errors">{{checkUserName}} {{userNameError}}</p> 

                <label for="email">Email</label> <br> 
                <input type="text" v-model="email" class="input-boxes"> <br> 
                <p class="errors">{{checkEmail}} {{emailError}}</p>

                <label for="password">Password</label> <br>
                <input type="password" v-model="password" class="input-boxes"> <br>
                <ul id ="passwordErrors" v-for = "(value, index) in checkPassword" :key = index>
                    <li>{{value}}</li>
                </ul>
                <br>

                <label for="confirm password">Confirm Password</label> <br>
                <input type="password" v-model="confirmPassword" class="input-boxes"> <br>
                <p class="errors">{{checkConfirmPassword}}</p> 

            </div>
            <br>
            <div id="submit-container">
                <input type="submit" id="submit" @click="sendData">
            </div>
            
        </div>
    </div>
</template>

<script>
import axios from "../axios.js"
import {mapMutations} from "vuex"
import validator from "validator"

export default {
    data(){
        return {
            userName:"",
            email:"",
            password:"",
            confirmPassword: "",
            userNameError: null,
            emailError: null
        }
    },
    computed:{
        checkEmail(){
            this.emailError = null
            if(!validator.isEmail(this.email)){
                return "Email format is not valid"
            }
            return null
            
        },
        checkUserName(){
            this.userNameError = null
            if(this.userName.length <6){
                return "Must exceed 6 characters"
            }
            return null
            
        },
        checkPassword(){
            let listOfErrors = []

            if(!this.password.match(/[0-9]/)){
                listOfErrors.push("Contain a number")
            }
            if(!this.password.match(/[a-z]/)){
                listOfErrors.push("Contain lowercase letter")
            }
            if(!this.password.match(/[A-Z]/)){
                listOfErrors.push("Contain uppercase letter")
            }
            if(this.password.length < 6){
                listOfErrors.push("Must be at least 6 characters")
            }

            return listOfErrors
        },
        checkConfirmPassword(){
            if(this.password != this.confirmPassword){
                return "Password must be equal"
            }
            return null
        }

    },
    methods:{
        sendData(){
            if(!this.checkEmail && !this.checkUserName && this.checkPassword.length === 0 && !this.checkConfirmPassword){
                axios.post("/user/signUp", {userName : this.userName, email:this.email,  password:this.password})
                .then((response)=>{
                    if(response.data.success){
                        this.$router.push({path:"/login", query:{msg :"You are now signed up please login"}})

                    }
                }).catch(e=>{
                        if(e.response.data.userNameError){
                            this.userNameError =  e.response.data.userNameError
                            }
                        if(e.response.data.emailError){
                            this.emailError =  e.response.data.emailError
                        }
    
                    })
            }
    
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
    margin-top:0;
}

#passwordErrors{
    list-style-type: none;
    padding-left:0;
    color:red;
    font-weight:bold;
    margin:0; 
}

</style>
