import styled from "styled-components";

export const Bigbox = styled.div`
    width:100%;
    height:100%;
`

export const Header = styled.div`
    width:100%;
    height:.7147rem;
    position:fixed;
    background:#333;
    left:0;top:0;
    z-index:1;
    .top-header{
        width:100%;
        height:.3744rem;
        i{
            font-size:.14rem;
            color:#ccc;
            position:absolute;
            left:.12rem;
            top:.1rem;
        }
    }
    .savekeyword{
        width:2.53629rem;
        height:.24675rem;
        background:#666;
        border-radius:.03rem;
        position:absolute;
        left:.36rem;
        top:.07rem;
        display:flex;
        align-items:center;
    }
    .searchres{
        min-width:.24358rem;
        height:.18712rem;
        padding:0 .06809rem;
        margin-left:.034rem;
        font-size:.12rem;
        color: white;
        background:#4a4a4a;
        display:flex;
        justify-content:space-between;
        align-items:center;
        border-radius:.03rem;
        span{
            color:#666;
        }
    }

    .bottom-header{
        width:100%;
        height:.3404rem;
        ul{
            width:100%;
            height:100%;
            display:flex;
            justify-content:space-around;
            align-items:center;             
            &>.changeactive{
                border-bottom: solid 2px #ff5722;
                color: #ff5722;
            }
        }
        li{
            height:100%;
            font-size:.12rem;
            box-sizing:border-box;
            display:flex;
            color:#f4f4f4;
            align-items:center;
        }
    }
`

export const Contentbox = styled.div`
    width:100%;
    min-height: 4.95rem;
    padding-top:.7146rem;
    background:#f4f4f4;
    .howmanydata{
        width:100%;
        height:.25525rem;
        box-sizing:border-box;
        margin-top:.08rem;
        padding:.08511rem .17014rem 0 .1277rem;
        font-size:.1rem;
        color:#666;
        background:#fff;
    }
    ul{
        width:100%;
        min-height:4.6rem;
        background:#fff;
    }
    /* 小组 */
    /* li{
        width:2.94468rem;
        height:.49356rem;
        padding:.12766rem;
        display:flex;
        border-bottom:1px solid #f4f4f4;
        .group-list-img{
            img{
                width:.851rem;
                height:.5106rem;
            }
        }
        .group-list-content{
            width:2rem;
            height:100%;
            padding-left:.12766rem;
            display:flex;
            flex-direction:column;
            justify-content:space-around;
        }
        .group-list-title{
            font-size:.13rem;
            color: #333333;
        }
        .group-list-heat{
            span{
                font-size:.12rem;
                padding-right:.0936rem;
            }
        }   
        .fontcolor{
            color:#ccc;
            font-size:.12rem;
            padding-right:.0517rem;
        } */



        /* 用户 */
        /* li{
            width:2.94468rem;
            height:.37593rem;
            padding:.12766rem;
            border-bottom: .0085rem solid #f4f4f4;
            display:flex;
            align-items:center;
            .user-img{
                img{
                    width:.3744rem;
                    height:.3744rem;
                    border-radius:50%;
                }
            }
            .user-information{
                flex:1;
                margin-left:.08511rem;
                .user-name{
                    font-size:.14rem;
                    color:#333333;
                }
                .user-brief{
                    font-size:.1rem;
                    color:#666;
                    span{
                        margin-right:.2rem;
                    }
                }
            }
            .user-click-like{
                width:.34rem;
                margin-left:.16rem;
                height:.376rem;
                p{
                    width:.32337rem;
                    height:.17rem;
                    border:.0085rem solid #999;
                    border-radius:.02rem;
                    font-size:.1rem;
                    text-align:center;
                    line-height:.17rem;
                    margin-top: .1rem;
                }
            } 
        }*/


        /* 果贴 */
        /* li{
            width:2.94468rem;
            height:.81206rem;
            padding:.12766rem;
            border-bottom:.0085rem solid #f4f4f4;

            .tie-info{
                width:100%;
                height:.256rem;
                display:flex;
                .tie-img{
                    margin-right:.08511rem;
                    img{
                        width:.2553rem;
                        height:.2553rem;
                        border-radius:50%;
                    }
                }
                .tie-info-box{
                    font-size:.1rem;
                    .tie-info-name{
                        color:#333;
                    }
                    .tie-info-time{
                        color:#999;
                    }
                }
            }
            .tie-content{
                width:100%;
                height:.176rem;
                margin-top:.09362rem;
                font-size:.12rem;
            }
            .tie-bottom{
                width:100%;
                height:.16rem;
                margin-top:.11rem;
                font-size:.1rem;
                color:#333;
                span{
                    color: #0288d1;
                }
            }
        } */



        li{
            width:2.94468rem;
            height:.81206rem;
            padding:.12766rem;
            border-bottom:.0085rem solid #f4f4f4;

            .tie-info{
                width:100%;
                height:.256rem;
                display:flex;
                .tie-img{
                    margin-right:.08511rem;
                    img{
                        width:.2553rem;
                        height:.2553rem;
                        border-radius:50%;
                    }
                }
                .tie-info-box{
                    font-size:.1rem;
                    .tie-info-name{
                        color:#333;
                    }
                    .tie-info-time{
                        color:#999;
                    }
                }
            }
            .tie-content{
                width:100%;
                height:.176rem;
                margin-top:.09362rem;
                font-size:.12rem;
            }
            .tie-bottom{
                width:100%;
                height:.16rem;
                margin-top:.11rem;
                font-size:.1rem;
                color:#333;
                span{
                    color: #0288d1;
                    margin-right:.085rem;
                }
                i{
                    font-size:.14rem;
                    font-style:normal;
                    margin-right:.03rem;
                    color:#999;
                }
            }
        }
    
`