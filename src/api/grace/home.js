// import http from "utils/request"
// export const homeApi = () => http.get({//首页
//     url: "/api/v7/home.json",
//     data: {
//         locale: "js",
//         sonkwo_version: 1,
//         sonkwo_client: "mobile",
//         q: ['mobile_banner', 'headlines', 'change_skus', 'boxes', 'booths', 'groups', 'recommend_posts', 'recommend_headlines'],
//         // "q[]": "headlines",
//         // 'q[]': "recommend_skus",
//         // 'q[]': "change_skus",
//         // 'q[]': "boxes",
//         // 'q[]': "booths",
//         // 'q[]': "groups",
//         // 'q[]': "recommend_posts",
//         // 'q[]': "recommend_headlines",
//         _: new Date().getTime()    //时间戳
//     }
// })
// https://www.sonkwo.com/api/v7/home.json?
// locale = js & sonkwo_version=1 & sonkwo_client=mobile & q % 5B % 5D = mobile_banner & q % 5B % 5D = headlines & q % 5B % 5D = recommend_skus & q % 5B % 5D = change_skus & q % 5B % 5D = boxes & q % 5B % 5D = booths & q % 5B % 5D = groups & q % 5B % 5D = recommend_posts & q % 5B % 5D = recommend_headlines & _=1575122415831
// export const publisherApi = () => http.get({
//     url: "/grace/api/home.json",
//     data: {
//         'locale': "js",
//         'sonkwo_version': '1',
//         'sonkwo_client': "mobile",
//         'q[]': 'publishers_all',
//         '_': Number(new Date().getTime())
//     }
// })
// http://www.sonkwo.com/api/home.json?
// locale=js&sonkwo_version=1&sonkwo_client=mobile&q%5B%5D=publishers_all&_=1575123312428

// export const activitiesApi = (date) => http.get({//活动中心
//     url: "/grace/api/v7/home.json",
//     data: {
//         locale: "js",
//         sonkwo_version: '1',
//         sonkwo_client: "mobile",
//         q: ['mobile_ad'],
//         _: date
//     }
// })
// http://www.sonkwo.com/api/v7/home.json?
// locale = js & sonkwo_version=1 & sonkwo_client=mobile & q % 5B % 5D = mobile_ad & _=1575127054765




import http from "utils/axios"

export const publisherApi = () => http({//厂商目录
    method: "get",
    url: "http://localhost:3000/changshang",
})
export const homeApi = () => http({//首页
    method: "get",
    url: "http://localhost:3000/home",
})
export const homelistApi = () => http({//首页
    method: "get",
    url: "http://localhost:3000/homelist",
})

export const activityApi = () => http({//活动
    method: "get",
    url: "http://localhost:3000/huodong",
})
export const gamedetailApi = (game_id = 527) => http({//游戏详情
    method: "get",
    url: "/game_detail/api/products/" + game_id + ".json",
    data: {
        locale: "js",
        sonkwo_version: '1',
        sonkwo_client: "mobile",
        _: 1575290987548
    }
})
// http://www.sonkwo.hk/api/products/527.json?locale=js&sonkwo_version=1&sonkwo_client=mobile&_=1575290987548
// export const searchApi = (keyword) => http({//游戏详情
//     method: "get",
//     url: "/grace/api/search/autocomplete.json",
//     data: {
//         locale: "js",
//         sonkwo_version: '1',
//         sonkwo_client: "mobile",
//         _: 1575290987548,
//         keyword: 88,
//         per: 7,
//     }
// })
// https://www.sonkwo.com/api/search/autocomplete.json?locale=js&sonkwo_version=1&sonkwo_client=mobile&keyword=88&per=7&_=1575357132921

export const searchApi = (keywords) => http({//搜索聚橙数据
    method: "get",
    url: "/juooo/Show/Search/getShowList",
    data: {
        sort_type: '1',
        group_id: "228",
        page: '1',
        version: " 6.0.8",
        referer: 2,
        keywords,
    }
})
//  https://api.juooo.com/Show/Search/getShowList?keywords=1&page=1&sort_type=1&version=6.0.8&referer=2
//  https://api.juooo.com/card/index/getExchangeList?group_id=228&page=1&city_id=0&show_name=AF&version=6.0.8&referer=2
//优惠券 https://www.sonkwo.com/api/event_gift_packs.json?locale=js&sonkwo_version=1&sonkwo_client=mobile&page=1&per=10&_=1575386628113
