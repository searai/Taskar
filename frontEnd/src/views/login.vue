<template>
    <div id="login">
        <h2 v-if="$route.query.msg">{{$route.query.msg}}</h2>
        <div id="container">
            <div id="inner-container">
                    <div>
                        <label for="email">Email</label> <br> 
                        <input type="text" v-model="email" class="input-boxes">
                        <p class="errors">{{checkEmail}}{{emailError}}</p>
                    </div>
                    <div>
                        <label for="password" id = "password-label">Password</label> <br>
                        <input :type = "showPassword ? 'text':'password'" v-model="password"  class="input-boxes">
                        <font-awesome-icon class = "eyeIcons" v-if = "!showPassword" @click = "showPassword = !showPassword" icon="eye" />
                        <font-awesome-icon class = "eyeIcons" v-else  @click = "showPassword = !showPassword" icon="eye-slash" />
                        <p class="errors" >{{passwordError}} {{excessAttempts}}</p>
                        
                        
                    </div>
            </div>
            <div id="submit-container">
                <input type="submit" id="submit" @click="sendData">
            </div>
            
        </div>
    </div>
</template>

<script>
import axios from "../axios.js"
import validator from "validator"
import {mapMutations} from "vuex"

export default {
    data(){
        return {
            email:"",
            password:"",
            emailError: null,
            passwordError: null,
            showPassword :false,
            excessAttempts: null

        }
    },
    computed:{
        checkEmail(){
            this.emailError = null
            if(!validator.isEmail(this.email)){
                return "Email format is not valid"
            }
            return null
            
        }
    },
    methods:{
        ...mapMutations(["storeUser"]),

        sendData(){
            axios.post("/user/login",{email:this.email,  password:this.password})
            .then((response)=>{
                if(response.data){
                    this.storeUser(response.data)
                    localStorage.setItem("userName", response.data.userName)
                    localStorage.setItem("token", response.data.token)
                    this.$store.dispatch("setLogOutTimer")
                    this.$router.push("/toDoList")
                }
            }).catch(e=>{
                this.emailError = null
                this.passwordError = null
                this.excessAttempts = null

                if(e.response.data.emailError){
                    this.emailError = e.response.data.emailError
                }else if(e.response.data.passwordError){
                    this.passwordError =  e.response.data.passwordError
                }else if(e.response.data.excessAttempts){
                    this.excessAttempts =  e.response.data.excessAttempts

                }
            })
        }
    }

}
</script>

<style scoped>

#login{
    width:250px;
    margin: 40px auto;
    border:solid grey .5px;
    padding: 40px;
   
}

.errors{
    font-weight: bold;
    color:red;
    margin-top: 0px;
}

#password-label{
    margin-top:5px;
}

.input-boxes{
    width:90%;
 }

.eyeIcons{
    position:relative;
    right: 25px;
}

#submit-container{
    margin-top:10px;
    text-align: center;
}

#submit{
    width:60%;
    padding:5px;
    font-size:1.2em;
    border:none;
    border-radius:2px;
    background-color:blue;
}
#passwordToggle{
    font-weight: bold;
    cursor: default;

}


</style>
