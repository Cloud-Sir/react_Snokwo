import React from "react";
import { Container } from "./styled";

class Searchuser extends React.Component{
    render() {
        return (
            <Container>
                <div className="howmanydata">共找到了<span>277</span>个结果</div>
                <li>
                    <div className="user-img">
                        <img src="http://sonkwo-avatar.qiniudn.com/2ef96e0cf49744f7a3947c194741656d?imageView2/1/w/60/h/60" alt="" />
                    </div>
                    <div className="user-information">
                        <p className="user-name">唐2</p>
                        <p className="user-brief">
                            <span>动态：0</span>
                            <span>粉丝：0</span>
                        </p>
                    </div>
                    <div className="user-click-like">
                        <p>+关注</p>
                    </div>
                </li>
            </Container>
        )
    }
}

export default Searchuser;