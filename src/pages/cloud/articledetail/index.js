import React, { Fragment } from 'react';
import { Header, Container } from "./styled"
import {withRouter} from "react-router-dom"
@withRouter
class ArticleDetail extends React.Component {
    render() {
        return (
            <Fragment>
                <Header>
                    <i className="iconfont left" onClick={this.handleBack.bind(this)}>{"\ue645"}</i>
                    <div>文章详情</div>
                    <i className="iconfont right">{"\ue6a7"}</i>
                </Header>
                <Container>
                    <div className="headline-detail-banner">
                        <img src="https://s3.sonkwo.com/FkAgg2e8TSXdjHehOpBq-0eq073h?imageView2/1/w/320/h/125" />
                    </div>
                    <div className="title-container">
                        <h2>杉果黑五特惠将至：《大镖客2》首降 19.9福袋回归</h2>
                        <div className="account-info">
                            <div className="account-img">
                                <img src="https://s4.sonkwo.com/FubIpSNdDSHfjO89Kn4Nzt4DRy8J?imageView2/1/w/60/h/60" alt="" />
                            </div>
                            <div className="account-name">
                                杉果-破枪瘦马
                            </div>
                            <div className="account-follow">
                                +关注
                            </div>
                        </div>
                    </div>
                    <div className="headline-content">
                        {/* 数据直接渲染 */}
                    </div>
                </Container>
            </Fragment>
        );
    }
    handleBack(){
        this.props.history.goBack()
    }
}

export default ArticleDetail;