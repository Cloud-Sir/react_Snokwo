import React from "react";
import {Searchcontainer,Header,Searchhistory} from "./styled";

class Search extends React.Component{
    render(){
        return(
            <Searchcontainer>
                <Header>
                    <div className="searchkeyword">
                        <i className="iconfont">{"\ue609"}</i>
                        <input type="text" placeholder="请输入关键字"/>
                    </div>
                    <div className="cancle">取消</div>
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
}

export default Search;