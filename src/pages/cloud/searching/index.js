import React from "react";
import {Bigbox,Header,Contentbox} from "./styled"
import { withRouter ,Link} from "react-router-dom"
import Searchgroup from "components/cloud/searching/searchgroup"
import Searchuser from "components/cloud/searching/searchuser"
import Searchfruit from "components/cloud/searching/searchfruit"
import Searchyelp from "components/cloud/searching/searchyelp"
// import { connect } from "react-redux"
// @connect(mapStateToProps)
@withRouter
class Searching extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            btns: ["小组", "用户", "果贴", "点评"],
            activeIndex: 0,
        }
        this.url = decodeURIComponent(window.location.href.split("=")[1])
    }
    render() {
        let { btns, activeIndex } = this.state;
        return(
            <Bigbox>
                <Header>
                    <div className="top-header">
                         <i className="iconfont" onClick={this.handleGoBack.bind(this)}>{"\ue645"}</i>
                         <div className="savekeyword">
                            <div className="searchres">
                                {this.url}<span><Link to="/allsearch">✖</Link></span>
                            </div>
                         </div>
                    </div>
                    <div className="bottom-header">
                        <ul>
                            {
                                btns.map((btn,index) => (
                                    <li key={index} onClick={this.handleLiStyle.bind(this, index)}
                                        style={{ color: activeIndex == index ? "#ff5722" : ""}}
                                        >{btn}
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </Header>
                <Contentbox>
                    <ul>
                        {
                            activeIndex === 0 ? <Searchgroup url={this.url}/>:""
                        }
                        {
                            activeIndex === 1 ? <Searchuser /> : ""
                        }
                        {
                            activeIndex === 2 ? <Searchfruit /> : ""
                        }
                        {
                            activeIndex === 3 ? <Searchyelp /> : ""
                        }
                    </ul>
                </Contentbox>
            </Bigbox>
        )
    }
    handleLiStyle(index) {
        this.setState({
            activeIndex:index
        })
    }
    handleGoBack() {
        this.props.history.goBack()
    }
}

// const mapStateToProps = (state) => ({
//     intotal:state.cloud.show_list
// })

export default Searching;