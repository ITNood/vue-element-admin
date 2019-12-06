import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
import muneroute from './route'

const routerList= [
    {
      name: "login",
      path: "/",
      component: () => import('@/view/tre.vue'),
      meta: { title: "首页", icon: "el-icon-s-tools"},
      children: [],
      hidden:true
    },
    muneroute
  ]


const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: routerList
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router

