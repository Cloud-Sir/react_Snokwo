import styled from "styled-components"

export const Second=styled.div`
    position: absolute;
    top:0;
    left:0;
    bottom:0;
    right:0;
    padding-bottom:.4rem;
    padding-top:.42rem;
    background:#f4f4f4;
    overflow: hidden;
    .edit1,.edit2,.edit3,.edit4{
        /* width: 100%; */
        padding: 0.12rem;
        display: flex;
        box-orient: horizontal;
        flex-direction: row;
        background-color: white;
        margin-top: 0.08rem;
    }
    .edit1{
        p{
            width:2.82rem !important;
            color: #0e90d2;
            font-size:.13rem
        }
    }
    .edit2{
        p{    
            display: flex;
            flex: 1;
            font-size: 0.12rem;
            color: #333333;
        }
        i{
            font-style:normal;
            font-size:.12rem;
        }
    }
    .edit3{
        div{
            display:flex;
            width:2.7rem;
            margin-right:.09rem;
            justify-content:space-between;
            span{color:#333;font-size:.12rem;}
        }
    }
    .edit4{
        .left{
            width: 2.18rem;
            font-size: 0.12rem;
            color: #666666;
            span{margin-top: .2rem;display: block;}
            i{color: #ff5722;font-style:normal;}
        }
        .right{
            display: flex;
            box-orient: vertical;
            flex-direction: column;
            h6{
                display: flex;
                box-orient: horizontal;
                flex-direction: row;
                font-size: 0.12rem;
                font-weight:normal;
                strong{font-weight:normal;color:#333;}
            }
            &>h6{color:#999;}
        }
    }
`

export const Footer = styled.div`
    position:fixed;
    left:0;
    bottom:0;
    display: flex;
    font-size: 0.12rem;
    color: #333333;
    background: white;
    border-top: 0.0125rem solid #cccccc;
    width: 100%;
    .price{
        height:.4rem;
        display:flex;
        flex:1;
        justify-content:center;
        align-items:center;
        i{
            color: #ff5722;
            margin-left: 0.03rem;
            font-style:normal;
        }
    }
    .order{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 1.06rem;
        font-size: .13rem;
        color: white;
        background-color: #ff5722;
        height:.4rem;
    }
`