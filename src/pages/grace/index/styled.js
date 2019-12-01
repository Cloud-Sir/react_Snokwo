import styled from "styled-components";


import list_activity from "static/grace/img/active.png"
import list_benefit from "static/grace/img/navigator-benefit.png"
import list_peripheral from "static/grace/img/navigator-peripheral.png"
import list_publisher from "static/grace/img/navigator-publisher.png"
import headline_img from "static/grace/img/headline-img.png"

export const Header = styled.div`
    .alicon{
        display:inline-block;
    }
    width:100%;
    height:.438rem;
    padding: 0 .1rem 0 ;
    background-color: #333;
    box-sizing:border-box;
    display:flex;
    position:sticky;
    z-index:1;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    .header-station{
        display:flex;
        flex-direction:row;
        align-items:center;
        span{
            color:#ccc;
            font-size:.13rem;
        }
    }
    .icon_map{
        color: #ff5722;
        font-size: .179rem;
    }
    .icon_down{
        color: #999;
        font-size: .2rem;
    }
    .header-search-input{
        display:flex;
        flex:1;
        align-items:center;
        height:.299rem;
        background-color: rgba(102, 102, 102, 0.4);
        border-radius: .199rem;
        color: white;
        font-size: 0.12rem;
        padding-left: 0.0797rem;
        .icon_search{
            font-size: .22rem;
            padding-right: 0.04rem;
        }
    }
    .header-message{
        color: #cccccc;    
        padding: 0;    
        margin-left: 0.1rem;
    }
    

`
export const Section = styled.div`
        padding-top:.438rem;
        width: 100%;
        overflow-x: hidden;
        position:absolute;
        top:0;
        bottom:0;
        left:0;
        right:0;
        /* 第一块轮播图 */
        .banner{
            
            width:100%;
            position:relative;
            overflow: hidden;
            .am-wingblank.am-wingblank-lg {
                margin-left:0 !important;
                margin-right:0 !important;
            }
            .am-carousel-wrap{/*下边小点*/
            line-height: .01rem;
                .am-carousel-wrap-dot{
                    position:relative;
                    bottom:.1rem;
                    display: inline-block;
                    vertical-align: middle;
                    width: .05rem;
                    height: .05rem;
                    border-radius: 50%;
                    background: none;
                    border: solid 0.00625rem #fff;
                    box-sizing: border-box;
                    background-color: #ffffff;  
                    margin-right:.08rem; 
                    span{
                        background-color: transparent;  
                    }   
                }
                .am-carousel-wrap-dot-active{
                    background-color:#ff5722;
                }
            }
            img{
                width:100%;
                height:100%;
                display:block;
            }
        }
        /* 第二块  list */
        .list{
            margin-bottom:0.0997rem;
            .navigator-box-background{
                background-color:#fff;
                height: 0.8975rem;
                ul{
                    display:flex;
                    flex-direction: row;
                    align-items:center;
                    align-items:stretch;
                    text-align:left;
                    .grid-col{
                        width:25%;
                        >*{
                            padding:0;
                        }
                    }
                }
                .navigator-action-button{
                    display: flex;
                    justify-content: center;    
                    align-items: center;    
                    height: .8975rem;
                    a{
                        display: flex;    
                        flex-direction: column;    
                        justify-content: center;
                        align-items: center;
                    }
                    .navigator-bg{
                        width:.43875rem;
                        height:.43875rem;
                        
                    }
                    .navigator-activity{
                        background:url(${list_activity});
                        background-size: .43875rem;
                    }
                    .navigator-benefit{
                        background:url(${list_benefit});
                        background-size: .43875rem;
                    }
                    .navigator-peripheral{
                        background:url(${list_peripheral});
                        background-size: .43875rem;
                    }
                    .navigator-publisher{
                        background:url(${list_publisher});
                        background-size: .43875rem;
                    }
                    div{
                        font-size:.12rem;
                        color:#666;
                        margin-top:.07979rem;
                    }
                }
            }
            .menu-headline-container{
                width:100%;
                background-color:#fff;
                height:0.558rem;
                display: flex;
                flex-direction: row;
                align-items:center;
                padding: 0rem 0.1496rem;
                .headline-img{
                    width: .47rem;
                    height: .35891rem;
                    background:url(${headline_img});
                    background-size: .4787rem;
                    margin-right: 0.09973rem;
                }
                .headline-slider{
                    width:70%;
                    height: .35891rem;
                    display:flex;
                    align-items:center;
                }
                .up-slider-container{
                    width: 100%;
                    height: 100%;
                    background: white;
                    position: relative;
                    overflow: hidden;
                }
                .up-slider-sliders{
                    height:100%;
                    margin-top: 0;
                    white-space: nowrap;
                    width: 100%;
                    height: 100%;
                    margin-bottom: 0;
                    .slider-item{
                        width: 100%;
                        height: 100%;
                        overflow: hidden;
                        display: block;
                        >*{
                            width: 100%;
                            height: 100%;
                            display: block;
                            overflow: hidden;
                            text-overflow: ellipsis;
                            white-space: nowrap;
                            font-size: 0.13rem;
                            line-height: .359rem;
                            }
                        }
                
                }
            }
        }
        /* 第三块 */
        .store-sec-kill-container{
            background:#fff;
            margin:0 0 .0997rem 0;
            .store-sec-kill-header{
                display:flex;
                flex-direction:row;
                align-items:center;
                width:100%;
                  padding: .1rem;
                .header{
                    font-size: .1531rem;;
                    font-weight: bold;
                }
            }
            /* height: 149px; */
            
                
                        .store-item-card-container{
                            margin: 0rem 0rem 0.1496rem 0.1496rem;
                            width:1.4rem;
                            :first-child {
                                margin-left: 0.1496rem;
                            }
                            .card-img{
                                width:1.4rem;
                                height: .9rem;
                                position: relative;
                                img{
                                    width: 100%;
                                    height: 100%;
                                }
                            }
                            .card-content{
                                display: flex;
                                flex-direction: column;
                                .title{
                                    width: 100%;
                                    font-size: 0.12rem;
                                    line-height: .14rem;
                                    margin-top: 0.049867rem;
                                    overflow: hidden;
                                    text-overflow: ellipsis;
                                    white-space: nowrap;
                                    .sale-content{
                                        background-color: #ff5722;
                                        color: white;
                                        border-radius: 0.99734PX;
                                        font-size: 0.13rem;
                                        padding: 0rem 0.03rem;
                                        margin-right: 0.06rem;
                                    }
                                   .inter {
                                        background-color: #106dde;
                                    }
                                }
                                .price-content{
                                    width: 100%;
                                    height: .1793rem;
                                    display: flex;
                                    flex-direction: row;
                                    align-items: center;
                                    font-size: 0.13rem;
                                    color: #ff5722;
                                    font-weight: bold;
                                    margin-top: 0.04rem;
                                    .discount{
                                        border-radius: 0.008rem;
                                        height: .14rem;
                                        font-size: 0.125rem;
                                        padding: 0rem 0.02rem;
                                        font-weight: normal;
                                        line-height: .145rem;
                                        margin-left: 0.0598rem;
                                        color: #FFFFFF;
                                        background: #FF5722;
                                        margin-right: 0.1296rem;
                                    }
                                    .list-price{
                                        font-size: 0.13rem;
                                        font-weight: normal;
                                        color: #B8B8B8;
                                        text-decoration: line-through;
                                    }
                                }
                            }
                        }
                    
            
        }
        .sk-touch-group{
            max-width: 100%;
            overflow: hidden;
            position: relative;}
        .sk-touch-block{
            display: flex;
            flex-direction: row;
            width: 100%;
            overflow: auto ;
            position: absolute;
            top: 0;
            left: 0;
        }
        .sk-touch-container{
            width: auto;
            display: flex;
            flex-direction: row;
        }













            /* 热门小组 */
        .group-info-container{
            width: 100%;
            height: 1.875rem;
            position: absolute;
            bottom: 0;
            left: 0;
            background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8));
            display: flex;
            .info{
                display: flex;
                box-orient: horizontal;
                flex-direction: row;
                align-items: flex-end;
                color: white;
                font-size: 0.1rem;
                .iconfont{
                    font-size: 0.12rem;
                    opacity: 0.7;
                }
                span{
                    padding-left: 0.03125rem;
                    font-size: 0.1rem;
                }
            }
        }
        /* 选项卡头部 */
        .sk-tabs-home{
            width:100%;
            height:100%;
            .sk-taps-background{
                background-color: white;
                height: .4843rem;
                border-bottom: solid 1px #f5f5f5;
                /*  */
                padding-bottom:  0.1rem;
                display: flex;
                flex-direction: row;
                max-height: 100%;
                width: 100%;
                .tab-child{
                    display: flex;
                    flex: 1;
                    justify-content: center;
                    align-items: center;
                    .sk-taps-button{
                        color: #333333;
                        border-color: white;
                        border: 0;
                        margin: 0;
                        padding: 0.15rem 0.05rem;
                        text-align: center;
                        color: #d8d3d3;
                        padding-bottom:  0.05rem;
                        border-bottom: 0.03rem solid transparent;
                        position: relative;
                        white-space: nowrap;
                        background: linear-gradient(to bottom, transparent, transparent);
                        outline:none;
                    }
                    .sk-taps-active{
                    /* 点击后的效果 */
                        color: #ff5722;
                        border-color: #ff5722;
                    }
                }
            }
        }
        .spaceClean{
            height:11.571rem;
        }

`

