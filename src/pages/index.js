import Loadable from "react-loadable";
import Loading from "common/loading";

export const Index = Loadable({
    loader: () => import("./grace/index"),
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
export const Mine = Loadable({
    loader: () => import("./Jerry/mine"),
    loading: Loading
})

export const Login = Loadable({
    loader: () => import("./Jerry/login"),
    loading: Loading
})