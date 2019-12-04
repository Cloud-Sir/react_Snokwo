import React, { Component } from 'react';
import { HomeModule } from "./styled"
import { Link } from "react-router-dom"
class Index extends Component {
    render() {
        // console.log(this.props, 888)
        let { data, title, price } = this.props
        return (
            <HomeModule>


                <div className="store-sec-kill-container">
                    <div className="store-sec-kill-header">
                        <div className="header">{title}</div>
                    </div>
                    <div className="sk-touch-group " style={{ height: "1.38rem" }}>

                        <div className="sk-touch-block" >
                            {

                                (data ? data : []).map((item, index) => (
                                    <Link className="sk-touch-container" key={index} to={"/gamedetail?id=" + (item.id ? item.id : item.accessible_id) + "&game_id=" + item.product_id}>
                                        <div className="game">

                                            <div className="store-item-card-container change-sku">
                                                <div className="card-img">
                                                    <img alt="" src={item.cover} />
                                                </div>
                                                <div className="card-content">
                                                    <div className="title">
                                                        <span className="sale-content inter">国际站</span>
                                                        {item.sku_name}
                                                    </div>
                                                    {
                                                        (price ? price : []).map((itm, ind) => (

                                                            (item.accessible_id ? item.accessible_id : item.id) === itm.id ?
                                                                (
                                                                    <div className="price-content" key={ind}>
                                                                        {"￥" + itm.sale_price}
                                                                        {
                                                                            (itm.list_price > itm.sale_price) ? (<div className="discount"><div>{-(Math.floor(((itm.list_price - itm.sale_price) / itm.list_price) * 100)) + "%"}</div></div>)
                                                                                : ""
                                                                        }
                                                                        {
                                                                            (itm.list_price > itm.sale_price) ? (<div className="list-price"><div>{itm.list_price}</div></div>)
                                                                                : ""
                                                                        }
                                                                    </div>
                                                                ) : ""




                                                        ))
                                                    }
                                                    {/*  */}
                                                </div>
                                            </div>


                                        </div>
                                    </Link >
                                ))
                            }
                        </div >

                    </div >
                </div >

            </HomeModule >
        );
    }
}

export default Index;


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