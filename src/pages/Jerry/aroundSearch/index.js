import React from "react"
import { Head, Nav, Second } from "./styled"
import HeaderSearch from "components/Jerry/headers/headerSearch.js"
import { withRouter } from "react-router-dom"

<<<<<<< HEAD
import {connect} from "react-redux";
import {mapStateToProps,mapDispatchToProps} from "./connect.js"
=======
import { connect } from "react-redux";

import { mapStateToProps, mapDispatchToProps } from "./connect.js"
>>>>>>> 521593ce45b35c69d2bd6e21111849a44188e31c
@connect(mapStateToProps, mapDispatchToProps)
    
@withRouter
class AroundSearch extends React.Component {
    constructor() {
        super()
        this.state = {
            isShow: false,
            n: 0,
<<<<<<< HEAD
        }
    }
    render() {
        let { list,searchData} = this.props;
        let { categories, company_tags, game_tags } = list;
        console.log(searchData);
        let { isShow, n} = this.state;
        return(
=======
            list: []
        }
    }
    render() {
        let { list } = this.props;
        this.setState({
            list: list
        })
        let { isShow, n } = this.state;
        let { categories, company_tags, game_tags } = list;
        // console.log(categories, company_tags, game_tags);
        // console.log(list);
        return (
>>>>>>> 521593ce45b35c69d2bd6e21111849a44188e31c
            <div id="around">
                <Head>
                    <HeaderSearch />
                    <Nav>
                        <ul>
                            <li onClick={this.handleClick.bind(this, 1)} className={n == 1 ? 'active' : ""}//eslint-disable-line
                            >
                                <p>类型</p><i></i>
                            </li>
                            <li onClick={this.handleClick.bind(this, 2)} className={n == 2 ? 'active' : ""} //eslint-disable-line
                            >
                                <p>品牌</p><i></i>
                            </li>
                            <li onClick={this.handleClick.bind(this, 3)} className={n == 3 ? 'active' : ""}//eslint-disable-line
                            >
                                <p>游戏</p><i></i>
                            </li>
                        </ul>
                        <div className="isShow" style={{ display: isShow ? "block" : "none" }}>
                            <ol>
                                {
                                    (list ? (n == 1 ? categories : (n == 2 ? company_tags : (n == 3 ? game_tags : []))) : []).map((item, key) => (//eslint-disable-line
                                        <li key={key}>{item.name}</li>
                                    ))
                                }
<<<<<<< HEAD
=======

>>>>>>> 521593ce45b35c69d2bd6e21111849a44188e31c
                            </ol>
                        </div>
                    </Nav>
                </Head>
                <Second>
                    <div className="result">
                        <p>共找到了{searchData.length}个结果</p>
                        <ul>
<<<<<<< HEAD
                            {
                                (searchData?searchData:[]).map((item,key) => (
                                    <li key={key}>
                                        <div className="imag">
                                            <img src={item.pic} alt=""/>    
                                        </div>
                                        <p>{item.schedular_name}</p>
                                        <strong>￥{item.show_stock}</strong>
                                    </li> 
                                ))
                            }
                           
=======
                            <li>
                                <div className="imag">
                                    <img src="https://s1.sonkwo.com/Fpy_mA1aBqndZgfGbP-yTkCSdcKH?imageMogr2/thumbnail/512" alt="" />
                                </div>
                                <p>就都能上课的结果</p>
                                <strong>￥188</strong>
                            </li>
                            <li>
                                <div className="imag">
                                    <img src="https://s1.sonkwo.com/Fpy_mA1aBqndZgfGbP-yTkCSdcKH?imageMogr2/thumbnail/512" alt="" />
                                </div>
                                <p>就都能上课的结果</p>
                                <strong>￥188</strong>
                            </li>
                            <li>
                                <div className="imag">
                                    <img src="https://s1.sonkwo.com/Fpy_mA1aBqndZgfGbP-yTkCSdcKH?imageMogr2/thumbnail/512" alt="" />
                                </div>
                                <p>就都能上课的结果</p>
                                <strong>￥188</strong>
                            </li>
>>>>>>> 521593ce45b35c69d2bd6e21111849a44188e31c
                        </ul>
                    </div>
                </Second>
            </div>
        )
    }
    componentDidMount() {
<<<<<<< HEAD
        // let _id = this.props.history.location.search.replace("?nav_items_id=", "");
=======
        let _id = this.props.history.location.search.replace("?nav_items_id=", "");//eslint-disable-line
>>>>>>> 521593ce45b35c69d2bd6e21111849a44188e31c
        this.props.handleGetData();
        this.props.handleGetSearchData();
    }
    handleClick(index, e) {
        let flag = this.state.isShow;
        let key = this.state.n;
<<<<<<< HEAD
        if (key == 0) { //eslint-disable-line
=======
        if (key == 0) {//eslint-disable-line
>>>>>>> 521593ce45b35c69d2bd6e21111849a44188e31c
            key = index;
        } else {
            key = 0;
        }
        flag = !flag;
        this.setState({
            isShow: flag,
            n: key
        })
    }
}
export default AroundSearch;