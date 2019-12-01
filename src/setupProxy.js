const proxy = require("http-proxy-middleware");

module.exports = (app)=>{
    console.log(444)
    app.use("/game",proxy({
        target:"https://www.sonkwo.com",
        changeOrigin:true,
        pathRewrite:{
            "^/game":""
        }
    }))
}

