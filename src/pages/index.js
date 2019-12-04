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

export const Headlines = Loadable({ //头条
    loader: () => import("./cloud/headlines"),
    loading: Loading
})

export const Articledetail = Loadable({ //文章详情
    loader: () => import("./cloud/articledetail"),
    loading: Loading
})

export const Headlinesform = Loadable({ //折扣信息等详情
    loader: () => import("./cloud/headlinesform"),
    loading: Loading
})

export const Community = Loadable({ //社区
    loader: () => import("./cloud/community"),
    loading: Loading
})

export const Fruitpaste = Loadable({ //社区二级路由果贴
    loader: () => import("components/cloud/community/fruitpaste"),
    loading: Loading
})

export const Group = Loadable({ //社区二级路由小组
    loader: () => import("components/cloud/community/group"),
    loading: Loading
})

export const Fruitpastedetail = Loadable({ //果贴详情
    loader: () => import("./cloud/fruitpastedetail"),
    loading: Loading
})

export const Groups = Loadable({ //小组页
    loader: () => import("./cloud/groups"),
    loading: Loading
})

export const Allsearch = Loadable({ //社区里的搜索
    loader: () => import("./cloud/search"),
    loading: Loading
})

export const Beingsearch = Loadable({ //社区里搜索按下回车的的页面
    loader: () => import("./cloud/searching"),
    loading: Loading
})

export const Cart = Loadable({
    loader: () => import("./Jerry/cart"),//购物车
    loading: Loading
})
export const AroundCart = Loadable({
    loader: () => import("./Jerry/cart/aroundCart"),//购物车子路由
    loading: Loading
})
export const GameCart = Loadable({
    loader: () => import("./Jerry/cart/gameCart"),//购物车子路由
    loading: Loading
})

export const Mine = Loadable({
    loader: () => import("./Jerry/mine"),//我的
    loading: Loading
})

export const Message = Loadable({
    loader: () => import("./Jerry/message"),//消息中心
    loading: Loading
})

export const Login = Loadable({
    loader: () => import("./Jerry/login"),//登录页面
    loading: Loading
})

export const Register = Loadable({
    loader: () => import("./cloud/register"),//注册页面
    loading: Loading
})

export const AroundClassify=Loadable({
    loader:()=>import("./Jerry/aroundClassify"),//周边分类
    loading:Loading
})
export const AroundSearch=Loadable({
    loader:()=>import("./Jerry/aroundSearch"),//周边分类
    loading:Loading
})
export const DetailGoods = Loadable({
    loader: () => import("./Jerry/detailGoods"), //详情分类
    loading: Loading
})
