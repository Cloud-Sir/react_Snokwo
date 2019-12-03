import React, { Component } from 'react';
import { Achievement} from "./styled"
class Achievementp extends Component {
    render() {
        return (
            <Achievement>
                <div className="group-achievement-top">
                    <div className="achievements-process">成就完成率：0% 难度：炼狱</div>
                    <div className="order-type">完成度降序<i className="iconfont">{"\ue603"}</i></div>
                </div>
            </Achievement>
        );
    }
}

export default Achievementp;