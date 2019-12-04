import { DetailGoods, AroundSearch, AroundClassify, Message, Index, Headlines, Community, Cart, AroundCart, GameCart, Mine, Login, Activities, Benefit, Peripheral, Publisher, Searchgame, Gamedetail, Fruitpastedetail, Groups, Allsearch, Articledetail, Headlinesform, Fruitpaste, Group} from "pages";

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
        text:"社区",
        chaildren:[
            {
                path:"/community/fruitpaste",
                component:Fruitpaste,
                meta:{
                    flag:true
                },
            },
            {
                path:"/community/group",
                component:Group,
                meta:{
                    flag:true
                },
            }
            
        ]
    },
    {
        path:"/cart",
        component:Cart,
        meta:{
            flag:true
        },
        icon:"\ue639",
        text:"购物车",
        // children:[
        //     {
        //         path: "/cart/gameCart",
        //         component:GameCart,
        //         meta:{
        //             flag:true
        //         }
        //     },
        //     {
        //         path:"/cart/aroundCart",
        //         component:AroundCart,
        //         meta:{
        //             flag:true
        //         }
        //     }
        // ]
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
    {
        path:"/peripheral",
        component:Peripheral,
        meta:{}
    },
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
    
    {
        path:"/articledetail/:id",
        component:Articledetail,
        meta:{}
    },
    {
        path:"/headlinesform/:id/:name",
        component:Headlinesform,
        meta:{}
    },
    {
        path:"/allsearch",
        component:Allsearch,
        meta:{}
    },
    {
        path:"/fruitpastedetail/:id",
        component:Fruitpastedetail,
        meta:{}
    },
    {
        path:"/groups",
        component:Groups,
        meta: {}
    },
    {
        path:"/message",
        component:Message,
        meta:{}
    },
    {
        path: "/AroundClassify",
        component:AroundClassify,
        meta:{}
    },
    {
        path:"/aroundSearch",
        component:AroundSearch,
        meta: {}
    },
    {
        path: "/detailGoods",
        component: DetailGoods,
        meta: {},
    }
]

export const RouteConfig = TabBarRoute.concat(NoTabBarRoute);
