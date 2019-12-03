import React,{Fragment} from "react";
import { Small } from "./styled";
import {withRouter} from "react-router-dom"
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "./mapStore";
@connect(mapStateToProps, mapDispatchToProps)
@withRouter

class Group extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            eqid: "1696",
        }
    }
    
    render() {
        let { left_tags, right_tags} = this.props;
        // console.log(right_tags,4567890)
        return(
            <Fragment>
                <Small>
                    <ul>
                        <li className="bgcolorwhtie" id="1694">最近访问</li>
                        <li id="1695">我的小组</li>
                        {
                            (left_tags ? left_tags : []).map((item) => (
                                <li key={item.id} id={item.id} onClick={this.handleChangeeqid.bind(this, item.id)}>{item.name}</li>
                            ))
                        }
                        <li id="1702">更多</li>
                    </ul>
                    <ol>
                        {
                            (right_tags.groups?right_tags.groups:[]).map((xuanr) => (
                                <li key={xuanr.id} onClick={this.handleToGroups.bind(this,xuanr.id)}>
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
    componentDidMount(){
        this.props.handleLeftTagsAsync()
        this.props.handlerightTagsAcync(this.state.eqid)
    }
    handleToGroups(id) {
        this.props.history.push("/groups/fruitpaste?id="+id)
    }
    handleChangeeqid(id) {
        this.setState({
            eqid: id
        })
        console.log(this.state.eqid)
    }
}

export default Group;