import React from "react";
import {Hotpastea} from "./styled"
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "./mapStore";
@connect(mapStateToProps,mapDispatchToProps)
@withRouter
class Hotpaste extends React.Component{
    render() {
        let { hot_list } = this.props;
        let info = hot_list.posts;
        console.log(info,3456)
        return (
            <div>
                <Hotpastea>
                    {
                        (info ? info:[]).map((item,index) => (
                            <div className="group-topic-container" onClick={this.handleToFruitpasteDetail.bind(this,item)} key={index}>
                                <div className="group-topic-user-info">
                                    <div>
                                        <img src={item.creator.avatar} alt="" />
                                    </div>
                                    <div className="group-topic-right">
                                        <p className="group-topic-name">{item.creator.nick_name}</p>
                                        <p className="group-topic-time">2019-11-26</p>
                                    </div>
                                </div>
                                <div className="group-topic-info">
                                    {item.content}
                                </div>
                                <div className="topic-images-container">
                                    {
                                        item.image_urls.map((child, index) => (
                                            <img src={child} alt="" key={index}/>
                                        ))
                                    }
                                </div>
                                 <div className="group-topic-bottom">
                                     <div className="group-topic-from-left">
                                        <span>来自：<a href="#/groups" onClick={this.handleBubble.bind(this)}>{item.group.name}</a></span>
                                     </div>
                                     <div className="group-topic-from-right">
                                         <i className="iconfont">{"\ue7ee"}</i>
                                        <span className="space-right">{item.comment_count}</span>
                                         <i className="iconfont">{"\ue607"}</i>
                                        <span>{item.likes_count}</span>
                                     </div>
                                 </div>
                             </div>
                        ))
                    }
                </Hotpastea>
            </div>
        )
    }
    componentDidMount() {
        this.props.handleHotpasteAsync()
    }
    handleToFruitpasteDetail(item) {
        this.props.history.push("/fruitpastedetail/"+item.id,item)
    }
    handleBubble(e) {
        e.stopPropagation();
    }
}

export default Hotpaste;