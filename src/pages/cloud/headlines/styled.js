import styled from "styled-components";

export const Header=styled.div`
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
    div{
        width:100%;
        text-align:center;
        font-size:.13rem;
    }
`

export const Main=styled.div`
    width:100%;
    height:100%;
    position:absolute;
    left:0;
    top:0;
    right:0;
    bottom:0;
    box-sizing:border-box;
    padding-top:.41rem;
    padding-bottom:.471rem;
    .slider-decorator-0{
        bottom: .16rem !important;
        .am-carousel-wrap-dot > span {
            display: block;
            width: .05rem;
            height: .05rem;
            margin: 0 .02rem;
            border: .01rem;
            border-radius: 50%;
            background: #fff;
        }
    }
    .swiper{
        width:100%;
        box-sizing:border-box;
        padding:.128rem;
        p{
            border-radius:.07rem;
            overflow:hidden;
            img{
            width:100%;
            height:100%;
        }
        }
    }
`

export const Todo=styled.div`
    width:100%;
    height:.3829rem;
    border-bottom:1px solid #f5f5f5;
    ul{
        width:100%;
        height:.3829rem;
        display:flex;
        justify-content:space-around;
        align-items:center;
        &>.dynamic{
            line-height:.3829rem;
            font-weight:bold;
            border-bottom: solid 2px #F95D26;
        }
    }
`

export const Article=styled.div`
    width:100%;
    min-height:3rem;
    box-sizing:border-box;
    padding:.12766rem;
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
        flex:1;   
    }
    .headline-news-section{
        color: #0288D1;
    }
`