import  React from "react"
import {Head,Nav,Second} from "./styled"
import {Header} from "../styled/HeaderSearchStyle"

// import { Carousel } from 'antd';
class AroundSearch extends React.Component{
    constructor(){
        super()
    }
    render(){
        return(
            <div id="around">
                <Head>
                    <Header className="head">
                        <div>
                            <i className="iconfont">{'\ue645'}</i>
                            <span className="iconfont">{'\ue609'}</span>
                            <input type="text" value="搜搜你想要的周边" onChange={this.handleChange.bind(this)}/>
                            <i className="iconfont">{'\ue610'}</i>
                        </div>
                         <Nav>
                            <ul>
                                <li>
                                    <p>类型</p><i></i>
                                </li>
                                <li>
                                    <p>类型</p><i></i>
                                </li>
                                <li>
                                    <p>类型</p><i></i>
                                </li>
                            </ul>
                            {/* <div className="block"></div>//点击显现 */}
                        </Nav>      
                    </Header>     
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
    handleChange(){}
}
export default AroundSearch;