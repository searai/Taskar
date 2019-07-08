import vue from 'vue'
import app from './App.vue'
import vueRouter from "vue-router"
import {routes} from "./routes/routes.js"
import vuex from "vuex"
import store from "./store.js"
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faUserSecret)
vue.component('font-awesome-icon', FontAwesomeIcon)

vue.use(vueRouter)
vue.use(vuex)

export const router = new vueRouter({
  mode:"history",
  routes
})

vue.config.productionTip = false

export const eventBus = new vue()

new vue({
  store,
  router,
  render: h => h(app),
}).$mount('#app')
