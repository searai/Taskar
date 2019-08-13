import vue from "vue"
import vuex from "vuex"
import {router} from "./main.js"

vue.use(vuex)

const store = new vuex.Store({
    state: {
      userName: null,
      token: null

    },
    getters:{
        getUserName(state){
            return state.userName
        },
        getToken(state){
          return state.token
        }
    },
    mutations: {
      logout (state) {
        state.userName = null
        state.token = null
        localStorage.removeItem("userName")
        localStorage.removeItem("token")
        router.replace({path:"/"})
      },
      storeUser(state, payload){
        state.userName = payload.userName
        state.token = payload.token
      },
    },
    actions:{
      setLogOutTimer({commit}){
        setTimeout(()=>{
          commit("logout")
        },60*60*1000)    
    }
  
  }
})

  export default store