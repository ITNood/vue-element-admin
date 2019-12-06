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
      // children: []
    },
   // muneroute
  {
    name: "home",
    path: "/home",
    component: () => import('@/component/header.vue'),
    meta: { title: "首页", icon: "el-icon-s-tools" },
    children: [
      {
        path: "/redirect",
        component: () => import('@/view/route.vue'),
        meta: { title: "新闻", icon: "el-icon-menu" },
        children: [
          {
            path: "/echart",
            component: () => import('@/view/echarts.vue'),
            meta: { title: "导航", icon: "el-icon-menu" },
            children: []
          }
        ]
      }
    ]
  }

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

