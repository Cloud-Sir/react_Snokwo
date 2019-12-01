import React, { Fragment } from "react"
import Header from "components/grace/headers"
import { Section } from "./styled"
import { connect } from "react-redux"
import { mapStateToProps, mapDispatchToProps } from "./mapStore"
import { withRouter } from "react-router-dom"

@connect(mapStateToProps, mapDispatchToProps)
@withRouter
class Directory extends React.Component {
    render() {
        return (
            <Fragment>
                <Header title={"厂商目录"} lefticon={"\ue645"} path={this.props} />
                <Section>
                    <div className="container-header-space"></div>
                    <div>
                        <div className="publishers-container grid-mui">
                            {/* 循环按钮 */}
                            <div className="grid-col">
                                <div>
                                    <button>
                                        <img alt="" src="https://s3.sonkwo.com/FlrElyYdVDDOtRk5sN5ms8LmQ8s3" />
                                    </button>
                                </div>
                            </div>
                            <div className="grid-col">
                                <div>
                                    <button>
                                        <img alt="" src="https://s3.sonkwo.com/FlrElyYdVDDOtRk5sN5ms8LmQ8s3" />
                                    </button>
                                </div>
                            </div>
                            <div className="grid-col">
                                <div>
                                    <button>
                                        <img alt="" src="https://s3.sonkwo.com/FlrElyYdVDDOtRk5sN5ms8LmQ8s3" />
                                    </button>
                                </div>
                            </div>
                            <div className="grid-col">
                                <div>
                                    <button>
                                        <img alt="" src="https://s3.sonkwo.com/FlrElyYdVDDOtRk5sN5ms8LmQ8s3" />
                                    </button>
                                </div>
                            </div>
                            <div className="grid-col">
                                <div>
                                    <button>
                                        <img alt="" src="https://s3.sonkwo.com/FlrElyYdVDDOtRk5sN5ms8LmQ8s3" />
                                    </button>
                                </div>
                            </div>
                            <div className="grid-col">
                                <div>
                                    <button>
                                        <img alt="" src="https://s3.sonkwo.com/FlrElyYdVDDOtRk5sN5ms8LmQ8s3" />
                                    </button>
                                </div>
                            </div>
                            <div className="grid-col">
                                <div>
                                    <button>
                                        <img alt="" src="https://s3.sonkwo.com/FlrElyYdVDDOtRk5sN5ms8LmQ8s3" />
                                    </button>
                                </div>
                            </div>
                            <div className="grid-col">
                                <div>
                                    <button>
                                        <img alt="" src="https://s3.sonkwo.com/Ft_8ztIi6EBaVv8MQHgtUxgpqVi7" />
                                    </button>
                                </div>
                            </div>
                            <div className="grid-col">
                                <div>
                                    <button>
                                        <img alt="" src="https://s3.sonkwo.com/Ft_8ztIi6EBaVv8MQHgtUxgpqVi7" />
                                    </button>
                                </div>
                            </div>
                            <div className="grid-col">
                                <div>
                                    <button>
                                        <img alt="" src="https://s3.sonkwo.com/FlrElyYdVDDOtRk5sN5ms8LmQ8s3" />
                                    </button>
                                </div>
                            </div>
                            <div className="grid-col">
                                <div>
                                    <button>
                                        <img alt="" src="https://s3.sonkwo.com/FlrElyYdVDDOtRk5sN5ms8LmQ8s3" />
                                    </button>
                                </div>
                            </div>
                            <div className="grid-col">
                                <div>
                                    <button>
                                        <img alt="" src="https://s3.sonkwo.com/Ft_8ztIi6EBaVv8MQHgtUxgpqVi7" />
                                    </button>
                                </div>
                            </div>
                            <div className="grid-col">
                                <div>
                                    <button>
                                        <img alt="" src="https://s3.sonkwo.com/FlrElyYdVDDOtRk5sN5ms8LmQ8s3" />
                                    </button>
                                </div>
                            </div>
                            <div className="grid-col">
                                <div>
                                    <button>
                                        <img alt="" src="https://s3.sonkwo.com/FlrElyYdVDDOtRk5sN5ms8LmQ8s3" />
                                    </button>
                                </div>
                            </div>
                            <div className="grid-col">
                                <div>
                                    <button>
                                        <img alt="" src="https://s3.sonkwo.com/Ft_8ztIi6EBaVv8MQHgtUxgpqVi7" />
                                    </button>
                                </div>
                            </div>
                            <div className="grid-col">
                                <div>
                                    <button>
                                        <img alt="" src="https://s3.sonkwo.com/Ft_8ztIi6EBaVv8MQHgtUxgpqVi7" />
                                    </button>
                                </div>
                            </div>
                            <div className="grid-col">
                                <div>
                                    <button>
                                        <img alt="" src="https://s3.sonkwo.com/Ft_8ztIi6EBaVv8MQHgtUxgpqVi7" />
                                    </button>
                                </div>
                            </div>
                            <div className="grid-col">
                                <div>
                                    <button>
                                        <img alt="" src="https://s3.sonkwo.com/Ft_8ztIi6EBaVv8MQHgtUxgpqVi7" />
                                    </button>
                                </div>
                            </div>
                            <div className="grid-col">
                                <div>
                                    <button>
                                        <img alt="" src="https://s3.sonkwo.com/Ft_8ztIi6EBaVv8MQHgtUxgpqVi7" />
                                    </button>
                                </div>
                            </div>
                            <div className="grid-col">
                                <div>
                                    <button>
                                        <img alt="" src="https://s3.sonkwo.com/Ft_8ztIi6EBaVv8MQHgtUxgpqVi7" />
                                    </button>
                                </div>
                            </div>
                            <div className="grid-col">
                                <div>
                                    <button>
                                        <img alt="" src="https://s3.sonkwo.com/Ft_8ztIi6EBaVv8MQHgtUxgpqVi7" />
                                    </button>
                                </div>
                            </div>
                            <div className="grid-col">
                                <div>
                                    <button>
                                        <img alt="" src="https://s3.sonkwo.com/Ft_8ztIi6EBaVv8MQHgtUxgpqVi7" />
                                    </button>
                                </div>
                            </div>
                            <div className="grid-col">
                                <div>
                                    <button>
                                        <img alt="" src="https://s3.sonkwo.com/Ft_8ztIi6EBaVv8MQHgtUxgpqVi7" />
                                    </button>
                                </div>
                            </div>
                            <div className="grid-col">
                                <div>
                                    <button>
                                        <img alt="" src="https://s3.sonkwo.com/Ft_8ztIi6EBaVv8MQHgtUxgpqVi7" />
                                    </button>
                                </div>
                            </div>
                            <div className="grid-col">
                                <div>
                                    <button>
                                        <img alt="" src="https://s3.sonkwo.com/Ft_8ztIi6EBaVv8MQHgtUxgpqVi7" />
                                    </button>
                                </div>
                            </div>
                            <div className="grid-col">
                                <div>
                                    <button>
                                        <img alt="" src="https://s3.sonkwo.com/Ft_8ztIi6EBaVv8MQHgtUxgpqVi7" />
                                    </button>
                                </div>
                            </div>
                            <div className="grid-col">
                                <div>
                                    <button>
                                        <img alt="" src="https://s3.sonkwo.com/Ft_8ztIi6EBaVv8MQHgtUxgpqVi7" />
                                    </button>
                                </div>
                            </div>
                            <div className="grid-col">
                                <div>
                                    <button>
                                        <img alt="" src="https://s3.sonkwo.com/Ft_8ztIi6EBaVv8MQHgtUxgpqVi7" />
                                    </button>
                                </div>
                            </div>
                            <div className="grid-col">
                                <div>
                                    <button>
                                        <img alt="" src="https://s3.sonkwo.com/Ft_8ztIi6EBaVv8MQHgtUxgpqVi7" />
                                    </button>
                                </div>
                            </div>
                            <div className="grid-col">
                                <div>
                                    <button>
                                        <img alt="" src="https://s3.sonkwo.com/Ft_8ztIi6EBaVv8MQHgtUxgpqVi7" />
                                    </button>
                                </div>
                            </div>
                            <div className="grid-col">
                                <div>
                                    <button>
                                        <img alt="" src="https://s3.sonkwo.com/Ft_8ztIi6EBaVv8MQHgtUxgpqVi7" />
                                    </button>
                                </div>
                            </div>
                            <div className="grid-col">
                                <div>
                                    <button>
                                        <img alt="" src="https://s3.sonkwo.com/Ft_8ztIi6EBaVv8MQHgtUxgpqVi7" />
                                    </button>
                                </div>
                            </div>
                            <div className="grid-col">
                                <div>
                                    <button>
                                        <img alt="" src="https://s3.sonkwo.com/Ft_8ztIi6EBaVv8MQHgtUxgpqVi7" />
                                    </button>
                                </div>
                            </div>
                            <div className="grid-col">
                                <div>
                                    <button>
                                        <img alt="" src="https://s3.sonkwo.com/Ft_8ztIi6EBaVv8MQHgtUxgpqVi7" />
                                    </button>
                                </div>
                            </div>
                            <div className="grid-col">
                                <div>
                                    <button>
                                        <img alt="" src="https://s3.sonkwo.com/Ft_8ztIi6EBaVv8MQHgtUxgpqVi7" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Section>
            </Fragment>
        )
    }
    componentDidMount() {//数据请求 在dispatch中
        this.props.handleAsyncDirectory()
    }

}

export default Directory;