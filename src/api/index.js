import http from "utils/request"

export const aroundList=()=>http({
    method:"get",
    url:"/game/api/peri_home.json",
    data:{
        type:"mobile",
        locale:"js",
        sonkwo_version:1,
        sonkwo_client:"mobile",
        q:["banners","nav_items","categories","game_tags","company_tags"],
        _:1575192435510
    }
})