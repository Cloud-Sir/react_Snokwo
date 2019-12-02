import React, { Component } from 'react';
import { withRouter } from "react-router-dom";

@withRouter
    
class Article extends Component {
    render() {
        return (
            <div className="headline-news-container" onClick={this.handleToArticleDetail.bind(this, 1735)}>
                <div className="headline-news-container-img">
                    <img src="https://s3.sonkwo.com/FgsDiQalS5WChGtruq0MZtx0Hw6_?imageMogr2/thumbnail/1000|imageView2/1/w/290/h/194" alt="" />
                </div>
                <div className="headline-news-container-content">
                    <div className="headline-news-title">
                        大人，时代没变！2019年我们劈过的子弹
                                </div>
                    <div className="headline-news-bottom">
                        <div className="headlines-news-avatar">
                            <img src="https://s4.sonkwo.com/FtLSeS32dZ5r26P8LvcKZSe5VXGT?imageView2/1/w/60/h/60" alt="" />
                        </div>
                        <div className="headlines-news-nickname">
                            HypnosiaVX5
                                    </div>
                        <div className="headline-news-bottom-time">
                            12月2日
                                    </div>
                        <div className="headline-news-section" onClick={this.handleToHeadlinesform.bind(this,4,"原创专栏")}>
                            原创专栏
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    handleToArticleDetail(id) {
        this.props.history.push("/articledetail/"+id);
    }
    handleToHeadlinesform(id,name,e) {
        e.stopPropagation();
        this.props.history.push("/headlinesform/"+id+"/"+name);
    }
}

export default Article;