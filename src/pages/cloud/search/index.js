import React from "react";
import {Searchcontainer,Header,Searchhistory} from "./styled";
import {withRouter} from "react-router-dom"

@withRouter
class Search extends React.Component{
    constructor() {
        super();
        this.state = {
            list: JSON.parse(localStorage.getItem("search")) || []
        }
    }
    
    render() {
        let { list } = this.state;
        
        return(
            <Searchcontainer>
                <Header>
                    <div className="searchkeyword">
                        <i className="iconfont">{"\ue609"}</i>
                        <input type="text" placeholder="请输入关键字" onKeyUp={this.handleToBeingSearch.bind(this)}/>
                    </div>
                    <div className="cancle" onClick={this.handleToBack.bind(this)}>取消</div>
                </Header>
                <Searchhistory>
                    <div className="history-record">搜索历史</div>
                    <ul>
                        {
                            (list?list:[]).map((item,index) => (
                                <li key={index} onClick={this.handleToBeing.bind(this,item)}>{item}
                                    <span onClick={this.handleListReduce.bind(this, index)}>✖</span>
                                </li>
                            ))
                        }
                    </ul>
                </Searchhistory>
            </Searchcontainer>
        )
    }
    handleToBeing(item) {
        this.props.history.push("/beingsearch?keyword=" + item)
    }
    handleToBeingSearch(e) {
        let val = e.target.value
        if (e.keyCode === 13) {
            let arr = this.state.list
            if (arr.includes(val)) {
                this.props.history.push("/beingsearch?keyword=" + val)
            } else {
                arr.push(val)
            }
            this.setState = ({
                list: arr
            })
            localStorage.setItem("search",JSON.stringify(this.state.list))
            this.props.history.push("/beingsearch?keyword="+val)
        }
    }
    handleListReduce(index, e) {
        e.stopPropagation();
        let arr = this.state.list
        arr.splice(index,1)
        this.setState = ({
            list: arr
        })
        localStorage.setItem("search", JSON.stringify(this.state.list))
        this.forceUpdate()
    }
    handleToBack(){
        this.props.history.push("/community/fruitpaste")
    }
}

export default Search;