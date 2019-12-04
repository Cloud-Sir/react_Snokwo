import styled from "styled-components";

export const Header = styled.div`
    width:100%;
    height:.41rem;
    box-sizing:border-box;
    padding:0 .2rem;
    background:#333;
    display:flex;
    align-items:center;
    z-index:5;
    display:flex;
    position: fixed;
    left:0;
    top:0;
    a{
        color:#999;
        font-size:.13rem;
    }
    a:nth-of-type(2){
        position:absolute;
        right:.2rem;
    }
    p{
        color:#ccc;
        font-size:.15rem;
        position:absolute;
        left:1.5rem;
    }
`

export const RegisterContainer = styled.div`
    position: absolute;
    left:0;
    top:0;
    right:0;
    bottom:0;
    padding:.41rem .27rem;
    .logo{
        width:100%;
        margin-top:.14rem;
        margin-bottom:.27rem;
        img{
            width:100%;
        }
    }
    input{
        outline:none;
        width:2.2rem;
        height:.3rem;
        margin-bottom:.3rem;
    }
    button{
        width:100%;
        height:.3rem;
        padding:.07rem 0;
        border:none;
        outline:none;
        margin:.14rem 0;
        background-color: #ff5722;
        color:#fff;
    }
    .agreement{
        width:100%;
        text-align:center;
        margin-top:.3rem;
        font-size:.1rem;
        color:#999;
        span{
            color:#ff5722;
        }
    }
`