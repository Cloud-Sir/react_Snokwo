// import React, { Fragment } from "react"
import React from "react"
import { Header, Section } from "./styled"
import { Link, withRouter } from "react-router-dom"
import { Carousel, WingBlank } from 'antd-mobile';
import HomeUL from "components/grace/homelist"
import HomeModule from "components/grace/homemodule"

import home_banner from "static/grace/img/home_banner.png"
@withRouter
class IndexHtml extends React.Component {
    constructor() {
        super();
        this.state = {
            bannergrops: [home_banner, home_banner, home_banner, home_banner, home_banner, home_banner, home_banner, home_banner],
            imgHeight: "100 %",
        }
    }

    render() {
        let { bannergrops } = this.state
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
                                autoplay={false}
                                infinite
                                beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                                afterChange={index => console.log('slide to', index)}
                            >
                                {bannergrops.map(val => (
                                    <a
                                        key={val}
                                        href="http://www.alipay.com"
                                        style={{ touchAction: 'none', display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                                    >
                                        <img
                                            src={val}
                                            alt=""
                                            style={{ width: '100%', verticalAlign: 'top' }}
                                            onLoad={() => {
                                                // fire window resize event to change height
                                                window.dispatchEvent(new Event('resize'));
                                                this.setState({ imgHeight: 'auto' });
                                            }}
                                        />
                                    </a>
                                ))}
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
                                        <li className="slider-item">
                                            <div >《暗黑血统：创世纪》配置公布；《黑色未来88》获81%好评</div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*  第三块 新游新价 */}
                    <HomeModule />

                    {/* 第四块 史低折扣 */}
                    <HomeModule />


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
                                    <div className="game">
                                        <div className="store-item-card-container change-sku">
                                            <div className="card-img">
                                                <img alt="" src="http://s1.sonkwo.hk/medium/910135728720663/file/34822/b89d7a9ab936a65fa1383e46a844463a?x-oss-process=image/resize,limit_0,m_fill,w_150,h_89" />
                                                <div className="group-info-container">
                                                    <div className="info">
                                                        <span className="iconfont  icon-xiaozurenshux">{"\ue605"}</span>
                                                        <span>577603</span>
                                                        <span className="iconfont  icon-xiaozutiezishux">{"\ue68b"}</span>
                                                        <span>16137</span>
                                                    </div>
                                                </div>
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
                                                <div className="group-info-container">
                                                    <div className="info">
                                                        <span className="iconfont  icon-xiaozurenshux">{"\ue605"}</span>
                                                        <span>5776</span>
                                                        <span className="iconfont  icon-xiaozutiezishux">{"\ue68b"}</span>
                                                        <span>16</span>
                                                    </div>
                                                </div>
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
                                                <div className="group-info-container">
                                                    <div className="info">
                                                        <span className="iconfont  icon-xiaozurenshux">{"\ue605"}</span>
                                                        <span>7603</span>
                                                        <span className="iconfont  icon-xiaozutiezishux">{"\ue68b"}</span>
                                                        <span>37</span>
                                                    </div>
                                                </div>
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

                    {/*   ----------   第九块 选项卡   ------    */}

                    <div>
                        <div className="sk-touch-group" style={{ height: ".35rem" }}>
                            <div className="sk-touch-block" style={{ height: "100%" }}>
                                <div className="sk-touch-container" style={{ minWidth: "3.2rem", height: "100%" }} >
                                    <div className="sk-tabs-home">
                                        <div className=" sk-taps-background " style={{ height: "100%", boxSizing: "border-box" }}>
                                            {/* 五个按钮 */}
                                            <div className="tab-child" style={{ margin: "0rem 0.05rem" }}>
                                                <button className="sk-taps-button sk-taps-active">最新</button>
                                            </div>
                                            <div className="tab-child" style={{ margin: "0rem 0.05rem" }}>
                                                <button className="sk-taps-button">促销</button>
                                            </div>
                                            <div className="tab-child" style={{ margin: "0rem 0.05rem" }}>
                                                <button className="sk-taps-button">预售</button>
                                            </div>
                                            <div className="tab-child" style={{ margin: "0rem 0.05rem" }}>
                                                <button className="sk-taps-button">周排行</button>
                                            </div>
                                            <div className="tab-child" style={{ margin: "0rem 0.05rem" }}>
                                                <button className="sk-taps-button">月排行</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        {/* 选项卡内容 */}
                        <HomeUL></HomeUL>
                    </div>
                    <div className="spaceClean"></div>
                </Section>
            </div >
        )
    }

    
}

export default IndexHtml;
