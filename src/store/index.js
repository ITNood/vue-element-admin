import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)



const store = new Vuex.Store({
  list: [
    { name: "首页", path: "/home" },
    { name: "首页", path: "/home" },
    { name: "首页", path: "/home" }
  ]
})

export default store
