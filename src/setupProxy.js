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
    app.use("/auth", proxy({
        target: "http://auth.sonkwo.com",
        changeOrigin: true,
        pathRewrite: {
            "^/auth": ""
        }
    }))


}

