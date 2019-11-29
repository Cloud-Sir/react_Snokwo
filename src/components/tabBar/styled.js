import styled from "styled-components";

export const TabBarContainer = styled.div`
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
        .active{
            color: #ff5722;
        }
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