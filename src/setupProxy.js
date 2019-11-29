const proxy = require("http-proxy-middleware");

module.exports = (app)=>{
    app.use("/game",proxy({
        target:"https://www.sonkwo.com",
        changeOrigin:true,
        pathRewrite:{
            "^/game":""
        }
    }))
}

