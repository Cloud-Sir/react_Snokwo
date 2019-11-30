import React from "react"
import {Header} from "../styled/HeaderStyled"
import {Second,Footer} from "./styled"
class DetailGoods extends React.Component{
    render(){
        return(
            <div className="detailGoods">
                <Header>
                    <i className="iconfont">{'\ue645'}</i>
                    <p>商品详情</p>
                    <span></span>
                </Header>
                <Second>
                    <div className="image">
                        <img src="http://7fvkh9.com1.z0.glb.clouddn.com/Fq4lhdc4qT_lX9KemBHKl2GcWv1m?imageMogr2/thumbnail/512"/>
                    </div>
                    <div className="describe">
                        <h2>就Deki鞥我的看法</h2>
                        <p><i>126.0</i><del>149.0</del></p>
                        <span>叫我干嘛:<strong>进度款我的肌肤网络挂</strong></span>
                    </div>
                    <div className="size">
                        <div className="one">
                            <h3>颜色</h3>
                            <div className="color">
                                <span>红色</span><span>红色</span>
                                <span>红色</span>
                                <span>红色</span>
                            </div>   
                        </div>
                        <div className="two">
                            <h3>尺码</h3>
                            <span>红色</span><span>红色</span>
                        </div>
                        <div className="three">
                            <h3>购买数量</h3>
                            <div className="count">
                                <h4>-</h4>
                                <h5>1</h5>
                                <h4>+</h4>  
                            </div>
                        </div>
                    </div>
                    <div className="introduce">
                        <div className="nav">
                            <div className="child"><span>商品介绍</span></div>
                            <div className="child"><span>售后服务</span></div>
                        </div>
                        <div className="detail">
                            <img src="https://s1.sonkwo.com/FpYXzP0_0Fs2QebeegDAmCkQKRGt"/>
                        </div>
                    </div>
                </Second>
                <Footer>
                    <div className="cart">
                        <i className="iconfont">{'\ue639'}</i>
                        <span>购物车</span>
                    </div>
                    <div className="collect">
                        <i>❤</i>
                        <span>收藏</span>
                    </div>
                    <div className="add">
                        <p>加入购物车</p>
                    </div>
                    <div className="buy">
                        <p>立即购买</p>
                    </div>
                </Footer>
            </div>
        )
    }
}
export default DetailGoods;