import React, { Fragment } from "react"
import Header from "components/grace/headers"
import { Section } from "./styled"
import { connect } from "react-redux"
import { mapStateToProps, mapDispatchToProps } from "./mapStore"
import { withRouter } from "react-router-dom"
@withRouter
@connect(mapStateToProps, mapDispatchToProps)


class Directory extends React.Component {
    render() {
        let { changshanglist } = this.props
        return (
            <Fragment>
                <Header title={"厂商目录"} lefticon={"\ue645"} path={this.props} />
                <Section>
                    <div className="container-header-space"></div>
                    <div>
                        <div className="publishers-container grid-mui">
                            {
                                changshanglist.map((item, index) => (
                                    <div className="grid-col" key={item.id}>
                                        <div>
                                            <button>
                                                <img alt="" src={item.publisher_detail.logo} />
                                            </button>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </Section>
            </Fragment>
        )
    }
    componentDidMount() {//数据请求 在dispatch中
        if (!sessionStorage.getItem('changshanglist')) this.props.handleAsyncDirectory()
    }

}

export default Directory;