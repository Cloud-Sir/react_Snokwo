const proxy = require("http-proxy-middleware");

module.exports = (app) => {
    app.use("/grace", proxy({
        target: "http://www.sonkwo.com",
        changeOrigin: true,
        pathRewrite: {
            "^/grace": ""
        }
    }))
    app.use("/game", proxy({
        target: "https://www.sonkwo.com",
        changeOrigin: true,
        pathRewrite: {
            "^/game": ""
        }
    }))
    app.use("/juooo", proxy({
        target: "https://api.juooo.com",
        changeOrigin: true,
        pathRewrite: {
            "^/juooo": ""
        }
    }))
    // https://api.juooo.com/card/index/getExchangeList?group_id=228&page=1&city_id=0&show_name=AF&version=6.0.8&referer=2
    app.use("/auth", proxy({
        target: "http://auth.sonkwo.com",
        changeOrigin: true,
        pathRewrite: {
            "^/auth": ""
        }
    }))

    app.use("/game_detail", proxy({
        target: "http://www.sonkwo.hk",
        changeOrigin: true,
        pathRewrite: {
            "^/game_detail": ""
        }
    }))


}

