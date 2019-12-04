import React from "react"
import { Headers } from "./styled"
import { connect } from "react-redux"
import { mapStateToProps, mapDispatchToProps } from "./mapState"
@connect(mapStateToProps, mapDispatchToProps)
class Header extends React.Component {
    render() {
        // console.log(this.props, 2222)

        let { lefticon, title, righticon, has, searchval } = this.props
        return (

            <Headers>
                <i className="iconfont left" onClick={this.handleBack.bind(this)}>{lefticon}</i>
                <div className="headerTitle" style={{ display: title && !has ? "block" : "none" }} >{title}</div>
                <div className="headerTitle headerinput" style={{ display: has ? "block" : "none" }}>
                    <div>
                        <div>
                            <span className="iconfont search_icon">{"\ue609"}</span>
                            <input type="search" className="searchinput" onKeyDown={this.handleEnterKey.bind(this)} placeholder="搜云飞" value={searchval} onChange={this.handleChangeVal.bind(this)} />
                        </div>
                    </div>
                </div>
                <i className="iconfont right" style={{ display: title && !has ? "block" : "none" }}>{righticon}</i>
                <i className="right searchright" onClick={this.handleSubmit.bind(this)} style={{ display: has ? "block" : "none" }}>搜索</i>
            </Headers>
        )
    }
    handleBack() {//返回键
        this.props.path.history.goBack()
        this.props.handleSearchRemove()
    }
    handleChangeVal(e) {
        // console.log(e.target.value)
        let val = e.target.value
        this.props.handleInputChange(val)
    }
    handleEnterKey(e) {
        this.handleChangeVal(e)
        console.log(e.keyCode, 123)
        if (e.keyCode === 13) {
            this.handleSubmit(e, this.props.searchval)
        } else {
            return false
        }
    }
    handleSubmit(e, val) {
        e.preventDefault()
        this.props.handleSearchChange(val ? val : this.props.searchval)
    }

}

export default Header;