import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
import layout from "../layout"
const routerList = [
  {
    name: "login",
    path: "/",
    component: () => import('@/view/login/index.vue'),
    //meta: { title: "首页", icon: "el-icon-s-tools" },
    children: []
  },
  {
    name: "home",
    path: "/home",
    redirect: "index",
    component: () => import('@/component/header.vue'),
    meta: { title: "首页", icon: "el-icon-s-tools" },
    children: [
      {
        name: "index",
        path: "/first",
        component: () => import('@/view/first.vue'),
        meta: { title: "接口", icon: "el-icon-menu" },
        children: [],
      },
      {
        name: "redirect",
        path: "/redirect",
        redirect: "/echart",
        component: () => import('@/view/route.vue'),
        meta: { title: "导航", icon: "el-icon-menu" },
        children: [
          {
            name: "echart",
            path: "/echart",
            component: () => import('@/view/echarts.vue'),
            meta: { title: "echart", icon: "el-icon-menu" },
            children: []
          },
        ]
      },
      {
        path: "/one",
        component: () => import('@/view/route.vue'),
        meta: { title: "导航", icon: "el-icon-menu" },
        children: [
          {
            path: "/name",
            redirect: "/name",
            component: () => import('@/view/route.vue'),
            meta: { title: "name", icon: "el-icon-menu" },
            children: [
              {
                path: "/tre",
                component: () => import('@/view/tre.vue'),
                meta: { title: "nico", icon: "el-icon-menu" },
                children: []
              },
            ]
          },
        ]
      },
    ]
  },
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

