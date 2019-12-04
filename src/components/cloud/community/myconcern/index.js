import React from "react";

import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "./mapStore";
@connect(mapStateToProps, mapDispatchToProps)
@withRouter
class Hotpaste extends React.Component {
    render() {
        return (
            <div>
                没有权限
            </div>
        )
    }
    componentDidMount() {
        this.props.handleConcernAsync()
    }
}

export default Hotpaste;