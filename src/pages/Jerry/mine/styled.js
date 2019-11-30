import styled from "styled-components"

export const Header = styled.div`
    width: 100%;
    height: 1.36rem;
    background: linear-gradient(#333333, rgba(51, 57, 77, 0.98));
    display: inline-block;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: .28936rem .25532rem .21277rem ;
    box-sizing: border-box;
    .top{
        width: 100%;
        height: auto;
        display: flex;
        box-orient: horizontal;
        flex-direction: row;
        align-items: center;
        .pic{
            position: relative;
            width: .49rem;
            height: .49rem;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 0;
            border-radius: 50%;
            background:#ff5722;
            .right{
                background: #999;
                width: .45953rem;
                height: .45953rem;
                overflow: hidden;
                border-radius:50%;
                z-index:100;
                img{
                    height:100%
                }
            }
            .none{
                height: 120%;
                position: absolute;
                left: -.09rem;
                top: -.03rem;
                background: #333;
                width: 60%;
                transform: rotate(5deg);
            }  
        }
        .name{
            display: flex;
            box-orient: vertical;
            flex-direction: column;
            padding-left: .1rem;
            width: 54%;
            justify-content: space-between;
            height: .45rem;
            h2{
                max-width: 82%;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                font-size:.15rem;
                color:white;
            }
            span{
                font-size: 0.12rem;
                color: #999999;
            }
        }
        .person{
            span{
                font-size:.12rem;
                color:#ccc;
            }
            .date{
                width: .49rem;
                height: .18rem;
                border-radius: 1rem;
                border: 1px solid #ff5722;
                color: #ff5722;
                font-size: 0.12rem;
                margin-top: 0.1rem;
                display: flex;
                align-items: center;
                justify-content: center;
            }
        }
    }
    .bottom{
        display: flex;
        box-orient: horizontal;
        flex-direction: row;
        margin-top: .1875rem;
        height: .19625rem;
        width: 100%;
        align-items: center;
        p{
            font-size:.12rem;
            color: #ff5722;
            padding-right: .19rem;
            strong{font-weight:normal;}
        }
        h6{
            margin-left: 0.0575rem;
            font-size: 0.12rem;
            color: #f5f5f5;
            font-weight:normal;
        }
        span{
            display: block;
            font-size: 0.12rem;
            color: #999999;
            margin-left: auto;
            i{font-size:.12rem;}
        }
    }
`

export const Second = styled.div`
    background:#f4f4f4;
    .message{
        height: .41rem;
        background-color: white;
        display: flex;
        align-items: center;
        flex-direction: row;
        padding: 0rem 0.1276rem;
        border-bottom: solid 0.0125rem #f5f5f5;
        justify-content:center;
        align-items:center;
        h5{
            font-weight:normal;
            font-size: 0.1275rem;
            color: #333333;
            flex:1;
        }
        span{
            font-size: 0.12rem;
            color: #999999;
            display: block;
            /* width: 1.4rem; */
            height:100%;
            line-height:.41rem;
            i{margin-left:.1rem}
        }
    }
    .suggest{
        h5{
            width:.3rem;
        }
        i{
            display: block;
            /* width: .22rem; */
            color:#999;
        }
    }
    .nav{
        width: 100%;
        height: auto;
        background-color: white;
        padding-bottom: .39149rem;
        display: inline-block;
        margin-top: 0.085rem;
        ul{
            display:flex;
            flex-wrap:wrap;
            li{
                width: .8rem;
                height:.85094rem;
                display: flex;
                justify-content: center;
                flex-direction: column;
                align-items: center;
                float: left;
                img{
                    height:.25531rem;
                    width:.25531rem;
                }
                span{
                    font-size: 0.12766rem;
                    color: #333333;
                    line-height: .16rem;
                    padding-top: 0.0851rem;
                }
            }
        }
    }
`