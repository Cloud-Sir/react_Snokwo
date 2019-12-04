import styled from "styled-components";

export const Fruitcontainer = styled.div`
    width:100%;
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
`