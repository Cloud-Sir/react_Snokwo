import styled from "styled-components";

export const Fruitpastecontent = styled.div`
    background:#f4f4f4;
    width:100%;
`
export const Swipercontainer = styled.div`
    width:100%;
    height:1.73rem;
    background:#fff;
    margin-top:.1rem;
    .swiperfont{
        box-sizing:border-box;
        height:.37rem;
        line-height:.2rem;
        padding:.085rem .128rem;
        font-size: .127rem;
        color:#333;
    }
    .slider-decorator-0{
        bottom: .4rem !important;
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
   
` 

export const Todocontainer = styled.div`
    width:100%;
    height:100%;
    margin-top:.0851rem;
    ul{
        width:100%;
        height:.305rem;
        box-sizing:border-box;
        padding:0 .128rem;
        display:flex;
        align-items:center;
        font-size:.1rem;
        border-bottom: solid 1px whitesmoke;
        background:#fff;
        li{
            line-height:.28rem;
            margin-right:.2128rem;
        }
        .kind-active{
            border-bottom: solid 0.018rem #ff5722;
            color: #ff5722;
        }
    }
    .group-topic-container{
        width:100%;
        height:2.2554rem;
        box-sizing:border-box;
        padding:.1277rem;
        background:#fff;
        border-bottom: solid 1px whitesmoke;
    }
    .group-topic-user-info{
        width:100%;
        height:.256rem;
        display:flex;
        justify-content:space-between;
        align-items:center;
        img{
            width:.2553rem;
            height:.2553rem;
            border-radius:50%;
        }
    }
    .group-topic-right{
        width:2.6045rem;
        height:100%;
        font-size:.1rem;
        .group-topic-name{
            width:100%;
            height:.144rem;
            color: #333333;
        }
        .group-topic-time{
            width:100%;
            height:.112rem;
            color: #999999;
            
        }
    }
    .group-topic-info{
        width:100%;
        height:.352rem;
        margin-top:.09362rem;
        font-size:.13rem;
    }
    .topic-images-container{
        width:100%;
        height:.95rem;
        margin-top:.085rem;
        img{
            width:.95rem;
            margin-right: .031rem;
        }
    }
    .group-topic-bottom{
        width:100%;
        height:.16rem;
        line-height:.16rem;
        margin-top:.111rem;
        color: #999999;
        font-size:.1rem;
    }
    .group-topic-from-left{
        width:2.3138rem;
        height:100%;
        float:left;
        a{
            color: #0288d1;
        }
    }
    .group-topic-from-right{
        width:.631rem;
        height:100%;
        float:left;
        .iconfont{
            font-size:.1rem;
            padding-right:.02rem;
        }
        .space-right{
            padding-right:.1rem;
        }
    }
`