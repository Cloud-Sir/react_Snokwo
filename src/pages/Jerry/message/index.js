import React from "react";

import {Second} from "./styled"
import HeaderTitle from "components/Jerry/headers/headerTitle.js"
class Message extends React.Component{
    render(){
        return(
            <div className="message">
                <HeaderTitle title="消息中心"/>
                <Second>
                    <div className="apply">
                        <i className="iconfont">{'\ue7ee'}</i>
                        <h2>评论/回复我的</h2>
                        <i className="iconfont">{'\ue604'}</i>
                    </div>
                    <div className="apply">
                        <i className="iconfont">{'\ue700'}</i>
                        <h2>提到我的</h2>
                        <i className="iconfont">{'\ue604'}</i>
                    </div>
                    <div className="apply">
                        <i className="iconfont">{'\ue607'}</i>
                        <h2>赞和关注</h2>
                        <i className="iconfont">{'\ue604'}</i>
                    </div>
                    <div className="apply">
                        <i className="iconfont"><img  alt="" src="https://www.sonkwo.com/0c8251a324b4f343e88ecd3a5ff26bf7.png"/></i>
                        <h2>赞和关注</h2>
                        <i className="iconfont">{'\ue604'}</i>
                    </div>
                </Second>
            </div>
        )
    }
}
export default Message;