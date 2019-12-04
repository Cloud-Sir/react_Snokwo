import React,{Fragment} from "react";
import { Header, Main, Todo, Article, Covertightly} from "./styled"
import { Carousel } from 'antd-mobile';
import { withRouter, NavLink, Switch, Route, Redirect ,Link} from "react-router-dom";
import Recommend from "components/cloud/headlines/recommend";
import Information from "components/cloud/headlines/information"; 
import Articlec from "components/cloud/headlines/article";
import Video from "components/cloud/headlines/video"; 
import Radiostation from "components/cloud/headlines/radiostation";
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps} from "./mapStore"
@connect(mapStateToProps,mapDispatchToProps)
@withRouter
class Headlines extends React.Component{
    render() {
        let { headline_data } = this.props;
        let mobile_banner = headline_data.mobile_banner
        return (
            <Fragment>
                <Header>
                    <i className="iconfont"><Link to="/message">{"\ue610"}</Link></i>
                    <div>杉果头条</div>
                </Header>
                <Covertightly></Covertightly>
                <Main>
                    <div className="qwer">
                        <Carousel autoplay infinite dotActiveStyle={{background:"red"}} style={{ touchAction: "none" }}>
                            {
                                (mobile_banner ? mobile_banner.banners:[]).map((item,index) => (
                                    <div className="swiper" key={index}>
                                        <p>
                                            <img src={item.cover} alt=""/>
                                        </p>
                                    </div>
                                ))
                            }
                        </Carousel>
                        <Todo>
                            <ul>
                                <li><NavLink to="/headlines/recommend" activeClassName="dynamic">推荐</NavLink></li>
                                <li><NavLink to="/headlines/information" activeClassName="dynamic">资讯</NavLink></li>
                                <li><NavLink to="/headlines/article" activeClassName="dynamic">文章</NavLink></li>
                                <li><NavLink to="/headlines/video" activeClassName="dynamic">视频</NavLink></li>
                                <li><NavLink to="/headlines/radiostation" activeClassName="dynamic">电台</NavLink></li>
                            </ul>
                        </Todo>
                    </div>
                    <Article>
                        <Switch>
                            <Route path="/headlines/recommend" component={Recommend} exact />
                            <Route path="/headlines/information" component={Information} />
                            <Route path="/headlines/article" component={Articlec} />
                            <Route path="/headlines/video" component={Video} />
                            <Route path="/headlines/radiostation" component={Radiostation} />
                        </Switch>
                        <Redirect from="/headlines" to="/headlines/recommend" /> 
                    </Article>
                </Main>
            </Fragment>
        )
    }
    componentDidMount() {
        this.props.handleHeadAsyncData()
    }
}

export default Headlines;