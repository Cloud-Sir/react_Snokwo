import React, { Component } from 'react';
import {Head} from "./HeaderStyled"
import {NavLink,withRouter} from "react-router-dom"
@withRouter
class HeaderTitle extends Component {
    render() {
        return (
            <div className="header">
                <Head>
                    <i className="iconfont" onClick={this.handleBack.bind(this)}>{'\ue645'}</i>
                    <p>{this.props.title}</p>
                    <span><NavLink to="/message">{this.props.opera}</NavLink></span>
                </Head>
            </div>
        );
    }
    handleBack(){
        this.props.history.goBack();
    }
}

export default HeaderTitle;