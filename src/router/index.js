import {Index,Headlines,Community,Cart,Mine,Login,Activities,Benefit,Peripheral,Publisher,Searchgame,Gamedetail} from "pages";

export const TabBarRoute = [
    {
        path:"/index",
        component:Index,
        meta:{
            flag:true
        },
        icon:"\ue694",
        text:"商城"
    },
    {
        path:"/headlines",
        component:Headlines,
        meta:{
            flag:true
        },
        icon:"\ue68b",
        text:"头条"
    },
    {
        path:"/community",
        component:Community,
        meta:{
            flag:true
        },
        icon:"\ue622",
        text:"社区"
    },
    {
        path:"/cart",
        component:Cart,
        meta:{
            flag:true
        },
        icon:"\ue639",
        text:"购物车"
    },
    {
        path:"/mine",
        component:Mine,
        meta:{
            flag:true,
            requiredAuth:false 
        },
        icon:"\ue617",
        text:"我的"
    }
]

export const NoTabBarRoute = [
    {
        path:"/login",
        component:Login,
        meta:{}
    },
    {
        path:"/activity",
        component:Activities,
        meta:{}
    },
    {
        path:"/benefit",
        component:Benefit,
        meta:{}
    },
    // {
    //     path:"/peripheral",
    //     component:Peripheral,
    //     meta:{}
    // },
    {
        path:"/publisher",
        component:Publisher,
        meta:{}
    },
    {
        path:"/searchgame",
        component:Searchgame,
        meta:{}
    },
    {
        path:"/gamedetail",
        component:Gamedetail,
        meta:{}
    },
    
    
]

export const RouteConfig = TabBarRoute.concat(NoTabBarRoute);
