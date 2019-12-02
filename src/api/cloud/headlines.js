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

