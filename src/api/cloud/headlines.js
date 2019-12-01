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


