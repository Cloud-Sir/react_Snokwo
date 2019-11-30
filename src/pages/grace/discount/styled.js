import styled from "styled-components"

import listBGimg from "static/grace/img/container-list-content.png"
export const Section=styled.div`
    height: 100%;
    position: relative;
    background-color: #f5f5f5;
    .container-header-space{
        height:.3519rem;
    }
    .container-button{
        width: 100%;
        padding:0  .12766rem; 
        box-sizing:border-box;
    }
    .container-button-content{
        width: 100%;
        display:flex;
        justify-content:center;
        align-items:center;
        background-color:#ff5722;
        border-radius: 0.025rem;
        color: white;
        font-size:.1rem;
        line-height:.3404rem;
        margin:  .12766rem 0;
    }
    .container-list{
        padding:0  .12766rem; 
        width: 100%;
        box-sizing:border-box;
        margin-bottom:.0851rem;

    }
    .container-list-content{
        width: 100%;
        height:.8rem;
        background-image:url(${listBGimg});
        background-size:100%;
        background-repeat:no-repeat;
        display:flex;
        justify-content:center;
        align-items:center;
    }
    .list-left{
        padding-left: .12766rem; 
        .list-left-price{
            display:flex;
            align-items:center;
            font-size:.1rem;
            color:#000;
            line-height:.306383rem;
            font-weight:bold;
            span{
                font-size: .22rem;
                font-weight:700;
            }
        }
        .list-left-minium{
            font-size: 0.1rem;
            color: #8b572a;
            line-height: 0.119149rem;
        }
        .list-left-station{
            font-size: 0.1rem;
            color: #8b572a;
            line-height:0.119149rem;
            padding-top: 0.06808rem;
        }
    }
    .list-content{
        display: flex;
        box-orient: vertical;
        flex-direction: column;
        margin-left: 3%;
        max-width: 44%;
        .list-content-title{
            font-size: 0.1rem;
            color: black;
            max-width: 100%;
            max-height: .306383rem;
            line-height: .153191rem;
            overflow: hidden;
            word-break: break-all;
            word-wrap: break-word;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
        }
        .list-content-date{
            font-size: 0.1rem;
            color: #8b572a;
            margin-top: 0.04255rem;
            line-height:  0.129149rem;
            max-width: 100%;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }
        .list-content-rules{
            font-size: 0.1rem;
            color: #8b572a;
            line-height: 0.129149rem;
            margin-top: 0.04255rem;
        }
    }
    .list-right{
        margin-left: auto;
        width: 22%;
        text-align: center;
        font-size: 0.1rem;
        color: #333;
        .list-right-get{
            /* 领取 */
            color: #333;
        }
        .list-right-getted{
            /* 已领取 */
            width: .459531rem;
            height: .459531rem;
            border-radius: 50%;
            border: solid 1px rgba(139, 87, 42, 0.4);
            display: -ms-flexbox;
            display: flex;
            -ms-flex-align: center;
            align-items: center;
            -ms-flex-pack: center;
            justify-content: center;
            transform: rotate(-15deg);
            margin: auto;
        }
    }
    .list-bottom{
        /* width: 100%; */
        height: auto;
        padding: .06809rem .21277rem;
        border-top: solid 1px #fdbf0c;
        background-color: #ffd458;
        font-size: 0.1rem;
        display: flex;
        box-orient: horizontal;
        flex-direction: row;
        align-items: center;
        margin-bottom: 0.085106rem;
        border-radius: 0.02553rem;
        .list-bottom-rule{
            color: #8b572a;
            max-width: 80%;
            word-break: break-all;
            word-wrap: break-word;
            line-height: 0.119149rem;
        }
        .list-bottom-up{
            color: #8b572a;
            margin-left: auto;
            span{
                font-size: 0.16rem;
            }
        }
        
    }
`