import http from "utils/axios"

export const aroundListApi = () => http({
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
export const aroundDataApi = () => http({
    method: "get",
    url: "/game/api/peripherals/peri_banners.json",
    data: {
        locale: "js",
        sonkwo_version: 1,
        sonkwo_client: "mobile",
        page: 1,
        per: 5,
        _: 1575281294555
    }
})
export const aroundPriceApi = () => http({
    method: "get",
    url: "http://localhost:3000/aroundGoods",
})

export const aroundSearchApi = () => http({
    method: "get",
    url: "/game/api/search/skus.json",
    data: {
        page: 1,
        per: 10,
        // "q[where,cate]": "physical",
        'q["where","_or","tag","all"]': 17,
        'q[where,cate]': "physical",
        locale: "js",
        sonkwo_version: 1,
        sonkwo_client: "mobile",
        _: 1575271758428
    }
})

export const detailListApi = (id) => http({
    method: "get",
    url: "/game/api/products/"+id+".json",
    data: {
        locale: "js",
        sonkwo_version: 1,
        sonkwo_client: "mobile",
        _: 1575294884576
    }
})
