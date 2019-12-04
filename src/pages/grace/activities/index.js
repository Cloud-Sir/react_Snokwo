import React, { Fragment } from "react"
import { Section } from "./styled"
import Header from "components/grace/headers"
import { withRouter, Link } from "react-router-dom"
import { connect } from "react-redux"
import { mapDispatchToProps, mapStateToProps } from "./mapState"
@withRouter
@connect(mapStateToProps, mapDispatchToProps)
class Activities extends React.Component {
    render() {
        let { activity_list } = this.props
        // console.log(activity_list, 111111111)

        return (
            <Fragment>
                <Header title={"精彩活动"} lefticon={"\ue645"} path={this.props} />
                <Section>
                    <div className="container-header-space" style={{ "minHeight": "41px" }}></div>
                    {
                        activity_list.map((item, index) => (
                            <div className="subject-view-container" key={index}>
                                <Link to={item.game_id ? ("/gamedetail?id=" + item.guotieurl + "&game_id=" + item.game_id) : ("/fruitpastedetail/" + item.guotieurl)}>
                                    {/* /gamedetail */}
                                    {/* "/gamedetail?id="+item.guotieurl+"&game_id="+item.game_id */}
                                    <div className="subject-view-title p-title">
                                        {item.title}
                                    </div>
                                    <div className="subject-view-image">
                                        <img alt="" src={item.cover} />
                                    </div>
                                </Link>
                            </div>
                        ))
                    }




                    {/* <div className="subject-view-container">
                        <a href="/">
                            <div className="subject-view-title p-title">
                                【感恩节】晒剁手病诊断报告，集赞赢免单机会
                                </div>
                            <div className="subject-view-image">
                                <img alt="" src="https://s3.sonkwo.com/FkzFkvKTjD-M9c1nZ-gg1rsDEa31" />
                            </div>
                        </a>
                    </div>
                    <div className="subject-view-container">
                        <a href="/">
                            <div className="subject-view-title p-title">
                                【感恩节】晒剁手病诊断报告，集赞赢免单机会
                                </div>
                            <div className="subject-view-image">
                                <img alt="" src="https://s3.sonkwo.com/FkzFkvKTjD-M9c1nZ-gg1rsDEa31" />
                            </div>
                        </a>
                    </div>
                    <div className="subject-view-container">
                        <a href="/">
                            <div className="subject-view-title p-title">
                                【感恩节】晒剁手病诊断报告，集赞赢免单机会
                                </div>
                            <div className="subject-view-image">
                                <img alt="" src="https://s3.sonkwo.com/FkzFkvKTjD-M9c1nZ-gg1rsDEa31" />
                            </div>
                        </a>
                    </div>
                    <div className="subject-view-container"> 
                        <a href="/">
                            <div className="subject-view-title p-title">
                                【感恩节】晒剁手病诊断报告，集赞赢免单机会
                                </div>
                            <div className="subject-view-image">
                                <img alt="" src="https://s3.sonkwo.com/FkzFkvKTjD-M9c1nZ-gg1rsDEa31" />
                            </div>
                        </a>
                    </div>*/}
                </Section>
            </Fragment >

        )
    }
    componentDidMount() {
        if (!sessionStorage.getItem('activity_list')) {
            this.props.handleActivites()
        }
    }
}


export default Activities;


