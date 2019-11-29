import Vue from 'vue'
import Router from 'vue-router'
import Home from "../view/home.vue"
import New from "../view/new.vue"
import One from "../view/one.vue"
import Tre from "../view/tre.vue"
import Four from "../view/four.vue"
import Two from "../view/two.vue"



Vue.use(Router)

export default new Router({
  routes: [{
    name: "ABOUT",
    path: "/",
    redirect: "/new",
    component: Home,
    meta: { title: "about" },
    children: [
      {
        name: "new",
        path: "/new",
        component: New,
        meta: { title: "",},
      },
      {
        name: "tre",
        path: "tre",
        component: Tre,
        meta: { title: "456" },

      },
      {
        name: "ABC",
        path: "abc",
        component: One,
        meta: { title: "ABC" },
      },
      {
        name: "one",
        path: "one",
        component: One,
        meta: { title: " about US" },
      },
      {
        name: "two",
        path: "two",
        component: Two,
        meta: { title: "222" },
      },
      {
        name: "four",
        path: "four",
        component: Four,
        meta: { title: "111" },
      },
    ]
  },
  ]
})
