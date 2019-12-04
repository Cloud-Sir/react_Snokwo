import React from "react";
import { Header, RegisterContainer } from "pages/cloud/register/styled";
import Reg from "static/cloud/img/reg.png";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "./mapStore"
@withRouter
@connect(mapStateToProps, mapDispatchToProps)
class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: "",
            psd: ""
        }
    }
    render() {
        let { user, psd } = this.state;
        let { user_info } = this.props;
        this.user_info = user_info;
        return (
            <div>
                <Header>
                    <a href="#/register">注册</a>
                    <p>登录</p>
                    <a href="#/">关闭</a>
                </Header>
                <RegisterContainer>
                    <div className="logo">
                        <img src={Reg} alt="" />
                    </div>
                    <label htmlFor="username">账 号 </label>
                    <input type="text" id="username" value={user} placeholder="请输入账号" onChange={this.handlevalue.bind(this, "user")} /><br />
                    <label htmlFor="psd">密 码 </label>
                    <input type="password" id="psd" value={psd} placeholder="请输入密码" onChange={this.handlevalue.bind(this, "psd")} /><br />
                    <button onClick={this.handlelogin.bind(this)}>登录</button>
                </RegisterContainer>
            </div>
        )
    }
    handlevalue(type, e) {
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
    handlelogin() {
        let user = this.state.user
        let psd = this.state.psd
        this.props.handleLoginAsync(user, psd)

        if (this.user_info.code == 0) {
            alert(this.user_info.info)
        }
        if (this.user_info.code == 1) {
            alert(this.user_info.info)
            this.props.history.push("/")
        }
    }
}

export default Login;