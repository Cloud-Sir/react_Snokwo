import React, { Component } from 'react';
import { HomeModule } from "./styled"
import { Link } from "react-router-dom"
class index extends Component {
    render() {
        console.log(this.props, 888)
        let { data } = this.props
        return (
            <HomeModule>

                {
                    (data ? data : []).map((item, index) => (
                        <div className="store-sec-kill-container" key={index}>
                            <div className="store-sec-kill-header">
                                <div className="header">{item.name}</div>
                            </div>
                            <div className="sk-touch-group " style={{ height: "1.38rem" }}>
                                <div className="sk-touch-block">
                                    <div className="sk-touch-container">


                                        <Link to="/gamedetail" className="game">
                                            <div className="store-item-card-container change-sku">
                                                <div className="card-img">
                                                    <img alt="" src="http://s1.sonkwo.hk/medium/910135728720663/file/34822/b89d7a9ab936a65fa1383e46a844463a?x-oss-process=image/resize,limit_0,m_fill,w_150,h_89" />
                                                </div>
                                                <div className="card-content">
                                                    <div className="title">
                                                        <span className="sale-content inter">国际站</span>
                                                        方舟：生存进化 DLC季票
                                                        </div>
                                                    <div className="price-content">
                                                        ￥61
                                                        <div className="discount">
                                                            -50%
                                                            </div>
                                                        <div className="list-price">
                                                            122
                                                                </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>







                                    </div >
                                </div >
                            </div >
                        </div >
                    ))
                }
            </HomeModule >
        );
    }
}

export default index;


/*
 {
"name": "黑五优品特辑",
    "items": [{
        "id": 138,
        "title": "黑五优品【新作佳选】",
        "cover": "https://s3.sonkwo.com/FrrChDj5p2LT5DblY4KadNAGn6Y-",
        "kind": "pagination"
    },
    {
        "id": 137,
        "title": "黑五优品【5元以下】",
        "cover": "https://s3.sonkwo.com/Fjc52NjOJV2CzGdZIosPVg5Mf_c3",
        "kind": "pagination"
    },
    {
        "id": 136,
        "title": "黑五优品【GearBox】",
        "cover": "https://s3.sonkwo.com/FkjKNwa8NKWJPRAYzfz7ra1xZaB5",
        "kind": "pagination"
    }
    ]
            },
*/