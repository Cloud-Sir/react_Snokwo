import React from "react";
import {Header,Footer,Cut,Section} from "./styled";
// import Group from "../../../components/cloud/community/group";
import Fruitpaste from "../../../components/cloud/community/fruitpaste";

class Community extends React.Component {
    render() {
        return (
            <div>
                <Header>
                    <i className="iconfont left">{"\ue610"}</i>
                    <div>杉果社区</div>
                    <i className="iconfont right">{"\ue609"}</i>
                </Header>
                <Cut>
                    <ul>
                        <li className="active">果贴</li>
                        <li>小组</li>
                    </ul>
                </Cut>
                <Section>
                    {/* <Group/> */}
                    <Fruitpaste/>
                </Section>
                <Footer>
                    <ul>
                        <li>
                            <i className="iconfont">{"\ue694"}</i>
                            <span>商城</span>
                        </li>
                        <li>
                            <i className="iconfont">{"\ue68b"}</i>
                            <span>头条</span>
                        </li>
                        <li>
                            <i className="iconfont">{"\ue622"}</i>
                            <span>社区</span>
                        </li>
                        <li>
                            <i className="iconfont">{"\ue639"}</i>
                            <span>购物车</span>
                        </li>
                        <li>
                            <i className="iconfont">{"\ue617"}</i>
                            <span>我的</span>
                        </li>
                    </ul>
                </Footer>
            </div>
        )
    }
}

export default Community;