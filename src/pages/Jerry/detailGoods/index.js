import React from "react"
import HeaderTitle from "components/Jerry/headers/headerTitle.js"
import { Second, Footer } from "./styled"

import {withRouter} from "react-router-dom"
import {connect} from "react-redux";
import {mapStateToProps,mapDispatchToProps} from "./connect.js"
@connect(mapStateToProps, mapDispatchToProps)
@withRouter
class DetailGoods extends React.Component{
    constructor() {
        super()
        this.state = {
            id:""
        }
    }
    render() {
        let { detailList, price } = this.props;
        let { id } = this.state;
        let skus = detailList.skus;
        if (skus) {
            var attrs = [];
            var vals = [];
            for (var i = 0; i < skus.length; i++){
                if (skus[i].sku_attrs) {
                    attrs = skus[i].sku_attrs;
                }
                if (skus[i].sku_vals) {
                    vals = skus[i].sku_vals;
                }
            }
        }
        let arrPrice = price.price;
        if (arrPrice) {
            var _price;
            for (var i = 0; i < arrPrice.length; i++){
                if (arrPrice[i].id == id) {
                    _price = arrPrice[i];
                }
            }
        }
        return(
            <div className="detailGoods">
                <HeaderTitle title="商品详情"/>
                <Second>
                    <div className="image">
                        <img src={detailList.product_image}/>
                    </div>
                    <div className="describe">
                        <h2>{detailList.alias_name}</h2>
                        {_price ? <p><i>{_price.sale_price}</i><del>{_price.list_price}</del></p> : ""}
                        {/* {service ? <span>{service.service_cooked}</span>:""} */}
                        {/* 叫我干嘛:<strong>进度款我的肌肤网络挂</strong> */}
                    </div>
                    <div className="size">
                        {
                            (attrs ? attrs : []).map((item, index) => (
                                <div className="one" key={index}>
                                    <h3>{item.name}</h3>
                                    <div className="color">
                                        {
                                            (vals ? vals : []).map((n, key) => (
                                                <span key={key}>{n.sku_attr_id==item.id?n.name:''}</span>
                                            ))
                                        }
                                    </div>
                                </div>
                            ))
                        }
                        <div className="three">
                            <h3>购买数量</h3>
                            <div className="count">
                                <h4>-</h4>
                                <h5>1</h5>
                                <h4>+</h4>  
                            </div>
                        </div>
                        </div>
                    <div className="introduce">
                        <div className="nav">
                            <div className="child"><span>商品介绍</span></div>
                            <div className="child"><span>售后服务</span></div>
                        </div>
                        <div className="detail">
                            <img src="https://s1.sonkwo.com/FpYXzP0_0Fs2QebeegDAmCkQKRGt"/>
                        </div>
                    </div>
                </Second>
                <Footer>
                    <div className="cart">
                        <i className="iconfont">{'\ue639'}</i>
                        <span>购物车</span>
                    </div>
                    <div className="collect">
                        <i>❤</i>
                        <span>收藏</span>
                    </div>
                    <div className="add">
                        <p>加入购物车</p>
                    </div>
                    <div className="buy">
                        <p>立即购买</p>
                    </div>
                </Footer>
            </div>
        )
    }
    componentDidMount() {
        let id = this.props.history.location.search.replace("?sku_id=", "");
        this.setState({
            id:Number(id)
        })
        this.props.handleGetDetails(Number(id));
        this.props.handleGetPrice();
    }
}
export default DetailGoods;