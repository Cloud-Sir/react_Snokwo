// import http from "utils/request";
// export const headline_dataApi = () => http.get({
//     url: "/game/api/headline_page.json",
//     data: {
//         locale: "js",
//         sonkwo_version: 1,
//         sonkwo_client: "mobile",
//         q: ["sections", "mobile_banner"],
//         _: 1575188506403,
//     }
// })
import http from "utils/axios"

export const headline_dataApi = () => http({
    method:"get",
    url: "/game/api/headline_page.json",
    data: {
        locale: "js",
        sonkwo_version: 1,
        sonkwo_client: "mobile",
        q: ["sections", "mobile_banner"],
        _: 1575188506403,
    }
})

export const headline_fiveApi = (page=1) => http({
    method: "get",
    url: "/game/api/headlines.json",
    data: {
        locale: "js",
        sonkwo_version: 1,
        sonkwo_client: "mobile",
        page: page,
        per: 10,
        "q[label_in]":[1,2],
        _: 1575259193478
    }
})

export const article_detailApi = (id=1734) => http({
    method: "get",
    url: "/game/api//headlines/"+id+".json",
    data: {
        locale: "js",
        sonkwo_version: 1,
        sonkwo_client: "mobile",
        _: 1575274944504
    }
})

export const confusionApi = (id = 45) => http({
    method: "get",
    url: "/game/api/headlines.json",
    data: {
        locale: "js",
        sonkwo_version: 1,
        sonkwo_client: "mobile",
        page: 1,
        per: 10,
        "q[section_id_eq]": id,
        _: 1575188506440
    }
})

// 果贴详情拿不到数据
export const fruitpasteApi = (id = 310678) => http({
    method: "get",
    url: "/game/api/posts/"+id+".json",
    data: {
        locale: "js",
        sonkwo_version: 1,
        sonkwo_client: "mobile",
        _: 1575297208228
    }
})


export const hotpasteApi = () => http({
    method: "get",
    url: "/game/api/search/posts",
    data: {
        locale: "js",
        sonkwo_version: 1,
        sonkwo_client: "mobile",
        recommend: true,
        group_not_recommend: "disable",
        type: "Posts::Subject",
        page: 1,
        _: 1575297208216
    }
})

//最新帖子
//https://www.sonkwo.com/api/search/posts?locale=js&sonkwo_version=1&sonkwo_client=mobile&type=Posts%3A%3ASubject&group_not_recommend=disable&order%5Bpublished_at_timestamp%5D=desc&page=3&_=1575297208277
