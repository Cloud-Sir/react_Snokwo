import React, { Fragment } from "react"
import Header from "components/grace/headers"

import { Section,Footer } from "./styled"
import {withRouter} from "react-router-dom"
@withRouter
class GameDetail extends React.Component {
    constructor() {
        super()
        this.state = {}
    }
    render() {
        return (
            <Fragment>
                <Header title={"雨中冒险2"} lefticon={"\ue645"} righticon={"\ue6a7"} path={this.props}/>
                <Section>
                    <div className="container-header-space"></div>
                    <div className="container">
                        <div className="game-info-group">
                            <div className="game-info-image">
                                {/* slider-sliders */}
                                <img src="http://s1.sonkwo.hk/medium/910135728720663/file/42183/1.jpg" alt="" />
                            </div>
                            <div className="game-info-simple">
                                <div className="game-info-title">
                                    <span className="game-info-icon"></span>
                                    <p className="game-info-name">辐射 4</p>
                                    <p className="game-info-englishName">Fallout 4</p>
                                </div>
                                <div className="game-info-price">
                                    <span className="game-price-normal">￥29.0</span>
                                    <span className="game-price-reduction">-71%</span>
                                    <span className="game-price-original">￥99.0</span>
                                    <span className="game-info-activity">黑五来袭！超多史低瞩目！点击查看</span>
                                </div>
                            </div>
                        </div>

                        <div className="product-info-entrance">
                            <div className="entrance-title">激活方式</div>
                            <div className="entrance-content" style={{ "paddingLeft": " .17021rem" }} >
                                <a href="https://store.steampowered.com/about/">
                                    Steam平台
                            </a>
                                安装激活。
                            </div>
                        </div>

                        <div style={{ "marginBottom": "0.08511rem" }}>
                            <div className="product-info-entrance">
                                <div className="entrance-title">
                                    <span className="border">
                                        促销
                                    </span>
                                </div>
                                <div className="entrance-content">
                                    共有3张优惠券
                                </div>
                                <span className="iconfont  icon-jr">{"\ue604"}</span>
                            </div>
                        </div>

                        <div style={{ "marginBottom": "0.08511rem" }}>
                            <div className="product-info-entrance">
                                <div className="entrance-title">
                                        版本
                                </div>
                                <div className="entrance-content">
                                    此游戏有2个版本
                                </div>
                                <span className="iconfont  icon-jr">{"\ue604"}</span>
                            </div>
                        </div>

                        <div className="product-info-entrance">
                                <div className="entrance-title">
                                        发售详情
                                </div>
                                <span className="iconfont  icon-jr">{"\ue604"}</span>
                            </div>
                        
                        <div style={{ "marginBottom": "0.08511rem" }}>
                            <div className="product-info-entrance">
                                <div className="entrance-title">
                                配置详情
                                </div>
                                <span className="iconfont  icon-jr">{"\ue604"}</span>
                            </div>
                        </div>
                                            
                        <div className="developer-skus-container">
                            <div className="developer-skus-header">
                                <div className="title">
                                    同一开发商的其他作品
                                </div>
                                <div className="view-more">
                                    查看更多
                                </div>
                            </div>
                            <div className="sk-touch-group " style={{ "height": "1.27rem" }}>
                                <div className="sk-touch-block">
                                    <div className="sk-touch-container"  style={{ "minHeight": "1.33rem" }}> 
                                        {/*  */}
                                            <div className="store-item-card-container">
                                                <div className="card-img">
                                                    <img src="http://s1.sonkwo.hk/medium/910135728720663/file/34822/b89d7a9ab936a65fa1383e46a844463a?x-oss-process=image/resize,limit_0,m_fill,w_150,h_89" alt=""  />
                                                </div>
                                                <div className="card-content">
                                                    <div className="title">
                                                        黑五优品【新作佳选】
                                                            </div>

                                                </div>
                                                <div className="price-content">￥6.0</div>
                                            </div>

                                            <div className="store-item-card-container">
                                                <div className="card-img">
                                                    <img alt=""  src="http://s1.sonkwo.hk/medium/910135728720663/file/34822/b89d7a9ab936a65fa1383e46a844463a?x-oss-process=image/resize,limit_0,m_fill,w_150,h_89" />
                                                </div>
                                                <div className="card-content">
                                                    <div className="title">
                                                        黑五优品【新作佳选】
                                                            </div>

                                                </div><div className="price-content">￥6.0</div>
                                            </div>
                                            <div className="store-item-card-container">
                                                <div className="card-img">
                                                    <img alt=""  src="http://s1.sonkwo.hk/medium/910135728720663/file/34822/b89d7a9ab936a65fa1383e46a844463a?x-oss-process=image/resize,limit_0,m_fill,w_150,h_89" />
                                                </div>
                                                <div className="card-content">
                                                    <div className="title">
                                                        黑五优品【新作佳选】
                                                            </div>

                                                </div><div className="price-content">￥6.0</div>
                                            </div>




                                        {/*  */}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="game-introduce-contianer">
                            <div className="title">游戏介绍</div>
                            <div className="content">
                                <p>本合集包包含下列四款畅销中文游戏：</p>
                                <p>1.《影子战术：将军之刃》<br/>《影子战术：将军之刃》以江户时期的日本为背景，是一款硬核的策略性潜入类游戏。</p>
                                <p>2.《英灵之山》<br/>您用一生时间取悦您信奉的神。您将勇敢战斗并光荣牺牲。这一刻已经来临！可怜的海盗站在天堂大门前，等着进入瓦尔哈拉殿堂。但毫不领情的神未如他们所愿，当着他们的面关闭了大门。</p>
                                <p>3.《空山求生记》<br/>第三次世界大战是一场残酷的悲剧，至少对于其他人而言是如此。但您在这段时间似乎过得很不错，躲藏在Skyhill Hotel 酒店的高档屋顶上…直到遭受生化武器的影响，您的好日子才算到头。</p>
                                <p>4.《额滴土豆！我们上天了？！》<br/>《额滴土豆！我们上天了？！》是一款融合管理元素和回合制战斗的太空冒险游戏。管理你自己的飞船，探索按顺序生成的宇宙，并在宇宙里的几十个星球上开采资源，在星际空间战斗中迎战敌人。 邂逅各种太空种族，如宇宙胡萝卜、小丑西葫芦、讨厌的洋葱，甚至还有太空鲸鱼！参与史诗级头目战斗，拯救被邪恶联盟“月食”囚禁的祖父阿吉。</p>
                            </div>
                        </div>
                    </div>
                    <div className="container-footer-space" ></div>
                </Section>
                <Footer>
                    <div  className="container-footer-zone">
                        <div className="game-info-footer">
                            <div className="game-info-footer-icon">
                                <a href="/" className="view-cart-button" style={{"padding": ".03404rem" }}>
                                    <span className="iconfont  icon-buy_gouwuche">{"\ue639"}</span>
                                    <div>购物车</div>
                                </a>
                                <a href="/" className="view-wish-button" style={{"padding": "  0.0212rem" }}>
                                    <span className="icon-buy_collect">❤</span>
                                    <div>收藏</div>
                                </a>
                            </div>
                            <div className="game-footer-canby">
                                <a href="/" className="add-cart-button">加入购物车</a>
                                <a href="/" className="buy-button">立即购买</a>
                            </div>                        
                        </div>
                    </div>
                </Footer>
            </Fragment>
        )
    }
}

export default GameDetail