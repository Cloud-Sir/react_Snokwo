import React, { Fragment } from "react"
import Header from "components/grace/headers"

import { Section, Footer } from "./styled"
import { withRouter } from "react-router-dom"
import { connect } from "react-redux"
import { mapStateToProps, mapDispatchToProps } from "./mapStore"
import url from "url"
import { Drawer } from 'antd-mobile';
@withRouter
@connect(mapStateToProps, mapDispatchToProps)
class GameDetail extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            id: '',
            game_id: '',
            tishi_open: false,
            banben_open: false,
            fashou_open: false,
            peizhi_open: false,
            youhui_open: false,
            banben_list: []
        }
        let { id, game_id } = url.parse(this.props.location.search, true).query;
        this.state.id = id
        this.state.game_id = game_id

    }
    render() {
        // let { banben_list } = this.state
        let { game_list, gamedetail_list } = this.props
        let sku_detail = game_list.sku_detail ? game_list.sku_detail : ''//游戏详情
        let banben_list = gamedetail_list.skus ? gamedetail_list.skus : []//版本规则
        // let tishi_list = gamedetail_list.skus ? gamedetail_list.skus : []//版本规则
        // let fashou_list = gamedetail_list.skus ? gamedetail_list.skus : []//版本规则
        // let peizhi_list = gamedetail_list.skus ? gamedetail_list.skus : []//版本规则
        // let youhui_list = gamedetail_list.skus ? gamedetail_list.skus : []//版本规则
        const banben_sidebar = (
            <div ref="banben_sidebar">
                {/* <h1>此游戏的其他版本</h1> */}
                {
                    banben_list.map((item, index) => (
                        <div key={index} className="game-relation-container selected" style={{ padding: ".3rem", border: "1px solid #ccc", }} >
                            <div className="name">
                                {item.sku_name}
                            </div>
                            <div className="price">
                                ￥476.0
                        </div>
                        </div>
                    ))
                }
            </div>
        )

        // console.log(banben_list.length)
        return (
            <Fragment>
                <Header title={game_list.sku_name} lefticon={"\ue645"} righticon={"\ue6a7"} path={this.props} />
                <Section>
                    <div className="container-header-space"></div>
                    <div className="container">
                        <div className="game-info-group">
                            <div className="game-info-image">
                                {/* slider-sliders */}
                                <img src={game_list.background} alt="" />
                            </div>
                            <div className="game-info-simple">
                                <div className="game-info-title">
                                    <span className="game-info-icon"></span>
                                    <p className="game-info-name">{game_list.sku_name}</p>
                                    <p className="game-info-englishName">{game_list.sku_ename}</p>
                                </div>
                                <div className="game-info-price">
                                    <span className="game-price-normal">￥29.0</span>
                                    <span className="game-price-reduction">-71%</span>
                                    <span className="game-price-original">￥99.0</span>
                                    <span className="game-info-activity">黑五来袭！超多史低瞩目！点击查看</span>
                                </div>
                            </div>
                        </div>
                        {
                            game_list.activation ? <div className="product-info-entrance">
                                <div className="entrance-title">激活方式</div>
                                <div className="entrance-content" style={{ "paddingLeft": " .17021rem" }} dangerouslySetInnerHTML={{ __html: game_list.activation }} />
                            </div> : ''
                        }


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

                        <div style={{ "marginBottom": "0.08511rem", "display": (banben_list.length) > 1 ? 'block' : 'none' }}
                            onClick={this.onbanbenOpenChange.bind(this)}>
                            <div className="product-info-entrance">
                                <div className="entrance-title">
                                    版本
                                </div>
                                <div className="entrance-content">
                                    此游戏有{banben_list.length}个版本
                                </div>
                                <span className="iconfont  icon-jr">{"\ue604"}</span>
                            </div>
                        </div>

                        <Drawer
                            className="my-drawer"
                            style={{ height: this.state.banben_open ? this.refs.banben_sidebar.offsetHeight + 84 : 0 }}
                            enableDragHandle
                            position={"top"}
                            contentStyle={{
                                color: 'red', backgroundColor: "white", textAlign: 'center', padding: 42, opacity: 1,
                            }}
                            sidebar={""}
                            open={this.state.banben_open}
                            children={banben_sidebar}
                        >

                        </Drawer>

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
                                    <div className="sk-touch-container" style={{ "minHeight": "1.33rem" }}>
                                        {/*  */}
                                        <div className="store-item-card-container">
                                            <div className="card-img">
                                                <img src="http://s1.sonkwo.hk/medium/910135728720663/file/34822/b89d7a9ab936a65fa1383e46a844463a?x-oss-process=image/resize,limit_0,m_fill,w_150,h_89" alt="" />
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
                                                <img alt="" src="http://s1.sonkwo.hk/medium/910135728720663/file/34822/b89d7a9ab936a65fa1383e46a844463a?x-oss-process=image/resize,limit_0,m_fill,w_150,h_89" />
                                            </div>
                                            <div className="card-content">
                                                <div className="title">
                                                    黑五优品【新作佳选】
                                                            </div>

                                            </div><div className="price-content">￥6.0</div>
                                        </div>
                                        <div className="store-item-card-container">
                                            <div className="card-img">
                                                <img alt="" src="http://s1.sonkwo.hk/medium/910135728720663/file/34822/b89d7a9ab936a65fa1383e46a844463a?x-oss-process=image/resize,limit_0,m_fill,w_150,h_89" />
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
                            <div className="content" dangerouslySetInnerHTML={{ __html: sku_detail.description }} />

                        </div>
                    </div>
                    <div className="container-footer-space" ></div>
                </Section>
                <Footer>
                    <div className="container-footer-zone">
                        <div className="game-info-footer">
                            <div className="game-info-footer-icon">
                                <a href="/" className="view-cart-button" style={{ "padding": ".03404rem" }}>
                                    <span className="iconfont  icon-buy_gouwuche">{"\ue639"}</span>
                                    <div>购物车</div>
                                </a>
                                <a href="/" className="view-wish-button" style={{ "padding": "  0.0212rem" }}>
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
            </Fragment >
        )
    }
    componentDidMount() {
        let id = this.state.game_id
        this.props.handleGameDetail(id)
    }
    onbanbenOpenChange = (...args) => {
        // console.log(args);
        // console.log(123123);
        this.setState({ banben_open: !this.state.banben_open });
    }
}

export default GameDetail