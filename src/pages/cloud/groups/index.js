import React, { Component } from 'react';
import {Header,Downextrusion,Groupspagecontainer,Groupposts} from "./styled";
import Fruitpastep from "components/cloud/groups/fruitpaste";
import Yelp from "components/cloud/groups/yelp"
import Achievementp from "components/cloud/groups/achievement"
import Rankingp from "components/cloud/groups/ranking";
import Engagementp from "components/cloud/groups/engagement"
import {withRouter,NavLink,Switch,Redirect,Route,Link} from "react-router-dom";
@withRouter
class Groups extends Component {
    constructor(props) {
        super(props);
        this.game_id = window.location.href.split("=")[1]
    }
    
    render() {
        return (
            <div>
                 <Header>
                    <i className="iconfont left" onClick={this.handleToBack.bind(this)}>{"\ue645"}</i>
                    <div>小组页</div>
                    <i className="iconfont right">{"\ue6a7"}</i>
                </Header>
                <Downextrusion/>
                <Groupspagecontainer>
                    <div className="groups-introduction">
                        <div className="group-base-container">
                            <div className="group-base-img">
                                <img src="http://s1.sonkwo.hk/medium/910135728720663/file/44212/sonkwo-top-L-Red-Dead-Redemption-2.jpg" alt=""/>
                            </div>
                            <div className="base-info">
                                <h4>荒野大镖客：救赎2</h4>
                                <div className="info-introduction-center">
                                    <i className="iconfont">{"\ue605"}</i>
                                    <span>45814</span>
                                    <i className="iconfont">{"\ue68b"}</i>
                                    <span>1354</span>
                                </div>
                                <div className="info-introduction-leaders">
                                    组长：<div><img src="https://s4.sonkwo.com/FsUt62OuKJKBeH1SyFc6AGnnpIAo?imageView2/1/w/60/h/60" alt=""/></div>
                                </div>
                            </div>
                        </div>  
                        <div className="group-btn-container">
                            <Link to={"/gamedetail?id=2508&game_id=" + this.game_id}><div className="btn-normal">游戏详情</div></Link>
                            <div className="btn-focus">关注小组</div>
                        </div>
                    </div>
                    <Groupposts>
                        <ul>
                            <li><NavLink to="/groups/fruitpaste" activeClassName="activebian">果贴</NavLink></li>
                            <li><NavLink to="/groups/yelp" activeClassName="activebian">点评</NavLink></li>
                            <li><NavLink to="/groups/achievement" activeClassName="activebian">成就</NavLink></li>
                            <li><NavLink to="/groups/ranking" activeClassName="activebian">排行</NavLink></li>
                            <li><NavLink to="/groups/engagement" activeClassName="activebian">约战</NavLink></li>
                        </ul>
                    </Groupposts>
                    <div>
                        <Switch>
                            <Route path="/groups/fruitpaste" component={Fruitpastep} exact />
                            <Route path="/groups/yelp" component={Yelp} />
                            <Route path="/groups/achievement" component={Achievementp} />
                            <Route path="/groups/ranking" component={Rankingp} />
                            <Route path="/groups/engagement" component={Engagementp} />
                            <Redirect from="/groups" to="/groups/fruitpaste"/>
                        </Switch>
                    </div>
                </Groupspagecontainer>
            </div>
        );
    }
    handleToBack(){
        this.props.history.goBack()
    }
}

export default Groups;