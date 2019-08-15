import toDoList from "../views/toDoList.vue"
import about from "../views/about.vue"
import home from "../views/home.vue"
import login from "../views/login.vue"
import signUp from "../views/signUp.vue"
import serverError from "../views/serverError.vue"
import discussion from "../views/discussion.vue"
import {eventBus} from "@/main.js"




const auth = (to, from, next)=>{

  if(!localStorage.getItem("userName")){
    next({path:"/login", query:{msg: "Login/Sign-up required to view that resource"} })
    eventBus.$emit("changeActiveLink")
  }else{
    next()
  }

}

export const routes = [
    { path: '/', component: home },
    { path: '/about', component: about },
    { path: '/toDoList',
     component: toDoList,
      beforeEnter: auth
       },
    {path:"/login", component:login},
    {path:"/signUp", component:signUp},
    {path:"/discussion", component:discussion},
    {path:"/serverError", component:serverError}
    
  ]
  