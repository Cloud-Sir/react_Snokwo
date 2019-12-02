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

export const Container = styled.div`
    width:100%;
    height:100%;
    position: absolute;
    left:0;
    top:0;
    right:0;
    bottom:0;
    box-sizing:border-box;
    padding-top:.41rem;
    .headline-detail-banner{
        width:100%;
        height:1.06375rem;
        text-align:center;
        img{
            display:inline-block;
            width:2.7231rem;
            height:100%;
        }
    }
    .title-container{
        width:100%;
        height:1.1393rem;
        box-sizing:border-box;
        padding:.12766rem;
        h2{
            width:100%;
            height:.416rem;
            font-size:.15rem;
            margin-bottom:.21277rem;
        }
    }
    .account-info{
        width:100%;
        height:.25525rem;
        font-size:.12rem;
        display:flex;
        align-items:center;
    }

    .account-img{
        img{
            width:.2553rem;
            height:.2553rem;
            border-radius:50%;
        }
    }
    .account-name{
        flex:1;
        padding-left:.10894rem;
        color: #333;
    }
    .account-follow{
        color: #666;
        border: solid 1px #999;
    }
    .headline-content{
        width:100%;
        overflow:hidden;
        box-sizing:border-box;
        padding:.06809rem .12766rem .12766rem;
        p{
            font-size:.13rem;
            color:#333;
            line-height:.22rem;
            strong{
                display:block;
                margin:.1rem 0;
            }
        }
        img{
            margin:.1rem 0 ;
            width:100%;
        }
        a{
            color: #2f5c94;
            
        }
        h2{
            font-size:.16rem;
        }
    }
`