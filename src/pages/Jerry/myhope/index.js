import React, { Component } from 'react';
import {Header} from "../styled/HeaderStyled"
class index extends Component {
    render() {
        return (
            <div className="myhope">
                <Header>
                    <i className="iconfont">{'\ue645'}</i>
                    <p>我的心愿单</p>
                    <span>隐私设置</span>
                </Header>
            </div>
        );
    }
}

export default index;