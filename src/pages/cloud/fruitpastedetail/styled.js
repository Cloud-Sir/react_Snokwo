import styled from "styled-components";

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

export const Detailinfo = styled.div`
    width:100%;
    height:4.936rem;
    margin-top:.352rem;
    box-sizing:border-box;
    padding:.12766rem .12766rem .17021rem;
    margin-bottom:.08511rem;
    h3{
        width:100%;
        height:.416rem;
        margin-bottom:.085rem;
        font-size:.16rem;
    }
    .subject-create{
        width:100%;
        height:.136rem;
        display:flex;
        justify-content:space-between;
        align-items:center;
        font-size:.1rem;
         color:#999;
        .subject-create-time{
            width:2.23rem;
            height:100%;
        }
    }
    .subject-author{
        width:100%;
        height:.42552rem;
        padding-top:.08511rem;
        font-size:.12rem;
        display:flex;
        align-items:center;
        justify-content:space-between;
        .account-img{
            img{
                width:.2553rem;
                height:.2553rem;
                border-radius:50%;
            }
        }
        .account-name{
            flex:1;
            height:.184rem;
            padding-left:.10894rem;
            color: #333;
        }
        .account-follow{
            color: #666;
            border: solid 1px #999;
        }
    }
    .subject-body{
        width:100%;
        height:100%;
    }

`