import http from "utils/request"
export const homeApi = () => http.get({
    url: "/api/v7/home.json",
    data: {
        locale: "js",
        sonkwo_version: 1,
        sonkwo_client: "mobile",
        q: ['mobile_banner', 'headlines', 'change_skus', 'boxes', 'booths', 'groups', 'recommend_posts', 'recommend_headlines'],
        // "q[]": "headlines",
        // 'q[]': "recommend_skus",
        // 'q[]': "change_skus",
        // 'q[]': "boxes",
        // 'q[]': "booths",
        // 'q[]': "groups",
        // 'q[]': "recommend_posts",
        // 'q[]': "recommend_headlines",
        _: new Date().getTime()    //时间戳
    }
})
// https://www.sonkwo.com/api/v7/home.json?
// locale = js & sonkwo_version=1 & sonkwo_client=mobile & q % 5B % 5D = mobile_banner & q % 5B % 5D = headlines & q % 5B % 5D = recommend_skus & q % 5B % 5D = change_skus & q % 5B % 5D = boxes & q % 5B % 5D = booths & q % 5B % 5D = groups & q % 5B % 5D = recommend_posts & q % 5B % 5D = recommend_headlines & _=1575122415831
export const publisherApi = () => http.get({
    url: "/grace/api/home.json",
    data: {
        'locale': "js",
        'sonkwo_version': '1',
        'sonkwo_client': "mobile",
        'q[]': 'publishers_all',
        '_': Number(new Date().getTime())
    }
})
// http://www.sonkwo.com/api/home.json?
// locale=js&sonkwo_version=1&sonkwo_client=mobile&q%5B%5D=publishers_all&_=1575123312428

export const activitiesApi = (date) => http.get({//活动中心
    url: "/grace/api/v7/home.json",
    data: {
        locale: "js",
        sonkwo_version: '1',
        sonkwo_client: "mobile",
        q: ['mobile_ad'],
        _: date
    }
})
// http://www.sonkwo.com/api/v7/home.json?
// locale = js & sonkwo_version=1 & sonkwo_client=mobile & q % 5B % 5D = mobile_ad & _=1575127054765