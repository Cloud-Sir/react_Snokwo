import React,{Fragment} from 'react';
import {Header,Article} from "./styled"
import {withRouter} from "react-router-dom";

@withRouter

class HeadlinesForm extends React.Component {
    render() {
        return (
            <Fragment>
                <Header>
                    <i className="iconfont left" onClick={this.handleBack.bind(this)}>{"\ue645"}</i>
                    <div>折扣信息</div>
                    <i className="iconfont right">{"\ue6a7"}</i>
                </Header>
                <Article>
                        <div className="headline-news-container">
                            <div className="headline-news-container-img">
                                <img src="https://s3.sonkwo.com/FiWVZyg_lOxgvqWF8rwpZPVizdhO?imageMogr2/thumbnail/1000|imageView2/1/w/290/h/194" alt=""/>
                            </div>
                            <div className="headline-news-container-content">
                                <div className="headline-news-title">
                                    杉果黑五特惠将至：《大镖客2》首降 19.9福袋回归
                                </div>
                                <div className="headline-news-bottom">
                                    <div className="headlines-news-avatar">
                                        <img src="https://s4.sonkwo.com/FubIpSNdDSHfjO89Kn4Nzt4DRy8J?imageView2/1/w/60/h/60" alt=""/>
                                    </div>
                                    <div className="headlines-news-nickname">
                                        杉果-破枪瘦马
                                    </div>
                                    <div className="headline-news-bottom-time">
                                        11月26日
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="headline-news-container">
                            <div className="headline-news-container-img">
                                <img src="https://s3.sonkwo.com/FiWVZyg_lOxgvqWF8rwpZPVizdhO?imageMogr2/thumbnail/1000|imageView2/1/w/290/h/194" alt=""/>
                            </div>
                            <div className="headline-news-container-content">
                                <div className="headline-news-title">
                                    杉果黑五特惠将至：《大镖客2》首降 19.9福袋回归
                                </div>
                                <div className="headline-news-bottom">
                                    <div className="headlines-news-avatar">
                                        <img src="https://s4.sonkwo.com/FubIpSNdDSHfjO89Kn4Nzt4DRy8J?imageView2/1/w/60/h/60" alt=""/>
                                    </div>
                                    <div className="headlines-news-nickname">
                                        杉果-破枪瘦马
                                    </div>
                                    <div className="headline-news-bottom-time">
                                        11月26日
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Article>
            </Fragment>
        );
    }
    handleBack(){
        this.props.history.goBack()
    }
}

export default HeadlinesForm;