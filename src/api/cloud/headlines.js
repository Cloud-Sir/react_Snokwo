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

export const getNewestListApi = () => http({
    method: "get",
    url: "/game/api/search/posts",
    data: {
        locale: "js",
        sonkwo_version: 1,
        sonkwo_client: "mobile",
        type: "Posts::Subject",
        group_not_recommend: "disable",
        "order[published_at_timestamp]": "desc",
        page: 1,
        _: 1575389303849
    }
})

export const getCncernListApi = () => http({
    method: "get",
    url: "/game/api/search/posts",
    data: {
        locale: "js",
        sonkwo_version: 1,
        sonkwo_client: "mobile",
        type: "Posts::Subject",
        relation: true,
        page: 1,
        _: 1575389303849
    }
})

export const lefttagsApi = () => http({
    method: "get",
    url: "/game/api/tags.json",
    data: {
        locale: "js",
        sonkwo_version: 1,
        sonkwo_client: "mobile",
        "q[kind_eq]": 11,
        _: 1575335770914
    }
})

export const righttagsApi = (eqid=1696) => http({
    method: "get",
    url: "/game/api/communities/groups.json",
    data: {
        locale: "js",
        sonkwo_version: 1,
        sonkwo_client: "mobile",
        "q[tags_id_eq]": eqid,
        _: 1575335770943
    }
})

export const getShowListApi = (keywords) => http({
    method: "get",
    url: "/juooo/Show/Search/getShowList",
    data: {
        keywords: keywords,
        page: 1,
        sort_type: 1,
        version: "6.0.8",
        referer: 2,
    }
})

export const registerApi = (user,psd) => http({
    method: "post",
    url: "/hao//users/register",
    data: {
        username: user,
        password:psd
    }
})

export const loginApi = (user, psd) => http({
    method: "post",
    url: "/hao//users/login",
    data: {
        username: user,
        password: psd
    }
})