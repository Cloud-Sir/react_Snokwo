import styled from "styled-components"
 
export const Second=styled.div`
    height:100%;
    width:100%;
    padding-top:.4rem;
    background:#f5f5f5;
    .slick-track{display:flex;}
    .slick-list{overflow: hidden;}
    .ant-carousel .slick-slide {
        text-align: center;
        height: .89rem;
        line-height:.89rem;
        background: #364d79;
        overflow: hidden;
    }
    .ant-carousel{overflow:hidden;height:1.1rem;background:white;}
    .ant-carousel .slick-slide h3 {
        color: #fff;
        img{
            height:100%;
            width:100%;
        }
    }    
    .slick-dots-bottom{
        position: absolute;
        display: block;
        width: 100%;
        height: .03rem;
        margin: 0;
        padding: 0;
        text-align: center;
        list-style: none;
        top: 1.2rem;
        li{
            position: relative;
            display: inline-block;
            margin: 0 2px;
            padding: 0;
            text-align: center;
            vertical-align: top;
            button{
                display: block;
                width: .16rem;
                height: .03rem;
                padding: 0;
                color: transparent;
                font-size: 0;
                background: #fff;
                border: 0;
                border-radius: 1px;
                outline: none;
                cursor: pointer;
                opacity: 0.3;
                -webkit-transition: all 0.5s;
                transition: all 0.5s;
            }
        }
        .slick-active{
            width: .24rem;
            background: #fff;
            opacity: 1;
        }
    }
    .btn{
        display:flex;
        background:white;
        height:.71875rem;
        justify-content:space-around;
        div{
            display:flex;
            flex-direction:column;
            align-items: center;
            img{
                height:.34rem;
                width:.34rem;
            }
            span{
                font-size:.12rem;
                color:#666;
                line-height: .25rem;
            }
        }
    }
    .content{
        margin-top: 0.0625rem;
        background-color: white;
        position: relative;
        height: 4.45rem;
        .main{
            width: 100%;
            padding-left: 0.09375rem;
            padding-right: 0.09375rem;
            box-sizing: border-box;
            h2{
                font-size: 0.0875rem;
                color: #333;
                position: absolute;
                top: 0.08rem;
                font-weight: bold;
            }
            img{
                width: 100%;
                min-height: .5rem;
                margin-top: .29125rem;
                height: .60625rem;
                border-radius: 0.03125rem;
            }
        }
        .goods{
            width: 100%;
            padding-left: 0.09375rem;
            padding-right: 0.09375rem;
            box-sizing: border-box;
            position: relative;
            padding-bottom: .1rem;
            background-color: white;
            overflow: hidden;
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            li{
                margin-top: 0.0625rem;
                border-radius: 0.03125rem;
                width: 49%;
                position: relative;
                .img{
                    height: 1.156rem;
                    background-color: #f5f5f5;
                    display: flex;
                    align-items: center;
                    border-radius: 0.03125rem;
                    justify-content: center;
                    img{
                        height:.894rem;
                    }
                }
                h3{
                    background-color: white;
                    padding-top: 0.025rem;
                    font-size: .12rem;
                    color: black;
                    height: .16875rem;
                    word-break: break-all;
                    word-wrap: break-word;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    width: 100%;
                }
                p{
                    font-size: 0.128rem;
                    font-weight: bold;
                    background-color: white;
                    color: #333;
                    height: .13125rem;
                }
            }
        }
       .findMore{
            height: .375rem;
            background-color: #fff;
            display:flex;
            justify-content:center;
            align-items:center;
            border: 0.006rem solid #f5f5f5;
            p{margin-right:.04rem;margin-bottom:0;}
            p,i{
                font-size:.12rem;
                color:#999;
            }
       }
    }
`