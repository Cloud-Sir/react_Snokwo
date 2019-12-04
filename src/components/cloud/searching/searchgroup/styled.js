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
            width:1.8rem;
            overflow:hidden;
            text-overflow:ellipsis;
            white-space:nowrap;
            font-size:.13rem;
            color: #333333;
             .c_ff6{
                color:#c33;
            }
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
        }
`