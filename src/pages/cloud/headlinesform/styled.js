import styled from "styled-components"

export const Header = styled.div`
    width:100%;
    height:.216rem;
    background:red;
    padding:.068rem 0;
    margin-bottom:.058rem;
    position:fixed;
    z-index:1;
    left:0;
    top:0;
    background-color: #333;
    color: #ccc;
    display:flex;
    align-items:center;
    i{
        position: absolute;
        margin-left:.128rem;
    }
    &>.left{
        font-size:.12rem;
    }
    &>.right{
        position: absolute;
        right:.128rem;
    }
    div{
        width:100%;
        text-align:center;
        font-size:.13rem;
    }
`

export const Article=styled.div`
    width:100%;
    min-height:3rem;
    box-sizing:border-box;
    padding:.12766rem;
    margin-top:.41rem;
    .headline-news-container{
        width:100%;
        height:2.696rem;
        margin-bottom:.34rem;
    }
    .headline-news-container-img{
        width:100%;
        height:1.94rem;
        img{
            width:100%;
            height:100%;
            border-radius:.1rem;
        }
    }
    .headline-news-container-content{
        width:100%;
        height:.75612rem;
        .headline-news-title{
            width:100%;
            height:.416rem;
            margin:.08511rem 0;
            font-weight:bold;
            font-size: .15rem;
        }
        .headline-news-bottom{
            width:100%;
            height:.1701rem;
            display:flex;
            align-items:center;
            font-size:.12rem;
        }
    }
    .headlines-news-avatar{
        img{
            width:.1701rem;
            height:.1701rem;
            border-radius:50%;
        }
    }
    .headlines-news-nickname{
        padding-left:.04255rem;
        color: #333;
    }
    .headline-news-bottom-time{
        padding-left:.08511rem;
        color: #999;
    }
`