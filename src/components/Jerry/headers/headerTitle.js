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
                    <NavLink to={this.props.opera == '编辑' ? '' : '/message'}><span onClick={this.hanldeDel.bind(this)}//eslint-disable-line
                    >{this.props.opera}</span></NavLink>
                </Head>
            </div>
        );
    }
    handleBack(){
        this.props.history.goBack();
    }
    hanldeDel() {
        this.props.handle('编辑')
    }
}

export default HeaderTitle;