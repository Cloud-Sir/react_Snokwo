import React from "react";
import {Header,Cut,Section} from "./styled";
import Group from "components/cloud/community/group";
import Fruitpaste from "components/cloud/community/fruitpaste";
import {withRouter,Switch,Route,NavLink,Redirect,Link} from "react-router-dom"
@withRouter
class Community extends React.Component {
    render() {
        return (
            <div>
                <Header>
                    <i className="iconfont"><Link to="/message">{"\ue610"}</Link></i>
                    <div>杉果社区</div>
                    <i className="iconfont right" onClick={this.handleToAllSearch.bind(this)}>{"\ue609"}</i>
                </Header>
                <Cut>
                    <ul>
                        <li><NavLink to="/community/fruitpaste" activeClassName="activefruit">果贴</NavLink></li>
                        <li><NavLink to="/community/group" activeClassName="activefruit">小组</NavLink></li>
                    </ul>
                </Cut>
                <Section>
                    <Switch>
                        <Route path="/community/fruitpaste" component={Fruitpaste} exact />
                        
                        <Route path="/community/group" component={Group}/>
                    </Switch>
                    <Redirect from="/community" to="/community/fruitpaste"/>
                </Section>
            </div>
        )
    }
    handleToAllSearch(){
        this.props.history.push("/allsearch")
    }
}

export default Community;