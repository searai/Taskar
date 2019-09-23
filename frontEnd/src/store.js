import vue from "vue"
import vuex from "vuex"
import {router} from "./main.js"
import axios from "axios"
vue.use(vuex)

const store = new vuex.Store({
    state: {
      userName: null,
      token: null,
      listOfComments: []

    },
    getters:{
        getUserName(state){
            return state.userName
        },
        getToken(state){
          return state.token
        },
        getListOfComments(state){
          return state.listOfComments
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
      updateListOfComments(state, payload){
        state.listOfComments = payload
      }
    },
    actions:{
      setLogOutTimer({commit}){
        setTimeout(()=>{
          commit("logout")
        },60*60*1000)    
    },
    getAllComments: async function({commit}){
      try{
        const response = await axios.get("comment/getComments")
        commit("updateListOfComments", response.data)
      }catch(e){
        if(e.response.status == 500){
          router.replace({path:"/serverError"})
        }
      }
    },
    updateCommnent({dispatch}, {id, body}){
      axios.put(`/comment/update/${id}`, {body})
      .then(()=>{
        dispatch("getAllComments")
      })
      .catch((e)=>{
        if(e.response.status == 500){
          router.replace({path:"/serverError"})
        }
      })
    },
    postComment({dispatch}, {body, author, linkedTo} ){
      axios.post("/comment/add", {body, author, linkedTo})
      .then(()=>{
        dispatch("getAllComments")
      }).catch((e)=>{
        if(e.response.status == 500){
          router.replace({path:"/serverError"})
        }
      })
    },
    deleteComment({dispatch}, {removeMany, id}){
      if(removeMany){
        axios.delete(`/comment/removeMany/${id}`)
        .then(()=>{
          dispatch("getAllComments")
        }).catch(e=>{
          if(e.response.status == 500){
            router.replace({path:"/serverError"})
          }
        })
      }else{
        axios.delete(`/comment/removeOne/${id}`)
        .then(()=>{
          dispatch("getAllComments")
        }).catch(e=>{
          if(e.response.status == 500){
            router.replace({path:"/serverError"})
          }
        })
      }
    }
  }
})

  export default store
