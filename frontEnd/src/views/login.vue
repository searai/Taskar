<template>
    <div id="login">
        <h2 v-if="$route.query.msg">{{$route.query.msg}}</h2>
        <div id="container">
            <div id="inner-container">
                    <div>
                        <label for="email">Email</label> <br> 
                        <input type="text" v-model="email" class="input-boxes"> <br>
                        <p v-if = "emailError" class="errors">{{emailError}}</p>
                    </div>
                    <br>
                    <div>
                        <label for="password" id = "password-label">Password</label> <br>
                        <input :type = "showPassword ? 'text':'password'" v-model="password"  class="input-boxes"> 
                        <div id="password" @click= "hideOrshowPassword">{{showOrHidePasswordMessage}}</div>
                        <p v-if = "passwordError" class="errors" >{{passwordError}}</p>
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
import {mapMutations} from "vuex"

export default {
    data(){
        return {
            email:"",
            password:"",
            emailError:undefined,
            passwordError:undefined,
            showPassword :false,
            showOrHidePasswordMessage: "Show Password"


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
                    this.$router.push("/toDoList")
                }
            }).catch(e=>{
                this.emailError = undefined
                this.passwordError = undefined
                if(e.response.data.emailError){
                    this.emailError = e.response.data.emailError
                }else if(e.response.data.passwordError){
                    this.passwordError =  e.response.data.passwordError
                }else{
                    console.error(e)
                }
            })
        },
        hideOrshowPassword(){
            if(this.showPassword){
                this.showPassword = false,
                this.showOrHidePasswordMessage  = "Show Password"
            }else{
                this.showPassword = true
                this.showOrHidePasswordMessage  = "Hide Password"
            }
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
}

#password-label{
    margin-top:5px;
}

.input-boxes{
    width:100%;
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
#password{
    text-decoration: underline;
}


</style>
