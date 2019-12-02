import React, { Component } from 'react';
import {Header} from "./HeaderSearchStyle.js"
import {NavLink,withRouter} from "react-router-dom"
@withRouter
class HeaderSearch extends Component {
    render() {
        return (
                <Header>
                    <div>
                        <i className="iconfont" onClick={this.handleBack.bind(this)}>{'\ue645'}</i>
                        <span className="iconfont">{'\ue609'}</span>
                        <input type="text" placeholder="搜搜你想要的周边" onChange={this.handleChange.bind(this)}/>
                        <NavLink to="/message"><i className="iconfont">{'\ue610'}</i></NavLink>
                    </div>
                </Header>
        );
    }
    handleChange(){}
    handleBack(){
        // this.props.history.push("/message")
        this.props.history.goBack()
    }
}

export default HeaderSearch;