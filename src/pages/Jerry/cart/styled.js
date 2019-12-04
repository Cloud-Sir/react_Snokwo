import styled from "styled-components"

export const Head=styled.div`
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 99;
`

export const Nav=styled.div`
    background-color: #333333;
    display: flex;
    box-orient: horizontal;
    flex-direction: row;
    border-top: 0.00625rem solid #999999;
    height: .38rem;
    margin-top: .4rem;
    ul{
        display:flex;
        color:#ccc;
        width:100%;
        li{
            width:50%;
            display: flex;
            flex: 1;
            justify-content: center;
            align-items: center;
            p{ 
                a{
                    text-decoration:none;color:#cccccc;
                    height: .34rem;
                    padding: 0rem 0.05rem;
                    display:block;
                    line-height: .34rem;
                    border-bottom: 0.0125rem solid #333333;
                }
                font-size:.14rem;
            }
        }
        .activegamearound{
            border-bottom: 0.0125rem solid #ff5722;
            color: #ff5722;
        }
    }
`
export const Second= styled.div`
    position:absolute;
    left:0;
    top:0;
    right:0;
    bottom:0;
    padding-top: .9rem;
    overflow-y:scroll;
    background: #f4f4f4;
    padding-bottom: .9rem;
    ul{
        /* display:none; */
        li{
            background-color: white;
            margin-top: 0.03125rem;
            display: flex;
            box-orient: horizontal;
            flex-direction: row;
            padding: 0.15rem 0;
            position: relative;
            height: .775rem;
            .checkbox{
                padding: .125rem 0.09375rem;
                display: flex;
                justify-content: center;
                align-items: center;
                /* position: relative; */
                input{
                    width: 16px;
                    height: 16px;
                }
            }
            .image{
                width: .87rem;
                height: .87rem;
                background-color: #f5f5f5;
                display: flex;
                align-items: center;
                justify-content: center;
                img{
                    width: .55rem;
                    height: .5rem;
                    max-width: 100%;
                    height: auto;
                    display: inline-block;
                    vertical-align: middle;
                }
            }
            .describe{
                height: .87rem;
                padding-right: .15rem;
                padding-left: .15rem;
                display: flex;
                flex: 1;
                box-orient: vertical;
                flex-direction: column;
                overflow: hidden;
                position: relative;
                .title{
                    h3{
                        font-size: .14rem;
                        overflow: hidden;
                        line-height: .2rem;
                        white-space: nowrap;
                        word-break: break-all;
                        word-wrap: break-word;
                        text-overflow: ellipsis;
                        font-size:.14rem;
                        font-weight:normal;
                        color:#333;
                    }
                    span{
                        font-size:.12rem;
                        display: flex;
                        box-orient: horizontal;
                        flex-direction: row;
                        align-items: center;
                        overflow: hidden;
                        color:#999;
                        margin-top: 0.05rem;
                    }
                }
                .price{
                    display:flex;
                    box-orient: horizontal;
                    flex-direction: row;
                    justify-content: flex-end;
                    margin-top: auto;
                    p{
                        flex: 1;
                        font-size: 0.13rem;
                        color: #ff5722;
                        padding-top: 0.05rem;
                    }
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
        }
    }

    /* 空购物车 */
    .empty{
        /* display:none; */
        text-align:center;
        p{
            margin-top: 1.7rem;
            color: #666666;
            font-size: .12rem;
            margin-bottom: .24rem;
        }
        span{
            border: 0;
            background-color: #f4f4f4;
            padding: 0 .1367rem;
            color: #0288d1;
            font-size: 0.12rem;
        }
    }
    /* 游戏购物车 */
    .game{
        .top{
            background:white;
            .head{
                display:flex;
                justify-content:center;
                align-items:center;
                padding:0 .15rem;
                align-items: center;
                height: .4rem;
                margin-top: .05rem;
                border-bottom: solid 1px #f5f5f5;
                h4{
                    font-size: .14rem;
                    color: #333;
                    margin-left: .136rem;
                    color:#333;
                    flex:1;
                }
                span{
                    margin-left: auto;
                    color: #666;
                    font-size: 0.12rem;
                    i{
                       font-size:.16rem;
                       font-weight:bold;
                    }
                }
            }
            ul{
                display:flex;
                flex-direction:column;
                li{
                    display:flex;
                    height:.755rem;
                    .check{
                        display:flex;
                        justify-content:center;
                        align-items:center;
                        height:.757rem;
                        width:.3914rem;
                    }
                    img{
                        width:1.27rem;
                        height:.75rem;
                        margin-right:.1276rem;
                    }
                    .goodsName{
                        display:flex;
                        flex-direction:column;
                        justify-content:space-between;
                        span{
                            font-size:.12rem;
                            color:#333;
                        }
                        i{
                            font-size: 0.12rem;
                            color: #ff5722;
                            font-style:normal;
                        }
                    }
                }
            }
        }
    }

`
export const Footer = styled.div`
    position: fixed;
    width: 100%;
    bottom: 0;
    left: 0;
    z-index: 99;
    height:.9rem;
    .account{
        position: relative;
        background-color: white;
        border-top: 0.00625rem solid #cccccc;
        height: .4rem;
        display: flex;
        box-orient: horizontal;
        flex-direction: row;
        .check{
            margin: .1rem 0.0625rem 0 0.08125rem;
            } 
            .all{
                min-width: .35rem;
                padding-top: 0.12rem;
                font-size: 0.08125rem;
                color: #666666;
                margin-right: 0.025rem;
            }
            .main{
                display: flex;
                box-orient: vertical;
                flex-direction: column;
                flex: 1;
                align-items: flex-start;
                justify-content: center;
                p{
                    display: flex;
                    align-items: center;
                    width: auto;
                    font-size: 0.08125rem;
                    color: #333333;
                    flex:1
                    i{
                        color: #ff5722;
                        font-style:normal;
                    }
                    span{
                        color:#999;
                    }
                }
            }
            button{
                background-color: #cccccc;
                color: white;
                width: .8rem;
                border:none;
            }
    }
`