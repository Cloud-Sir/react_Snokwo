import styled from "styled-components";

export const Header = styled.div`
    width:100%;
    height:.216rem;
    background:red;
    padding:.068rem 0;
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
    a{
        color:#ccc;
    }
    &>.left{
        font-size:.16rem;
    }
    &>.right{
        position: absolute;
        right:.128rem;
        font-size:.17rem;
    }
    div{
        width:100%;
        text-align:center;
        font-size:.13rem;
    }
`
export const Cut = styled.div`
    width:100%;
    height:.36587rem;
    box-sizing:border-box;
    padding: 0 .40851rem;
    background:#fff;
    position:fixed;
    z-index:1;
    left:0;
    top:.351rem;
    ul{
        width:100%;
        height:100%;
        display:flex;
        justify-content:space-around;
        align-items:center;
        font-size:.14rem;
    }
    .activefruit{
        color:#ff5722;;
        border-bottom:.02rem solid  #ff5722;
        height:100%;
        display:flex;
        align-items:center;
        box-sizing:border-box;
    }
    li{
        height:100%;
        display:flex;
        align-items:center;
        box-sizing:border-box;
    }
`

export const Section = styled.div`
    width:100%;
    height:100%;
    background:#f4f4f4;
    position:absolute;
    left:0;
    top:0;
    right:0;
    bottom:0;
    box-sizing:border-box;
    padding:.72rem 0 .471rem;
    overflow-y: scroll;
`