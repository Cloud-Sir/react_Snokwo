import React from "react";
import { Container } from "./styled";

class Searchyelp extends React.Component{
    render() {
        return (
            <Container>
                <div className="howmanydata">共找到了<span>277</span>个结果</div>
                <li>
                    <div className="tie-info">
                        <div className="tie-img">
                            <img src="https://s4.sonkwo.com/FlTC8aHrbxLWgaXHB4QhpVAM7gKt?imageView2/1/w/60/h/60" alt="" />
                        </div>
                        <div className="tie-info-box">
                            <p className="tie-info-name">放过我吧</p>
                            <p className="tie-info-time">2016-10-9</p>
                        </div>
                    </div>
                    <div className="tie-content">
                        just case 2 2 pics test
                            </div>
                    <div className="tie-bottom">
                        点评：<span>旁观者</span>
                        <i>★</i>
                        <i>★</i>
                        <i>★</i>
                        <i>★</i>
                        <i>★</i>
                    </div>
                </li>
            </Container>
        )
    }
}

export default Searchyelp;