import Vue from 'vue'
import Router from 'vue-router'
import Home from "../view/home.vue"
import New from "../view/new.vue"
import One from "../view/one.vue"


Vue.use(Router)

export default new Router({
  routes: [{
    name:"home",
    path:"/",
    component:Home,
    children:[
      {
    name:"new",
    path:"/new",
    component:New,
      },
      {
        name:"new",
        path:"/one",
        component:One,
      }
    ]
  }]
})
