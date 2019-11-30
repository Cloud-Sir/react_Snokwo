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
        &>.active{
            color:#ff5722;;
            border-bottom:.02rem solid  #ff5722;
        }
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




export const Footer=styled.div`
    width:100%;
    height:.471rem;
    position: fixed;
    width: 100%;
    bottom: 0;
    left: 0;
    z-index: 1;
    background-color: #333;
    ul{
        width:100%;
        height:100%;
        color: #ccc;
        display:flex;
        justify-content:space-around;
        align-items:center;
    }
    li{
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
        i{
            font-size:.18rem;
        }
        span{
            font-size:.12rem;
        }
    }
`