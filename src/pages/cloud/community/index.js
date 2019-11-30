import React from "react";
import {Header,Footer,Cut,Section} from "./styled";
// import Group from "components/cloud/community/group";
import Fruitpaste from "components/cloud/community/fruitpaste";
import {withRouter} from "react-router-dom"
@withRouter
class Community extends React.Component {
    render() {
        return (
            <div>
                <Header>
                    <i className="iconfont left">{"\ue610"}</i>
                    <div>杉果社区</div>
                    <i className="iconfont right" onClick={this.handleToAllSearch.bind(this)}>{"\ue609"}</i>
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
            </div>
        )
    }
    handleToAllSearch(){
        this.props.history.push("/allsearch")
    }
}

export default Community;