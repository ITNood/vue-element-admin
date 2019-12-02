const listRoutes = {
    routes: [{
        title: "导航",
        path: "/",
        redirect:"new",
        icon: "el-icon-menu",
        children: [
            {
                title: "新闻",
                path: "/new",
                children: []
            },
            {
                title: "我的",
                path: "/abc",
                children: []
            },
            {
                title: "关于我们",
                path: "/one",
                children: []
            },

                {
                    title: "数据",
                    path: "/two",
                    children: [
                        {
                            title: "接口",
                            path: "/tre",
                            children: []
                        }
                    ]
                }
            ]
        },
    ]
}

export default listRoutes
