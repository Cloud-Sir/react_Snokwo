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
`