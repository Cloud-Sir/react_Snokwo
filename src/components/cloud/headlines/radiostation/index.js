import React, { Component } from 'react';
import { withRouter } from "react-router-dom";

@withRouter
    
class Radiostation extends Component {
    render() {
        return (
            <div className="headline-news-container" onClick={this.handleToArticleDetail.bind(this, 775)}>
                <div className="headline-news-container-img">
                    <img src="https://s3.sonkwo.com/FogBep0Rj2cQz-OMJawmM-GfS-i1?imageMogr2/thumbnail/1000|imageView2/1/w/290/h/194" alt="" />
                </div>
                <div className="headline-news-container-content">
                    <div className="headline-news-title">
                        【Sonkwo Plus】法国大革命:风暴将至
                                </div>
                    <div className="headline-news-bottom">
                        <div className="headlines-news-avatar">
                            <img src="https://s4.sonkwo.com/FuALjq1MZoaZ1TITUUsKcEfAdVm4?imageView2/1/w/60/h/60" alt="" />
                        </div>
                        <div className="headlines-news-nickname">
                            积木xiao
                         </div>
                        <div className="headline-news-bottom-time">
                            6月28日
                        </div>
                        <div className="headline-news-section" onClick={this.handleToHeadlinesform.bind(this, 6,"Sonkwo Plus")}>
                            Sonkwo Plus
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

export default Radiostation;