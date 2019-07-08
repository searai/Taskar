import vue from "vue"
import vuex from "vuex"
import {router} from "./main.js"

vue.use(vuex)

const store = new vuex.Store({
    state: {
      userName: undefined,
      token: undefined,
      levelRange: 1

    },
    getters:{
        getUserName(state){
            return state.userName
        },
        getToken(state){
          return state.token
        },
        getLevelRange(state){
          return state.levelRange
        }
    },
    mutations: {
      logout (state) {
        state.userName = undefined
        state.token = undefined
        localStorage.clear()
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
        },10000)    
    }
  
  }
})

  export default store