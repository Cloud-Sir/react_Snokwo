import styled from "styled-components"
export const Head=styled.div`
    height:.73rem;
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: 1000;
    .head{
        position:static;
    }
`
export const Nav=styled.div`
    background-color: #333333;
    width: 100%;
    margin-top:.41rem;
    /* display: flex; */
    /* flex-direction: row; */
    /* align-items: center; */
    box-sizing:border-box;
    ul{
        height: .33rem;
        /* height: 100%; */
        width: 100%;
        box-sizing: border-box;
        display: flex;
        justify-content: space-around;
        margin-bottom: 0;
        li{
            display: flex;
            flex: 1;
            box-orient: horizontal;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            font-size: 0.12rem;
            transform: scale(.9);
            color: #cccccc;
            p{margin-bottom:0;}
            i{
                width:0;
                height:0;
                border:.04rem solid transparent;
                border-top-color:#ccc;
                margin-top: .05rem;
                margin-left: .03rem;
            }
        } 
    }

   .block{
        position: absolute;
        left: 0;
        top: .4625rem;
        width: 100%;
        background-color: #333333;
        padding-top: 0.05rem;
        z-index: 1;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: stretch;
        text-align: left;
    }
    /* 鼠标点击后 */
    .active{
        color: #ff5722;
        i{
            margin-top: -.05rem;
            margin-left: .03rem;
            width: 0;
            height: 0;
            border: solid 0.04rem transparent;
            border-bottom-color: #ff5722;
            /* top: -0.0375rem;
            left: 0.0125rem; */
        }
    }
    .isShow{
        width:100%;
        height:auto;
        background:#333;
        ol{
            position: absolute;
            left: 0;
            width:100%;
            background-color: #333333;
            z-index: 1;
            display:flex;
            padding:.08rem;
            flex-wrap: wrap;
            box-sizing: border-box;
            li{
                width:.9rem;
                color: #999;
                font-size:.12rem;
                text-align: center;
                margin-top:.04rem;
            }
        }
    }
`  
export const Second=styled.div`
    position:absolute;
    left:0;
    top:0;
    bottom:0;
    right:0;
    padding-top:.73rem;
    overflow:scroll;
    .result{
        padding: 0.0625rem 0.1rem;
        color: #666;
        width:100%;
        overflow: hidden;
        p{ 
            transform:scale(.9);
            margin-bottom:0; 
            font-size: 0.12rem;
            line-height: .2rem;
            height: .25rem;
            width: 100%;
            margin-left: -.1rem;
        }
        ul{
            /* padding-left: 0.09375rem;
            padding-right: 0.09375rem; */
            width: 100%;
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            margin: 0 auto;
            li{
                border-radius: 0.03125rem;
                width: 49%;
                position: relative;
                margin-bottom: 0.0625rem;
                height: 2.32rem;
                .imag{
                    height: .1156rem;
                    background-color: #f5f5f5;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    height: 1.84rem;
                    img{
                        height: 1.49rem;
                    }
                }
                p{
                    background-color: white;
                    padding-top: 0.025rem;
                    font-size: 0.12rem;
                    color: black;
                    height: .18875rem;
                    word-break: break-all;
                    word-wrap: break-word;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    width: 100%;
                    line-height:.18rem;
                    margin:0;
                    color:#000;
                }
                strong{
                    display: flex;
                    box-orient: horizontal;
                    flex-direction: row;
                    align-items: flex-end;
                    font-size: 0.15rem;
                    font-weight: bold;
                    font-weight: medium;
                    background-color: white;
                    color:#333;
                }
            }
            
        }
        
    }
`