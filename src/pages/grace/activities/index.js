import React, { Fragment } from "react"
import { Section } from "./styled"
import Header from "components/grace/headers"
import {withRouter} from "react-router-dom"
@withRouter
class Activities extends React.Component {
    render() {
        return (
            <Fragment>
                <Header title={"精彩活动"} lefticon={"\ue645"}  path={this.props}/>
                <Section>
                    <div className="container-header-space" style={{ "minHeight": "41px" }}></div>
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
                </Section>
            </Fragment>

        )
    }
}


export default Activities;


