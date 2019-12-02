import  React from "react"
import {Head,Nav,Second} from "./styled"
import HeaderSearch from "components/Jerry/headers/headerSearch.js"
import {withRouter} from "react-router-dom"

import {connect} from "react-redux";

import {mapStateToProps,mapDispatchToProps} from "./connect.js"
@connect(mapStateToProps, mapDispatchToProps)
@withRouter
class AroundSearch extends React.Component{
    constructor() {
        super()
        this.state = {
            isShow: false,
            n: 0,
            list:[]
        }
    }
    render() {
        let { list } = this.props;
        this.setState({
            list:list
        })
        let { isShow ,n} = this.state;
        let { categories, company_tags, game_tags } = list;
        console.log(categories, company_tags, game_tags);
        console.log(list);
        return(
            <div id="around">
                <Head>
                    <HeaderSearch/>
                        <Nav>
                            <ul>
                            <li onClick={this.handleClick.bind(this,1)} className={n==1?'active':""}>
                                    <p>类型</p><i></i>
                                </li>
                            <li onClick={this.handleClick.bind(this, 2)} className={n == 2 ?'active':""}>
                                    <p>品牌</p><i></i>
                                </li>
                            <li onClick={this.handleClick.bind(this, 3)} className={n == 3 ?'active':""}>
                                    <p>游戏</p><i></i>
                                </li>
                        </ul>
                        <div className="isShow" style={{ display: isShow ? "block" : "none" }}>
                            <ol>
                                {
                                    (list ? (n == 1 ? categories : (n == 2 ? company_tags : (n == 3 ? game_tags : []))) : []).map((item, key) => (
                                        <li key={key}>{item.name}</li>
                                    ))
                                }
                               
                            </ol>
                        </div>
                        </Nav>      
                </Head>
                <Second>
                    <div className="result">
                        <p>就得开始你看反馈两个</p>
                        <ul>
                            <li>
                                <div className="imag">
                                    <img src="https://s1.sonkwo.com/Fpy_mA1aBqndZgfGbP-yTkCSdcKH?imageMogr2/thumbnail/512"/>    
                                </div>
                                <p>就都能上课的结果</p>
                                <strong>￥188</strong>
                            </li>
                            <li>
                                <div className="imag">
                                    <img src="https://s1.sonkwo.com/Fpy_mA1aBqndZgfGbP-yTkCSdcKH?imageMogr2/thumbnail/512"/>    
                                </div>
                                <p>就都能上课的结果</p>
                                <strong>￥188</strong>
                            </li>
                            <li>
                                <div className="imag">
                                    <img src="https://s1.sonkwo.com/Fpy_mA1aBqndZgfGbP-yTkCSdcKH?imageMogr2/thumbnail/512"/>    
                                </div>
                                <p>就都能上课的结果</p>
                                <strong>￥188</strong>
                            </li>
                        </ul>
                    </div>
                </Second>
                </div>
        )
    }
    componentDidMount() {
        let _id = this.props.history.location.search.replace("?nav_items_id=", "");
        this.props.handleGetData();
        this.props.handleGetSearchData();
    }
    handleClick(index, e) {
        let flag = this.state.isShow;
        let key = this.state.n;
        if (key==0) {
            key = index;
        } else {
            key = 0;
        }
        flag = !flag;
        this.setState({
            isShow: flag,
            n:key
        })
    }
}
export default AroundSearch;