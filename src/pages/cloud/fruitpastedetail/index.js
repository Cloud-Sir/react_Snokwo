import React from "react";
import { Header, Detailinfo } from "./styled"
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { mapStateToProps, mapDispatchToProps } from "./mapStore";
@connect(mapStateToProps,mapDispatchToProps)
@withRouter
class Fruitpastedetail extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            id: '',
        }
        let { id} = this.props.match.params;
        this.state.id = id;
    }
    render() {
        return (
            <div>
                <Header>
                    <i className="iconfont left" onClick={this.handleToBack.bind(this)}>{"\ue645"}</i>
                    <div>果贴详情</div>
                    <i className="iconfont right">{"\ue6a7"}</i>
                </Header>
                <Detailinfo>
                    <h3>【感恩节】感恩节促销保价政策 拒绝背刺！（附促销剧透）</h3>
                    <div className="subject-create">
                        <div className="subject-create-time">
                            2019-11-26
                        </div>
                        <div>
                            杉果综合讨论组
                        </div>
                    </div>
                    <div className="subject-author">
                        <div className="account-img">
                            <img src="https://s4.sonkwo.com/FubIpSNdDSHfjO89Kn4Nzt4DRy8J?imageView2/1/w/60/h/60" alt="" />
                        </div>
                        <div className="account-name">
                            杉果-破枪瘦马
                        </div>
                        <div className="account-follow">
                            +关注
                        </div>
                    </div>
                    <div className="subject-body">
                        {/* 渲染数据 */}
                    </div>
                </Detailinfo>
            </div>
        )
    }
    componentDidMount() {
        this.props.handlefruitpasteAsync(this.state.id)
    }
    handleToBack(){
        this.props.history.goBack()
    }
}

export default Fruitpastedetail;