import React from "react";
import { Header, RegisterContainer } from "./styled";
import Reg from "static/cloud/img/reg.png";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import {mapStateToProps,mapDispatchToProps} from "./mapStore"
@withRouter
@connect(mapStateToProps,mapDispatchToProps)
class Register extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            user: "",
            psd: ""
        }
    }
    render() {
        let { user, psd } = this.state;
        let { judge } = this.props;
        this.judge = judge;
        // console.log(judge)
        return (
            <div>
                <Header>
                    <a href="#/login">登录</a>
                    <p>注册</p>
                </Header>
                <RegisterContainer>
                    <div className="logo">
                        <img src={Reg} alt=""/>
                    </div>
                    <label htmlFor="username">账 号 </label>
                    <input type="text" id="username" value={user} placeholder="请输入账号" onChange={this.handlevalue.bind(this,"user")}/><br />
                    <label htmlFor="psd">密 码 </label>
                    <input type="password" id="psd" value={psd} placeholder="请输入密码" onChange={this.handlevalue.bind(this, "psd")}/><br />
                    <button onClick={this.handleregister.bind(this)}>注册</button>
                    <div className="agreement">
                        注册代表你同意<span>《杉果协议》</span>和<span>《隐私协议》</span>
                    </div>
                </RegisterContainer>
            </div>
        )
    }
    handlevalue(type,e) {
        let val = e.target.value;
        switch (type) {
            case "user":
                this.setState({
                    user: val
                })
                break;
            case "psd":
                this.setState({
                    psd: val
                })
                break;
        }
    }
    handleregister() {
        let user = this.state.user
        let psd = this.state.psd
        this.props.handleregisterAsync(user, psd)
        if (this.judge.status == 2) {
            alert(this.judge.info)
        }
        if (this.judge.status == 1) {
            alert(this.judge.info)
            this.props.history.push("/login")
        }
    }
}

export default Register;