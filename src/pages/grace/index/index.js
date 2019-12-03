import React from "react"
import { Header, Section } from "./styled"
import { Link, withRouter, NavLink, Switch, Redirect, Route } from "react-router-dom"
import { Carousel, WingBlank } from 'antd-mobile';
import { Newest, Promotion, AdvanceSale, WeekRanking, MonthRanking } from "components/grace/homeitem"
import { connect } from "react-redux"
import { mapStateToProps, mapDispatchToProps } from "./mapStore"
@withRouter
@connect(mapStateToProps, mapDispatchToProps)
class IndexHtml extends React.Component {
    constructor() {
        super();
        this.state = {
            imgHeight: "100 %",
        }
    }

    render() {
        // console.log(this.props)
        let {
            home_new_list, home_newprice_list,
            home_promotion_list, home_promotionprice_list,
            home_advanceSale_list, home_advanceSaleprice_list,
            home_week_list, home_weekprice_list,
            home_mouth_list, home_mouthprice_list
        } = this.props
        // console.log(this.props, 999)
        let { home_banners, home_groups, home_headlines } = this.props
        return (
            < div >
                <Header>
                    <div className="header-station">
                        <i className="iconfont alicon icon_map" >{"\ue602"}</i>
                        <span>大陆站</span>
                        <i className="iconfont alicon icon_down">{"\ue603"}</i>
                    </div>
                    <Link to="/searchgame" className="header-search-input" >
                        <i className="iconfont alicon icon_search">{"\ue609"}</i>
                        搜搜你想要的游戏
                    </Link>
                    <div className="header-message">
                        <i className="iconfont alicon icon_down">{"\ue610"}</i>
                    </div>
                </Header>
                <Section>
                    {/* 第一块 */}
                    <div className="banner">
                        <WingBlank>
                            <Carousel
                                autoplay
                                infinite
                                autoplayInterval={1300}
                            >
                                {/* beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                                afterChange={index => console.log('slide to', index)} */}
                                {
                                    home_banners.map((item, index) => (
                                        <a
                                            key={index}
                                            href="/"
                                            style={{ touchAction: 'none', display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                                        >
                                            <img
                                                src={item.cover}
                                                alt=""
                                                style={{ width: '100%', verticalAlign: 'top' }}
                                                onLoad={() => {
                                                    // fire window resize event to change height
                                                    window.dispatchEvent(new Event('resize'));
                                                    this.setState({ imgHeight: 'auto' });
                                                }}
                                            />
                                        </a>
                                    ))
                                }
                            </Carousel>
                        </WingBlank>
                    </div>
                    {/* 第二块 list*/}
                    <div className="list">
                        <div className="navigator-box-background">
                            <ul>
                                <li className="grid-col">
                                    <div className="navigator-action-button">
                                        <a href="#/activity">
                                            <div className="navigator-bg navigator-activity"></div>
                                            <div>活动</div>
                                        </a>
                                    </div>
                                </li>
                                <li className="grid-col">
                                    <div className="navigator-action-button">
                                        <a href="#/benefit">
                                            <div className="navigator-bg navigator-benefit"></div>
                                            <div>优惠</div>
                                        </a>
                                    </div>
                                </li> <li className="grid-col">
                                    <div className="navigator-action-button">
                                        <a href="#/peripheral">
                                            <div className="navigator-bg navigator-peripheral"></div>
                                            <div>周边</div>
                                        </a>
                                    </div>
                                </li>
                                <li className="grid-col">
                                    <div className="navigator-action-button">
                                        <a href="#/publisher">
                                            <div className="navigator-bg navigator-publisher"></div>
                                            <div>厂商目录</div>
                                        </a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="menu-headline-container">
                            <div className="headline-img"></div>


                            <div className="headline-slider">
                                <div className="up-slider-container">
                                    <ul className="up-slider-sliders">
                                        {/* <li className="slider-item">
                                            <div >《暗黑血统：创世纪》配置公布；《黑色未来88》获81%好评</div>
                                        </li> */}

                                        <WingBlank>
                                            <Carousel className="my-carousel slider-item"
                                                vertical
                                                dots={false}
                                                dragging={false}
                                                swiping={false}
                                                autoplay
                                                infinite
                                            >
                                                {
                                                    home_headlines.map((item) => (
                                                        <div key={item.id} className="v-item" >{item.title}</div>
                                                    ))
                                                }
                                            </Carousel>
                                        </WingBlank>

                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*  第三块 新游新价 */}

                    {/* <HomeModule data={home_boxes} /> */}


                    {/* 第四块 史低折扣 */}
                    {/* <HomeModule /> */}


                    {/* 第五块 半价起降 */}
                    <div className="store-sec-kill-container">
                        <div className="store-sec-kill-header">
                            <div className="header">【黑五】半价起降时代</div>
                        </div>
                        <div className="sk-touch-group " style={{ height: "1.38rem" }}>
                            <div className="sk-touch-block">
                                <div className="sk-touch-container">
                                    {/*  */}
                                    <div className="game">
                                        <div className="store-item-card-container change-sku">
                                            <div className="card-img">
                                                <img alt="" src="http://s1.sonkwo.hk/medium/910135728720663/file/34822/b89d7a9ab936a65fa1383e46a844463a?x-oss-process=image/resize,limit_0,m_fill,w_150,h_89" />
                                            </div>
                                            <div className="card-content">
                                                <div className="title">
                                                    <span className="sale-content inter">国际站</span>
                                                    方舟：生存进化 DLC季票
                                                        </div>
                                                <div className="price-content">
                                                    ￥61
                                                        <div className="discount">
                                                        -50%
                                                            </div>
                                                    <div className="list-price">
                                                        122
                                                                </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="game">
                                        <div className="store-item-card-container change-sku">
                                            <div className="card-img">
                                                <img alt="" src="http://s1.sonkwo.hk/medium/910135728720663/file/34822/b89d7a9ab936a65fa1383e46a844463a?x-oss-process=image/resize,limit_0,m_fill,w_150,h_89" />
                                            </div>
                                            <div className="card-content">
                                                <div className="title">
                                                    <span className="sale-content inter">国际站</span>
                                                    方舟：生存进化 DLC季票
                                                        </div>
                                                <div className="price-content">
                                                    ￥61
                                                        <div className="discount">
                                                        -50%
                                                            </div>
                                                    <div className="list-price">
                                                        122
                                                                </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="game">
                                        <div className="store-item-card-container change-sku">
                                            <div className="card-img">
                                                <img alt="" src="http://s1.sonkwo.hk/medium/910135728720663/file/34822/b89d7a9ab936a65fa1383e46a844463a?x-oss-process=image/resize,limit_0,m_fill,w_150,h_89" />
                                            </div>
                                            <div className="card-content">
                                                <div className="title">
                                                    <span className="sale-content inter">国际站</span>
                                                    方舟：生存进化 DLC季票
                                                        </div>
                                                <div className="price-content">
                                                    ￥61
                                                        <div className="discount">
                                                        -50%
                                                            </div>
                                                    <div className="list-price">
                                                        122
                                                                </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="game">
                                        <div className="store-item-card-container change-sku">
                                            <div className="card-img">
                                                <img alt="" src="http://s1.sonkwo.hk/medium/910135728720663/file/34822/b89d7a9ab936a65fa1383e46a844463a?x-oss-process=image/resize,limit_0,m_fill,w_150,h_89" />
                                            </div>
                                            <div className="card-content">
                                                <div className="title">
                                                    <span className="sale-content inter">国际站</span>
                                                    方舟：生存进化 DLC季票
                                                        </div>
                                                <div className="price-content">
                                                    ￥61
                                                        <div className="discount">
                                                        -50%
                                                            </div>
                                                    <div className="list-price">
                                                        122
                                                                </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="game">
                                        <div className="store-item-card-container change-sku">
                                            <div className="card-img">
                                                <img alt="" src="http://s1.sonkwo.hk/medium/910135728720663/file/34822/b89d7a9ab936a65fa1383e46a844463a?x-oss-process=image/resize,limit_0,m_fill,w_150,h_89" />
                                            </div>
                                            <div className="card-content">
                                                <div className="title">
                                                    <span className="sale-content inter">国际站</span>
                                                    方舟：生存进化 DLC季票
                                                        </div>
                                                <div className="price-content">
                                                    ￥61
                                                        <div className="discount">
                                                        -50%
                                                            </div>
                                                    <div className="list-price">
                                                        122
                                                                </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>




                                    {/*  */}
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* 第六块 人气明星 */}
                    <div className="store-sec-kill-container">
                        <div className="store-sec-kill-header">
                            <div className="header">【黑五】人气明星降时代</div>
                        </div>
                        <div className="sk-touch-group " style={{ height: "1.38rem" }}>
                            <div className="sk-touch-block">
                                <div className="sk-touch-container">
                                    {/*  */}
                                    <div className="game">
                                        <div className="store-item-card-container change-sku">
                                            <div className="card-img">
                                                <img alt="" src="http://s1.sonkwo.hk/medium/910135728720663/file/34822/b89d7a9ab936a65fa1383e46a844463a?x-oss-process=image/resize,limit_0,m_fill,w_150,h_89" />
                                            </div>
                                            <div className="card-content">
                                                <div className="title">
                                                    <span className="sale-content inter">国际站</span>
                                                    方舟：生存进化 DLC季票
                                                        </div>
                                                <div className="price-content">
                                                    ￥61
                                                        <div className="discount">
                                                        -50%
                                                            </div>
                                                    <div className="list-price">
                                                        122
                                                                </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="game">
                                        <div className="store-item-card-container change-sku">
                                            <div className="card-img">
                                                <img alt="" src="http://s1.sonkwo.hk/medium/910135728720663/file/34822/b89d7a9ab936a65fa1383e46a844463a?x-oss-process=image/resize,limit_0,m_fill,w_150,h_89" />
                                            </div>
                                            <div className="card-content">
                                                <div className="title">
                                                    <span className="sale-content inter">国际站</span>
                                                    方舟：生存进化 DLC季票
                                                        </div>
                                                <div className="price-content">
                                                    ￥61
                                                        <div className="discount">
                                                        -50%
                                                            </div>
                                                    <div className="list-price">
                                                        122
                                                                </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="game">
                                        <div className="store-item-card-container change-sku">
                                            <div className="card-img">
                                                <img alt="" src="http://s1.sonkwo.hk/medium/910135728720663/file/34822/b89d7a9ab936a65fa1383e46a844463a?x-oss-process=image/resize,limit_0,m_fill,w_150,h_89" />
                                            </div>
                                            <div className="card-content">
                                                <div className="title">
                                                    <span className="sale-content inter">国际站</span>
                                                    方舟：生存进化 DLC季票
                                                        </div>
                                                <div className="price-content">
                                                    ￥61
                                                        <div className="discount">
                                                        -50%
                                                            </div>
                                                    <div className="list-price">
                                                        122
                                                                </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="game">
                                        <div className="store-item-card-container change-sku">
                                            <div className="card-img">
                                                <img alt="" src="http://s1.sonkwo.hk/medium/910135728720663/file/34822/b89d7a9ab936a65fa1383e46a844463a?x-oss-process=image/resize,limit_0,m_fill,w_150,h_89" />
                                            </div>
                                            <div className="card-content">
                                                <div className="title">
                                                    <span className="sale-content inter">国际站</span>
                                                    方舟：生存进化 DLC季票
                                                        </div>
                                                <div className="price-content">
                                                    ￥61
                                                        <div className="discount">
                                                        -50%
                                                            </div>
                                                    <div className="list-price">
                                                        122
                                                                </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="game">
                                        <div className="store-item-card-container change-sku">
                                            <div className="card-img">
                                                <img alt="" src="http://s1.sonkwo.hk/medium/910135728720663/file/34822/b89d7a9ab936a65fa1383e46a844463a?x-oss-process=image/resize,limit_0,m_fill,w_150,h_89" />
                                            </div>
                                            <div className="card-content">
                                                <div className="title">
                                                    <span className="sale-content inter">国际站</span>
                                                    方舟：生存进化 DLC季票
                                                        </div>
                                                <div className="price-content">
                                                    ￥61
                                                        <div className="discount">
                                                        -50%
                                                            </div>
                                                    <div className="list-price">
                                                        122
                                                                </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>




                                    {/*  */}
                                </div>
                            </div>
                        </div>
                    </div>


                    {/*----------   第七块 优品特辑    ------ */}

                    <div className="store-sec-kill-container">
                        <div className="store-sec-kill-header">
                            <div className="header">【黑五】人气明星降时代</div>
                        </div>
                        <div className="sk-touch-group " style={{ height: "1.15rem" }}>
                            <div className="sk-touch-block">
                                <div className="sk-touch-container">
                                    {/*  */}
                                    <div className="game">
                                        <div className="store-item-card-container change-sku">
                                            <div className="card-img">
                                                <img alt="" src="http://s1.sonkwo.hk/medium/910135728720663/file/34822/b89d7a9ab936a65fa1383e46a844463a?x-oss-process=image/resize,limit_0,m_fill,w_150,h_89" />
                                            </div>
                                            <div className="card-content">
                                                <div className="title">
                                                    黑五优品【新作佳选】
                                                        </div>

                                            </div>
                                        </div>
                                    </div>

                                    <div className="game">
                                        <div className="store-item-card-container change-sku">
                                            <div className="card-img">
                                                <img alt="" src="http://s1.sonkwo.hk/medium/910135728720663/file/34822/b89d7a9ab936a65fa1383e46a844463a?x-oss-process=image/resize,limit_0,m_fill,w_150,h_89" />
                                            </div>
                                            <div className="card-content">
                                                <div className="title">
                                                    黑五优品【新作佳选】
                                                        </div>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="game">
                                        <div className="store-item-card-container change-sku">
                                            <div className="card-img">
                                                <img alt="" src="http://s1.sonkwo.hk/medium/910135728720663/file/34822/b89d7a9ab936a65fa1383e46a844463a?x-oss-process=image/resize,limit_0,m_fill,w_150,h_89" />
                                            </div>
                                            <div className="card-content">
                                                <div className="title">
                                                    黑五优品【新作佳选】
                                                        </div>

                                            </div>
                                        </div>
                                    </div>




                                    {/*  */}
                                </div>
                            </div>
                        </div>
                    </div>



                    {/* ----------   第八块 热门小组   ------ */}
                    <div className="store-sec-kill-container">
                        <div className="store-sec-kill-header">
                            <div className="header"> &nbsp;热门小组</div>
                        </div>
                        <div className="sk-touch-group " style={{ height: "1.15rem" }}>
                            <div className="sk-touch-block">
                                <div className="sk-touch-container">
                                    {/*  */}
                                    {
                                        home_groups.map((item, index) => (
                                            <Link className="game" to={"/groups/" + item.id}>
                                                <div className="store-item-card-container change-sku">
                                                    <div className="card-img">
                                                        <img alt="" src={item.logo} />
                                                        <div className="group-info-container">
                                                            <div className="info">
                                                                <span className="iconfont  icon-xiaozurenshux">{"\ue605"}</span>
                                                                <span>{item.member_count}</span>
                                                                <span className="iconfont  icon-xiaozutiezishux">{"\ue68b"}</span>
                                                                <span>{item.posts_count}</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="card-content">
                                                        <div className="title">
                                                            {item.name}
                                                        </div>

                                                    </div>
                                                </div>
                                            </Link>
                                        ))
                                    }

                                </div>
                            </div>
                        </div>
                    </div>

                    {/*   ----------   第九块 选项卡   ------    */}

                    <div>
                        <div className="sk-touch-group" style={{ height: ".35rem" }}>
                            <div className="sk-touch-block" style={{ height: "100%" }}>
                                <div className="sk-touch-container" style={{ minWidth: "3.2rem", height: "100%" }} >
                                    <div className="sk-tabs-home">
                                        <div className=" sk-taps-background " style={{ height: "100%", boxSizing: "border-box" }}>
                                            {/* 五个按钮 */}
                                            <div className="tab-child" style={{ margin: "0rem 0.05rem" }}>
                                                <NavLink to="/index/newest" activeClassName="sk-taps-active" className="sk-taps-button">最新</NavLink>
                                            </div>
                                            <div className="tab-child" style={{ margin: "0rem 0.05rem" }}>
                                                <NavLink to="/index/promotion" activeClassName="sk-taps-active" className="sk-taps-button">促销</NavLink>
                                            </div>
                                            <div className="tab-child" style={{ margin: "0rem 0.05rem" }}>
                                                <NavLink to="/index/advanceSale" activeClassName="sk-taps-active" className="sk-taps-button">预售</NavLink>
                                            </div>
                                            <div className="tab-child" style={{ margin: "0rem 0.05rem" }}>
                                                <NavLink to="/index/weekRanking" activeClassName="sk-taps-active" className="sk-taps-button">周排行</NavLink>
                                            </div>
                                            <div className="tab-child" style={{ margin: "0rem 0.05rem" }}>
                                                <NavLink to="/index/monthRanking" activeClassName="sk-taps-active" className="sk-taps-button">月排行</NavLink>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* <Route path="/index" render={() => {
                            return (
                                <Fragment>

                                </Fragment>
                            )
                        }}>

                        </Route> */}

                        {/* 选项卡内容 */}
                        {/* <HomeUL></HomeUL> */}

                        <Switch>
                            <Route path="/index/newest" exact render={() => (
                                <Newest home_new_list={home_new_list ? home_new_list : []}
                                    home_newprice_list={home_newprice_list ? home_newprice_list : []}
                                />
                            )}
                            />
                            <Route path="/index/promotion" render={() => (
                                <Promotion home_promotion_list={home_promotion_list ? home_promotion_list : []}
                                    home_promotionprice_list={home_promotionprice_list ? home_promotionprice_list : []}
                                />
                            )} />
                            <Route path="/index/advanceSale"
                                render={() => (
                                    <AdvanceSale home_advanceSale_list={home_advanceSale_list ? home_advanceSale_list : []}
                                        home_advanceSaleprice_list={home_advanceSaleprice_list ? home_advanceSaleprice_list : []}
                                    />
                                )} />
                            <Route path="/index/weekRanking"
                                render={() => (
                                    <WeekRanking home_week_list={home_week_list ? home_week_list : []}
                                        home_weekprice_list={home_weekprice_list ? home_weekprice_list : []}
                                    />
                                )} />
                            <Route path="/index/monthRanking"
                                render={() => (
                                    <MonthRanking home_mouth_list={home_mouth_list ? home_mouth_list : []}
                                        home_mouthprice_list={home_mouthprice_list ? home_mouthprice_list : []}
                                    />
                                )} />
                        </Switch>
                        {/* */}
                        <Redirect from="/index" to="/index/newest" />
                    </div>
                    <div className="spaceClean"></div>
                </Section>
            </div >
        )
    }
    componentDidMount() {
        this.props.handleAsyncHomeGet()
        this.props.handleAsyncListGet()
    }


}

export default IndexHtml;
