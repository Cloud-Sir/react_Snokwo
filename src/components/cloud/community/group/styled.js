import styled from "styled-components"

export const Small = styled.div`
    width:100%;
    height:100%;
    background:#f4f4f4;
    display:flex;
    ul{
        width:.768rem;
        height:100%;
        margin-top:1px;
        overflow:hidden;
        .bgcolorwhtie{
            background:#fff;
        }
        li{
            width:100%;
            height:.4255rem;
            display:flex;
            justify-content:center;
            align-items:center;
            font-size:.12rem;
        }
    }
    ol{
        margin-top:.13rem;
        width:2.432rem;
        background:#fff;
        overflow:auto;
        li{
            width:100%;
            height:.57rem;
            box-sizing:border-box;
            padding:.085rem .128rem .085rem .17rem;
            display:flex;
            justify-content:space-between;
            :nth-of-type(1){
                margin-top:.085rem;
            }
        }
        .group-list-img{
            width:.681rem;
            height:100%;
            img{
                width:100%;
                height:100%;
            }
        }
        .group-list-content{
            width:1.37rem;
            height:100%;
        }
        .group-list-title{
            width:100%;
            height:.2128rem;
            font-size:.13rem;
            color: #333333;
        }
        .group-list-heat{
            width:100%;
            height:.184rem;
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
    }
`