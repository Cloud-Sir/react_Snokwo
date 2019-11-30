import styled from "styled-components"

export const Second = styled.div`
    position: absolute;
    left:0;
    top:0;
    right:0;
    bottom:0;
    padding-top:.45rem;
    padding-bottom:.55rem;
    background:#f4f4f4;
    height:100%;
    overflow-y: scroll;
    .image{
        width: 100%;
        height: 2rem;
        border-bottom: 0.00625rem solid #cccccc;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        background:white;
        img{
            height: 1.82rem;
            width: 1.53rem;
            max-width: 100%;
            height: auto;
            display: inline-block;
            vertical-align: middle;
        }
    }
    .describe{
        padding: 0.05rem .1rem;
        background: white;
        box-sizing: border-box;
        margin-bottom: 0.0625rem;
        h2{
            overflow: hidden;
            white-space: nowrap;
            word-break: break-all;
            word-wrap: break-word;
            text-overflow: ellipsis;
            font-size:.13rem;
            color:#333;
        }
        p{
            display: flex;
            box-orient: horizontal;
            flex-direction: row;
            align-items: flex-end;
            margin-top: 0.1rem;
            i{
                font-size: 0.12rem;
                color: #ff5722;
                margin-right: 0.05rem;
                font-style:normal;
            }
            del{
                font-size: 0.12rem;
                text-decoration: line-through;
                color: #cccccc;
            }
        }
        span{
            font-size: 0.12rem;
            color: #666666;
            margin-top: 0.1rem;
            display: block;
            strong{
                font-weight:normal;
                margin-left:.05rem;
            }
        }
    }
    .size{
        padding:0.05rem .1rem;
        background:white;
        margin-bottom: 0.0625rem;
        h3{
            font-size: .13rem;
            padding-bottom: .09rem;
            color:#333;
            font-weight:normal;
        }
        span{
            float: left;
            display: flex;
            justify-content: center;
            align-items: center;
            margin-right: 0.05rem;
            margin-bottom: 0.05rem;
            border: 0.00625rem solid #666666;
            font-size: 0.12rem;
            background-color: white;
            color: #666666;
            min-width: .35rem;
            height: .1775rem;
            padding: 0 0.05rem;
            text-align: center;
        }
        .one{
            display: flex;
            box-orient: vertical;
            flex-direction: column;
            .color{
                display: flex;
                flex: 1;
            }
        }
        .two{height: .55rem;}
        .three{
            .count{
                width: .8rem;
                padding-top: 0.03rem;
                display: flex;
                h4{
                    display:inline-block;
                    width: .23rem;
                    height: .23rem;
                    font-weight: normal;
                    font-size: .11rem;
                    color: black;
                    font-size: .15rem;
                    border: 0;
                    padding: 0;
                    background-color: #f4f4f4;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
                h5{
                    font-weight:normal;
                    width: .23rem;
                    height: .23rem;
                    line-height:.23rem;
                    text-align:center;
                }
            }   
        }
    }
    .introduce{
        .nav{
            background-color: white;
            width: 100%;
            height: .2875rem;
            display: flex;
            box-orient: horizontal;
            flex-direction: row;
            border-bottom: 0.0125rem solid #cccccc;
            .child{
                display: flex;
                flex: 1;
                justify-content: center;
                align-items: center;
                span{
                    width: .5rem;
                    height: .3rem;
                    background: white;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    font-size: 0.12rem;
                }
                span:hover{
                    border-bottom: 0.0125rem solid #ff5722;
                    color: #ff5722;
                }
            }
        }
        .detail{
            padding: 0.05rem .1rem;
            background:white;
            img{
                max-width: 100%;
                height: auto;
                display: inline-block;
                vertical-align: middle;
            }
        }
    }
`
export const Footer = styled.div`
    position:fixed;
    left:0;
    bottom:0;
    display: flex;
    box-orient: horizontal;
    flex-direction: row;
    min-height: .35rem;
    border: 0.0125rem solid #cccccc;
    width:100%;
    .cart,.collect{
        background-color: white;
        color: #666666;
        flex: 2;
        border-right: 0.0125rem solid #cccccc;
        font-size: 0.12rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .collect{
        i{font-style:normal;color:#ff5722;font-size:.14rem;}
    }
    .buy,.add{
        display: flex;
        box-orient: vertical;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: white;
        flex: 3;
        p{font-size: 0.12rem;}
    }
    .add{background-color: #ee660b;}
    .buy{background-color:#eb0115;}
`