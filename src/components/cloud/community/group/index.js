import React, { Fragment } from "react";
import { Small } from "./styled";
import { withRouter } from "react-router-dom"
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "./mapStore";
@connect(mapStateToProps, mapDispatchToProps)
@withRouter

class Group extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            eqid: "1696",
            activeIndex: -1
        }
    }

    render() {
        let { activeIndex } = this.state;
        let { left_tags, right_tags } = this.props;
        return (
            <Fragment>
                <Small>
                    <ul>
                        <li id="1694" onClick={this.handleLately.bind(this, 1694)} ref="lay" className="bgwhtie">最近访问</li>
                        <li id="1695" onClick={this.handleMinegroup.bind(this, 1695)} ref="mygroup">我的小组</li>
                        {
                            (left_tags ? left_tags : []).map((item) => (
                                <li key={item.id} id={item.id} onClick={this.handleChangeeqid.bind(this, item.id)} style={{ background: activeIndex == item.id ? "white" : "" }}//eslint-disable-line
                                >{item.name}</li>
                            ))
                        }
                        <li id="1702" onClick={this.handleMore.bind(this, 1702)} ref="more">更多</li>
                    </ul>
                    <ol>
                        {
                            (right_tags.groups ? right_tags.groups : []).map((xuanr) => (
                                <li key={xuanr.id} onClick={this.handleToGroups.bind(this, xuanr.id)}>
                                    <div className="group-list-img">
                                        <img src={xuanr.logo} alt="" />
                                    </div>
                                    <div className="group-list-content">
                                        <p className="group-list-title">{xuanr.name}</p>
                                        <p className="group-list-heat">
                                            <i className="iconfont fontcolor">{"\ue605"}</i>
                                            <span>{xuanr.member_count}</span>
                                            <i className="iconfont fontcolor">{"\ue68b"}</i>
                                            <span>{xuanr.subject_count}</span>
                                        </p>
                                    </div>
                                </li>
                            ))
                        }
                    </ol>
                </Small>
            </Fragment>
        )
    }
    componentDidMount() {
        this.props.handleLeftTagsAsync()
        this.props.handlerightTagsAcync(this.state.eqid)
        // this.forceUpdate()
    }
    handleToGroups(id) {
        this.props.history.push("/groups/fruitpaste?id=" + id)
    }
    handleChangeeqid(id) {
        this.setState({
            eqid: id,
            activeIndex: id
        }, () => (
            this.props.handlerightTagsAcync(this.state.eqid)
        ))

        this.refs.lay.style.background = "#f4f4f4"
        this.refs.mygroup.style.background = "#f4f4f4"
        this.refs.more.style.background = "#f4f4f4"
    }
    handleLately(eqid) {
        this.refs.lay.style.background = "white"
        this.refs.mygroup.style.background = "#f4f4f4"
        this.refs.more.style.background = "#f4f4f4"
        this.setState({
            eqid: eqid,
            activeIndex: -1
        }, () => (
            this.props.handlerightTagsAcync(this.state.eqid)
        ))
    }
    handleMinegroup(eqid) {
        this.refs.mygroup.style.background = "white"
        this.refs.lay.style.background = "#f4f4f4"
        this.refs.more.style.background = "#f4f4f4"
        this.setState({
            eqid: eqid,
            activeIndex: -1
        }, () => (
            this.props.handlerightTagsAcync(this.state.eqid)
        ))
    }
    handleMore(eqid) {
        this.refs.more.style.background = "white"
        this.refs.mygroup.style.background = "#f4f4f4"
        this.refs.lay.style.background = "#f4f4f4"
        this.setState({
            eqid: eqid,
            activeIndex: -1
        }, () => (
            this.props.handlerightTagsAcync(this.state.eqid)
        ))
    }
}

export default Group;