import React from "react"
import HeaderTitle from "components/Jerry/headers/headerTitle.js"
import { Second, Footer,Introduce} from "./styled"
import Cookies from "js-cookie"

import { withRouter,NavLink} from "react-router-dom"
import {connect} from "react-redux";
import {mapStateToProps,mapDispatchToProps} from "./connect.js"

@connect(mapStateToProps, mapDispatchToProps)
@withRouter
class DetailGoods extends React.Component{
    constructor() {
        super()
        this.state = {
            id: "",
            isShow: 1,
            isCheck:-1,
            count: 1,
            obj:{},
            types: [],
        }
    }
    render() {
        let { detailList, price } = this.props;
        let { id, isShow, isCheck, count } = this.state;
        let skus = detailList.skus;
        if (detailList.introduce) {
            var introduce = detailList.introduce;
        }
        if (skus) {
            var attrs = [];
            var vals = [];
            for (var i = 0; i < skus.length; i++){
                if (skus[i].sku_attrs) {
                    attrs = skus[i].sku_attrs;
                }
                if (skus[i].sku_vals) {
                    let obj = (skus[i].sku_vals)[0];
                    vals.push(obj);
                }
            }
        }
        let arrPrice = price.price;var _price;
        if (arrPrice) {
            for (var i = 0; i < arrPrice.length; i++){
                if (arrPrice[i].id == id) {
                    _price = arrPrice[i];
                    break;
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
                        {_price ?<p><i>{_price.sale_price}</i><del>{_price.list_price}</del></p>: ""}
                        {/*{service ? <span>{service.service_cooked}</span>:""}  */}
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
                                            n.sku_attr_id == item.id ? <span key={key} className={isCheck == key ? 'check' : ""}//eslint-disable-line
                                            onClick={this.handleCheckName.bind(this,n.name,key,skus,vals,_price)}>{n.name}</span> : ''
                                        ))
                                    }
                                </div>
                            </div>
                        ))
                        }
                        <div className="three">
                            <h3>购买数量</h3>
                            <div className="count">
                                <h4 onClick={this.handleCount.bind(this,2)}>-</h4>
                                <h5>{count}</h5>
                                <h4 onClick={this.handleCount.bind(this, 1)}>+</h4>  
                            </div>
                        </div>
                        </div>
                    <Introduce>
                        <div className="nav">
                            < div className="child">
                                <span onClick={this.handleClick.bind(this, 1)} className={isShow == 1 ? 'active' : ""}//eslint-disable-line
                                >商品介绍</span>
                            </div>
                            <div className="child">
                                <span onClick={this.handleClick.bind(this, 2)} className={isShow == 2 ? 'active' : ""}//eslint-disable-line
                                >售后服务</span>
                            </div>
                        </div>
                        <div className="detail" style={{ display: isShow == 1 ? 'block' : 'none' }}//eslint-disable-line
                        >
                            {
                                <div dangerouslySetInnerHTML={{__html:introduce? introduce.description_cooked:"".content}}></div>
                            }
                        </div>
                        <div className="detail" style={{ display: isShow == 2 ? 'block' : 'none' }}//eslint-disable-line
                        >
                            {
                                <div dangerouslySetInnerHTML={{ __html: introduce ? introduce.service_cooked: "".content }}></div>
                            }
                        </div>
                    </Introduce>
                </Second>
                <Footer>
                    <div className="cart">
                        <i className="iconfont">{'\ue639'}</i>
                        <NavLink to="/cart/aroundCart"><span>购物车</span></NavLink>
                    </div>
                    <div className="collect">
                        <i>❤</i>
                        <span>收藏</span>
                    </div>
                    <div className="add" onClick={this.handleAddCart.bind(this)}>
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
        let id = this.props.history.location.search.replace("?", "").split(/\W/g);
        this.setState({
            id:Number(id[1])
        })
        this.props.handleGetDetails(Number(id[3]));
        this.props.handleGetPrice();
    }
    handleClick(flag, e) {
        this.setState({
            isShow:flag
        })
    }
    handleCount(n, e) {
        var num = this.state.count;
        if (n == 1) {//eslint-disable-line
            num++;
        } else {
            num--;
        }
        this.setState({
            count: num
        })
    }
    handleCheckName(name, key, skus, vals,_price, e) {
        let check = this.state.isCheck;
        let obj = this.state.obj;
        let count = this.state.count;
        var price = _price.list_price;
        if (check >= -1) {//eslint-disable-line
            check = key;
            obj.color = name;
            obj.price = price;
            obj.name = skus[check].sku_name;
            obj.img = skus[check].cover;
            obj.vals = vals;
            obj.count = count;
        } else {
            check = -1;
            obj={}
        }
        this.setState({
            isCheck: check,
            obj:obj
        })
    }
    handleAddCart(e){
        let array = this.state.types;
        let num = this.state.count;
        let obj = this.state.obj;
        let isCheck = this.state.isCheck;
        if (isCheck==-1) {
             alert("请选择规格")
        } else {
            obj.count = num;
            array.push(obj);
        }
        this.setState({
            types:array,
            obj: obj,
            count: num
        })
        if (Cookies.get("types")) {
            let arr = JSON.parse(Cookies.get("types"));
            let tag = false;
            for (var i = 0; i < arr.length; i++) {
                if (arr[i].name == this.state.types.name) { //eslint-disable-line
                    arr[i].count += this.state.types.count;
                    tag = true;
                    break;
                }
            }
            if(tag==false){ arr = arr.concat(this.state.types)}
            Cookies.set("types", JSON.stringify(arr));
        } else {
            Cookies.set("types", JSON.stringify(this.state.types));
        }
       
    }
}
export default DetailGoods;