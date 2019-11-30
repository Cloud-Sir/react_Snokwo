import Loadable from "react-loadable";
import Loading from "common/loading";

export const Index = Loadable({// 首页
    loader: () => import("./grace/index"),
    loading: Loading
})
export const Activities = Loadable({// 活动
    loader: () => import("./grace/activities"),
    loading: Loading
})
export const Benefit = Loadable({//优惠
    loader: () => import("./grace/discount"),
    loading: Loading
})
export const Peripheral = Loadable({// 周边
    loader: () => import("./Jerry/around"),
    loading: Loading
})
export const Publisher = Loadable({// 厂商目录
    loader: () => import("./grace/directory"),
    loading: Loading
})
export const Searchgame = Loadable({// 游戏搜索
    loader: () => import("./grace/searchgame"),
    loading: Loading
})
export const Gamedetail = Loadable({// 游戏详情
    loader: () => import("./grace/gamedetail"),
    loading: Loading
})



export const Headlines = Loadable({
    loader: () => import("./cloud/headlines"),
    loading: Loading
})

export const Articledetail = Loadable({
    loader: () => import("./cloud/articledetail"),
    loading: Loading
})

export const Headlinesform = Loadable({
    loader: () => import("./cloud/headlinesform"),
    loading: Loading
})

export const Community = Loadable({
    loader: () => import("./cloud/community"),
    loading: Loading
})

export const Fruitpastedetail = Loadable({
    loader: () => import("./cloud/fruitpastedetail"),
    loading: Loading
})

export const Groups = Loadable({
    loader: () => import("./cloud/groups"),
    loading: Loading
})

export const Allsearch = Loadable({
    loader: () => import("./cloud/search"),
    loading: Loading
})
export const Cart = Loadable({
    loader: () => import("./Jerry/cart"),
    loading: Loading
})
export const AroundCart = Loadable({
    loader: () => import("./Jerry/cart/aroundCart"),
    loading: Loading
})
export const GameCart = Loadable({
    loader: () => import("./Jerry/cart/gameCart"),
    loading: Loading
})

export const Mine = Loadable({
    loader: () => import("./Jerry/mine"),
    loading: Loading
})

export const Login = Loadable({
    loader: () => import("./Jerry/login"),
    loading: Loading
})