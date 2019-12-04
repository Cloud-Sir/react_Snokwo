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
    app.use("/ajax", proxy({
        target: "http://m.maoyan.com",
        changeOrigin: true,
        // pathRewrite: {
        //     "^/game": ""
        // }
    }))
    // http://m.maoyan.com/ajax
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

    app.use("/juooo", proxy({
        target: "https://api.juooo.com",
        changeOrigin: true,
        pathRewrite: {
            "^/juooo": ""
        }
    }))


}

