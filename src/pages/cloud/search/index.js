import React from "react";
import {Searchcontainer,Header,Searchhistory} from "./styled";
import {withRouter} from "react-router-dom"

@withRouter
class Search extends React.Component{
    render(){
        return(
            <Searchcontainer>
                <Header>
                    <div className="searchkeyword">
                        <i className="iconfont">{"\ue609"}</i>
                        <input type="text" placeholder="请输入关键字"/>
                    </div>
                    <div className="cancle" onClick={this.handleToBack.bind(this)}>取消</div>
                </Header>
                <Searchhistory>
                    <div className="history-record">
                        搜索历史
                    </div>
                    <ul>
                        <li>123 <span>✖</span></li>
                        <li>123 <span>✖</span></li>
                        <li>123 <span>✖</span></li>
                        <li>123 <span>✖</span></li>
                    </ul>
                </Searchhistory>
            </Searchcontainer>
        )
    }
    handleToBack(){
        this.props.history.goBack()
    }
}

export default Search;