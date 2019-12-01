import axios from "axios"
//创建新的axios
const server = axios.create({
    timeout: 5000,
    withCredentials: true, //表示跨域请求时是否需要使用凭证
    //baseURL:"http://www.baidu.com"  判断是开发环境还是生产环境?
})
//请求拦截
server.interceptors.request.use((config) => {
    if (config.method == "get") {
        config.params = { ...config.data };
    }
    //config.headers["auth"] = "Cookie.get('token')"
    return config;
})
//响应拦截
server.interceptors.response.use((res) => {
    if (res.status == 200) {
        return res.data;
    }
})
export default server; 