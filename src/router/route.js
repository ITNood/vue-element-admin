
const muneroute = {
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




export default muneroute





    //     {
    //         name: "home",
    //         path: "/home",
    //         component: () => import('@/view/home.vue'),
    //         meta: { title: "首页", icon: "el-icon-s-tools"},
    //         children: []
    //       },
    //       {
    //         //name: "导航",
    //         path: "/redirect",
    //         component: ()=>import('@/component/header.vue'),
    //         redirect:"echarts",
    //         meta: { title: "导航", icon: "el-icon-menu" },
    //         children: [
    //           {
    //             //name属性与一级一致则不会新增
    //             name: "echarts",
    //             path: "/echarts",
    //             component: ()=>import('@/view/echarts'),
    //             meta: { title: "echarts", icon: "" },
    //           },

    //           {
    //             name: "one",
    //             path: "/one",
    //             component: ()=>import('@/view/one'),
    //             meta: { title: "我的"},
    //           },
    //           {
    //             name: 'tre',
    //             path: '/tre',
    //             component: () => import('@/view/tre'),
    //             meta:{title:'接口'}
    //           },
    //           {
    //             path: '/excel',
    //             component: () => import('@/view/excel/route.vue'),
    //             redirect: "/excel/export-excel",
    //             name: 'Excel',
    //             meta: {
    //               title: 'Excel',
    //               icon: 'excel'
    //             },
    //             children: [
    //               {
    //                 path: '/export-excel',
    //                 component: () => import('@/view/excel/export-excel'),
    //                 name: 'ExportExcel',
    //                 meta: { title: 'Export Excel' }
    //               },

    //             ]
    //           },

    //         ]
    //       }