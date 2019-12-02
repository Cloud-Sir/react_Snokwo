import React, { Component } from 'react';
import { Fivebox} from "./styled"
import BScrollpublic from "common/bscroll";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { mapStateToProps, mapDispatchToProps } from "./mapStore"
@connect(mapStateToProps, mapDispatchToProps)
@withRouter
    
class Recommend extends Component {
    constructor() {
        super();
        this.page = 1;
    }
    render() {
        let { headline_five } = this.props;
        let headlines = headline_five.headlines;
        return (
            <BScrollpublic ref="scroll">
                <Fivebox>
                    {
                        (headlines ? headlines:[]).map((item,index) => (
                            <div className="headline-news-container" onClick={this.handleToArticleDetail.bind(this, item.id)} key={index} >
                                <div className="headline-news-container-img">
                                    <img src={item.cover.url} alt="" />
                                </div>
                                <div className="headline-news-container-content">
                                    <div className="headline-news-title">{item.title}</div>
                                    <div className="headline-news-bottom">
                                        <div className="headlines-news-avatar">
                                            <img src={item.account.avatar} alt="" />
                                        </div>
                                        <div className="headlines-news-nickname">{item.account.nickname}</div>
                                        <div className="headline-news-bottom-time">12月1日</div>
                                        <div className="headline-news-section" onClick={this.handleToHeadlinesform.bind(this, item.section.id,item.section.name)}>
                                            {item.section.name}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </Fivebox>
            </BScrollpublic >
        )
    }
    componentDidMount() {
        this.props.handlefiveAsyncData(this.page)
        this.page++;

        this.refs.scroll.handlepullingUp(() => {
            let page = this.page;
            this.props.handlefiveAsyncData( page);
            this.page++;
        })
    }
    componentWillUpdate() {
        this.refs.scroll.handlefinishPullUp();
    }
    handleToArticleDetail(id) {
        this.props.history.push("/articledetail/"+id);
    }
    handleToHeadlinesform(id,name,e) {
        e.stopPropagation();
        this.props.history.push("/headlinesform/"+id+"/"+name);
        
    }
}

export default Recommend;