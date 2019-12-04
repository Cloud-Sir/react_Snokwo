import React from "react";
import { Newestpastea } from "./styled"
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "./mapStore";
@connect(mapStateToProps, mapDispatchToProps)
@withRouter
class Newest extends React.Component {
    render() {
        let { newset_list } = this.props;
        console.log(newset_list, 444)
        return (
            <div>
                <Newestpastea>
                    {
                        (newset_list.posts ? newset_list.posts : []).map((item,index) => (
                            <div className="group-topic-container" onClick={this.handleToFruitpasteDetail.bind(this, item)} key={index}>
                                <div className="group-topic-user-info">
                                    <div>
                                        <img src="https://s4.sonkwo.com/FtahHtFM-uazdCQ0wzuWeMuL9ECh" alt="" />
                                    </div>
                                    <div className="group-topic-right">
                                        <p className="group-topic-name">{item.creator.nick_name}</p>
                                        <p className="group-topic-time">2019-12-4</p>
                                    </div>
                                </div>
                                <div className="group-topic-info">
                                    {item.content}
                                </div>
                                <div className="topic-images-container">
                                    {
                                        item.image_urls.map((child, index) => (
                                            <img src={child} alt="" key={index} />
                                        ))
                                    }
                                </div>
                                <div className="group-topic-bottom">
                                    <div className="group-topic-from-left">
                                        <span>来自：<a href={"#/groups/fruitpaste?id=" + item.group.id} onClick={this.handleBubble.bind(this)}>{item.group.name}</a></span>
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
                </Newestpastea>
            </div>
        )
    }
    componentDidMount() {
        this.props.handleNewestAsync()
    }
    handleToFruitpasteDetail(item) {
        this.props.history.push("/fruitpastedetail/" + item.id, item)
    }
    handleBubble(e) {
        e.stopPropagation();
    }
}

export default Newest;