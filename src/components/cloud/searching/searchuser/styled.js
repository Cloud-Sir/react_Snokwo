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
        }
`