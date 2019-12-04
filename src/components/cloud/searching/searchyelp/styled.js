import styled from "styled-components";

export const Container = styled.div`
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