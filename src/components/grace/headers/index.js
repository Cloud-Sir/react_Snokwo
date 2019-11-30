import React from "react"
import { Headers } from "./styled"

class Header extends React.Component {
    render() {
        let { lefticon, title, righticon, has } = this.props
        return (
            <Headers>
                <i className="iconfont left" onClick={this.handleBack.bind(this)}>{lefticon}</i>
                <div className="headerTitle" style={{ display: title && !has ? "block" : "none" }} >{title}</div>
                <div className="headerTitle headerinput" style={{ display:  has ? "block" : "none" }}>
                    <div>
                        <div>
                            <span className="iconfont search_icon">{"\ue609"}</span>
                            <input type="search" className="searchinput" placeholder="搜游戏" />
                        </div>
                    </div>
                </div>
                <i className="iconfont right" style={{ display: title && !has ? "block" : "none" }}>{righticon}</i>
                <i className="right searchright" style={{ display: has ? "block" : "none" }}>搜索</i>
            </Headers>
        )
    }
    handleBack(){//返回键
        this.props.path.history.goBack()
    }
    
}

export default Header;