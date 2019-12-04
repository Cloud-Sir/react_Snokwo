import React, { Component } from 'react';
import Cookies from "js-cookie"

import {connect} from "react-redux";
import {mapStateToProps,mapDispatchToProps} from "./connect.js"
@connect(mapStateToProps,mapDispatchToProps)
class AroundCart extends Component {
        constructor() {
            super()
            this.state = {
                data: JSON.parse(Cookies.get("types")),
                price:0,
                isCheck: -1,
                allPrice:0
            }
        }
    render() {
        let { data, isCheck } = this.state;
        return (
            <div className="aroundCart">
                <ul>
                    {
                        data.map((item, key) => (
                            <li key={key}>
                                <div className="checkbox">
                                    <input type="checkbox" checked={isCheck == key ? true : false} onChange={this.handleChecked.bind(this, key, 0)}//eslint-disable-line
                                    />
                                </div>
                                <div className="image">
                                    <img  alt="" src={item.img}/>
                                </div>
                                <div className="describe">
                                    <div className="title">
                                        <h3>{item.name}</h3>
                                        <span>进度款未付款IG进而</span>
                                    </div>
                                    <div className="price">
                                        <p>￥{item.price}</p>
                                        <div className="count">
                                            <h4 onClick={this.handleAmount.bind(this,key,2)}>-</h4>
                                            <h5>{item.count}</h5>
                                            <h4 onClick={this.handleAmount.bind(this,key,1)}>+</h4>
                                        </div>
                                    </div>
                                </div>
                            </li>  
                        ))
                    }
                    </ul>
            </div>
        );
    }
    handleAmount(key, tip, e) {
        let data = this.state.data;
        let isCheck = this.state.isCheck;
        if (tip == 1) { //eslint-disable-line
            data[key].count += 1;
        } else {
            data[key].count-=1;
        }
        if (data[key].count <= 0) { //eslint-disable-line
            this.handleDelete(key)
        }
        this.handleState(data);
        if (isCheck == key) { //eslint-disable-line
            this.handleChecked(key,tip);
        }
       
    }
    handleDelete(key) {
        let data = this.state.data;
        data.splice(data[key], 1)
        this.handleState(data);
    }
    handleChecked(key, flag, e) {
        let data = this.state.data;
        let price = 0;
        let isCheck = this.state.isCheck;
        var allPrice = this.state.allPrice;
        //从未点击过
        if (isCheck == -1 && flag == 0) { //eslint-disable-line
            price = Number(data[key].price*data[key].count);
            isCheck = key;
            allPrice += price;
            //点击取消一个
        } else if (isCheck == key && flag == 0) { //eslint-disable-line
            price = Number(data[key].price * data[key].count);
            isCheck = -1;
            allPrice -= price;
             //更改数量时计算
        } else if (flag == 2) { //eslint-disable-line
            price = Number(data[key].price * 1);
             allPrice -= price;
        } else if (flag == 1) { //eslint-disable-line
            price = Number(data[key].price * 1);
            allPrice += price;
        }
        this.setState({
            data: data,
            isCheck: isCheck,
            allPrice:allPrice
        }, () => {
                this.props.savePrice(allPrice);
        })
        
    }
    handleState(data) {
        this.setState({
            data:data
        })
        Cookies.set("types", JSON.stringify(this.state.data));
    }
}

export default AroundCart;