import styled from "styled-components";

export const Commont = styled.div`
    width:100%;
    height:100%;
    ol{
        width:100%;
        height:1.02125rem;
        margin-top:.04255rem;
        display:flex;
        .leftli{
            background:#fff;
        }
        li{
            width:1.6rem;
            height:1.0213rem;
            background:#f4f4f4;
        }
        .card-linner{
            width:100%;
            height:.085rem;
            background-color: #ff9800;
        }
        .card-linner-steam{
            width:100%;
            height:.085rem;
            background-color: #206C95;
        }
        .card-first{
            width:100%;
            height:.2665rem;
            box-sizing:border-box;
            padding-top:.0425532rem;
            color: #333;
            font-size: .1375rem;
            font-size: .2rem;
            text-align: center;
        }
        .card-first-right{
            width:100%;
            height:.29195rem;
            padding-top:.068rem;
            color: #206C95;
            font-size:.11rem;
            display:flex;
            justify-content:center;
            align-items:center;
            .steam-icon{
                width:.2213rem;
                height:.2213rem;
                margin-right:.05106rem;
                img{
                    width:100%;
                    border-radius:50%;
                }
            }
        }
        .card-second{
            width:100%;
            height:.1465rem;
            box-sizing:border-box;
            text-align: center;
            padding-top:.0425532rem;
            p{
                margin-top:-.04rem;
            }
            span{
                color: #ff9800;
            }
        }
        .card-third{
            width:100%;
            height:.15191rem;
            padding-top:.06809rem;
            text-align:center;
            color: #333;
            font-size: 0.1rem;
        }
        .card-third-right{
            width:100%;
            height:.15191rem;
            padding-top:.06809rem;
            font-size: 0.1rem;
            text-align:center;
        }
        .card-fourth{
            width:100%;
            height:.11195rem;
            padding-top:.0425532rem;
            text-align:center;
            color: #999;
            font-size:.1rem;
        }
    }
    .posts-order-container{
        width:100%;
        height:.31488rem;
        box-sizing:border-box;
        padding:0 .12766rem;
        display:flex;
        justify-content:space-between;
        align-items:center;
        color:#999;
        p{
            display:flex;
            align-items:center;
        }
        span{
            font-size:.1rem;
        }
        i{
            font-size:.2rem;
            line-height:.2rem;
        }
    }
    .group-topic-container{
        width:2.94468rem;
        height:.81206rem;
        padding:.12766rem;
        border-bottom: 1px solid #f4f4f4;
        .group-topic-user-info{
            width:2.94475rem;
            height:.256rem;
            display:flex;
            align-items:center;
            .group-topic-icon{
                width:.2553rem;
                height:.2553rem;
                img{
                    width:100%;
                    border-radius:50%;
                }
            }
            .group-topic-right{
                min-width:1.71114rem;
                height:.256rem;
                padding-left:.08511rem;
                .group-topic-name{
                    width:100%;
                    height:.144rem;
                    color: #333333;
                    font-size:.1rem;
                }
                .group-topic-time{
                    width:100%;
                    height:.112rem;
                    color: #999999;
                    font-size:.1rem;
                }
            }
            .group-top-topic{
                width:.25525rem;
                height:.15313rem;
                margin-right:.04255rem;
                color: white;
                background-color: #b4cae3;
                font-size: 0.05rem;
                text-align:center;
                line-height:.15313rem;
            }
        }
    }
    .group-topic-info{
        width:100%;
        height:.352rem;
        margin-top:.09362rem;
        font-size: 0.124rem;
        color: #333333;
    }
    .topic-images-container{
        width:100%;
        height:.95rem;
        margin-top:.08511rem;
        img{
            width:.95rem;
            margin-right: .031rem;
        }
    }
    .group-topic-bottom{
        width:100%;
        height:.16rem;
        margin-top:.11064rem;
        display:flex;
        align-items:center;
        color: #999999;
        font-size:.1rem;
        .group-topic-from{
            width:2.37363rem;
            height:.16rem;
            span{
                color: #0288d1;
            }
            i{
                font-style:normal;
                margin-left:.06rem;
                color:#ff9800;
            }
        }
        .group-topic-handle{
            width:.571rem;
            height:.16rem;
            display:flex;
            .group-topic-message{
                width:.25591rem;
                height:.104rem;
                padding-right:.06809rem;
                font-size:.1rem;
                i{
                    font-size:.1rem;
                    padding-right: .02rem;
                }
            }
            .group-topic-like{
                width:.19606rem;
                height:.104rem;
                font-size:.1rem;
                padding-right:.05106rem;
                color: #999999;
                i{
                    font-size:.1rem;
                    padding-right: .02rem;
                }
            }
        }
    }
    /* 右边Li */
    .comment-reply-empty{
        width:100%;
        height:2.03136rem;
        padding:.255319rem 0;
        display:flex;
        flex-direction:column;
        align-items:center;
        .empty-image{
            width:1.1064rem;
            height:1.1064rem;
            img{
                width:100%;
            } 
        }
        .empty-word{
            width:100%;
            height:.152rem;
            margin-top:.12766rem;
            color:#666;
            font-size:.1rem;
            text-align:center;
        }
        .empty-word-title{
            width:100%;
            height:.152rem;
            margin:.12766rem 0 .11064rem 0;
            font-size:.1rem;
            color:#666;
            text-align:center;
        }
        button{
            width:.8415rem;
            height:.25525rem;
            background-color: #2c71be;
            color: #fff;
            border-radius:.02rem;
            border:none;
            font-size:.12rem;
        }
    }
`