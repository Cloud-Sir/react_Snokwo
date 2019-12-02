import React,{Fragment} from 'react';
import { Header, Article } from "./styled";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { mapStateToProps, mapDispatchToProps } from "./mapStore";
@connect(mapStateToProps,mapDispatchToProps)
@withRouter

class HeadlinesForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            id: '',
            name:""
        }
        let { id ,name} = this.props.match.params;
        this.state.id = id
        this.state.name = name
    }
    render() {
        let { what_info } = this.props;
        let arr = what_info.headlines ? what_info.headlines : []
        return (
            <Fragment>
                <Header>
                    <i className="iconfont left" onClick={this.handleBack.bind(this)}>{"\ue645"}</i>
                    <div>{this.state.name}</div>
                    <i className="iconfont right">{"\ue6a7"}</i>
                </Header>
                <Article>
                    {
                        arr.map((item) => ( 
                            <div className="headline-news-container" key={item.id} onClick={this.handleToArticleDetail.bind(this,item.id)}>
                                <div className="headline-news-container-img">
                                    <img src={item.thumbnail.url} alt="" />
                                </div>
                                <div className="headline-news-container-content">
                                    <div className="headline-news-title">{item.title}</div>
                                    <div className="headline-news-bottom">
                                        <div className="headlines-news-avatar">
                                            <img src={item.account.avatar} alt="" />
                                        </div>
                                        <div className="headlines-news-nickname">{item.account.nickname}</div>
                                        <div className="headline-news-bottom-time">11月26日</div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </Article>
            </Fragment>
        );
    }
    componentDidMount() {
        this.props.handlewhatInfo(this.state.id)
    }
    handleToArticleDetail(id) {
        this.props.history.push("/articledetail/"+id)
    }
    handleBack(){
        this.props.history.goBack()
    }
}

export default HeadlinesForm;