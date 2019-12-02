import styled from "styled-components"

export const Head=styled.div`
    position:fixed;
    height:.4rem;
    width:100%;
    left:0;
    top:0;
    background:#333;
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding: 0.05rem .1rem 0.05rem .1rem;
    color:#ccc;
    box-sizing:border-box;
    z-index:100;
    p{font-size:.15rem;margin-bottom:0;}
    span{
        width: .3rem;
        font-size:.12rem;
        color:#999;
    }
`