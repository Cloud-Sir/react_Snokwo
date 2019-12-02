import React, { Fragment } from 'react';
import { Header, Container } from "./styled"
import { withRouter } from "react-router-dom"
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "./mapstore";
@connect(mapStateToProps, mapDispatchToProps)
@withRouter
class ArticleDetail extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            id: ''  
        }
        let { id } = this.props.match.params;
        this.state.id = id
    }
    render() {
        let { article_detail } = this.props;
        let cover = article_detail.cover ? article_detail.cover : "";
        let account = article_detail.account ? article_detail.account : "";
        return (
           
            <Fragment>
                <Header>
                    <i className="iconfont left" onClick={this.handleBack.bind(this)}>{"\ue645"}</i>
                    <div>文章详情</div>
                    <i className="iconfont right">{"\ue6a7"}</i>
                </Header>
                <Container>
                    <div className="headline-detail-banner">
                        <img src={cover.url} alt="" />
                    </div>
                    <div className="title-container">
                        <h2>{article_detail.title}</h2>
                        <div className="account-info">
                            <div className="account-img">
                                <img src={account.avatar} alt="" />
                            </div>
                            <div className="account-name">{account.nickname}</div>
                            <div className="account-follow">+关注</div>
                        </div>
                    </div>
                    <div className="headline-content" dangerouslySetInnerHTML={{ __html: article_detail.content }}/>
                </Container>
            </Fragment>
        );
    }
    componentDidMount() {
        this.props.handleAsyncarticledetail(this.state.id)
    }
    handleBack(){
        this.props.history.goBack()
    }
}

export default ArticleDetail;