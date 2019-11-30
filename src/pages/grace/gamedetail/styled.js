import styled from "styled-components"

export const Section = styled.div`
    height: 100%;
    position: relative;
    background-color: #f5f5f5;
    .container-header-space{
        height:.3519rem;
    }
    .container{
        max-height: 100%;
        overflow-x: hidden;
        overflow-y: scroll;
        height: 100%;
    }
    .game-info-group{
        width:100%;
        background-color:#fff;
        position:relative;
        margin-bottom:.06808rem;
    }
    .game-info-image{
        height:1.79734rem;
        position:relative;
        overflow:hidden;
        width:100%;
        img{
            width: 100%;
            height:100%;
        }
    }
    .game-info-simple{
        padding-top: 0.0851rem;
        position: relative;
        .game-info-title{
           padding-left:.1rem;
           font-size:.13rem;
           .game-info-name{
               color:#000;font-weight:700;
           }
           .game-info-englishName{
               color:#666;
               padding-top: 0.08rem;
           }
        }
        .game-info-price {
            position: relative;
            padding: 0.09766rem 0rem 0.09766rem 0.1rem;
            display: flex;
            box-orient: horizontal;
            flex-direction: row;
            align-items: center;
            font-size: 0.1rem;
            .game-price-normal{
                margin-bottom: 0;
                color: #ff5722;
                font-weight:700;
            }
            .game-price-reduction{
                margin-left: 0.1rem;
                border: solid .5px #ff5722;
                border-radius: 0.025rem;
                color: #ff5722;
                text-align: center;
                margin-top: 0.015rem;
                padding: 0rem 0.01rem;
                line-height: 0.13rem;
            }
            .game-price-original{
                text-decoration: line-through;
                color:#999;
                margin-left: 0.1rem;
            }
            .game-info-activity{
                overflow: hidden;
                white-space: nowrap;
                word-break: break-all;
                word-wrap: break-word;
                text-overflow: ellipsis;
                color: #FF9800;
                font-size: 0.12rem;
                margin:0 .1rem;
            }
        }
    }
    .product-info-entrance {
    /* width: 100%; */
    height: .36594rem;
    background-color: white;
    display: flex;
    box-orient: horizontal;
    flex-direction: row;
    align-items: center;
    padding: 0rem 0.12766rem;
    border-bottom: solid 1px #f5f5f5;
    }
    .entrance-title{
        color: rgb(51, 51, 51);
        width: auto;
        min-width: .442553rem;
        color: #666;
        font-size: 0.12rem;
    }
    .entrance-content{
        max-width: 69%;
        white-space: nowrap;
        word-break: break-all;
        word-wrap: break-word;
        text-overflow: ellipsis;
        font-size: 0.13rem;
        color: #333;
    }
    a{
        color: #0e90d2;
        background-color: transparent;
        text-decoration: none;
    }
    .border{
        border: solid 1px #ff5722;
        color: #ff5722;
        padding: 0rem 1px;
        border-radius: 0.01rem;
    }
    .icon-jr{
        font-size: 0.14rem;
        color: #cccccc;
        margin-left: auto;
    }
    .developer-skus-container{
        width: 100%;
        height: auto;
        background-color: white;
        padding: 0.08511rem 0rem 0rem 0rem;
        margin-top: 0.08511rem
    }
    .developer-skus-header{
        display: flex;
        box-orient: horizontal;
        flex-direction: row;
        align-items: center;
        height:.1785rem;
        /* width: 100%; */
        padding-right: 0.12766rem;
        padding-left: 0.12766rem;
        margin-bottom: 0.08511rem;
        .title{
            font-size: 0.12rem;
            color: black;
            font-weight: bold;
        }
        .view-more{
            margin-left: auto;
        font-size:  0.12rem;
        color: #999;
        }
    }
    .sk-touch-group{
        max-width: 100%;
        overflow: hidden;
        position: relative;}
    .sk-touch-block{
        display: flex;
        flex-direction: row;
        width: 100%;
        overflow: auto ;
        position: absolute;
        top: 0;
        left: 0;
    }
    .sk-touch-container{
        width: auto;
        display: flex;
        flex-direction: row;
    }
    .store-item-card-container{
        margin: 0rem 0rem 0.1496rem 0.1496rem;
        width:1.4rem;
        :first-child {
            margin-left: 0.1496rem;
        }
        .card-img{
            width:1.27656rem;
            height: .7573rem;
            position: relative;
            img{
                width: 100%;
                height: 100%;
            }
        }
        .card-content{
            display: flex;
            flex-direction: column;
        }
        .title{
            width: 100%;
            font-size: 0.1rem;
            line-height: .14rem;
            margin-top: 0.04rem;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }
        .price-content{
            width: 100%;
            height: .153125rem;
            display: flex;
            flex-direction: row;
            align-items: center;
            font-size: 0.13rem;
            color:#ff5722;
            font-weight: bold;
            margin-top: 0.04rem;
        }
    }
    .game-introduce-contianer {
        /* width: 100%; */
        height: auto;
        background-color: white;
        padding: 0.08511rem 0.12766rem;
        margin-top: 0.0851rem;
        .title {
            font-size: .13rem;
            color: black;
            font-weight: bold;
            line-height: .2rem;
        }
        .content {
            word-wrap: break-word;
            word-break: break-all;
            p {
                font-size: 0.1rem;
                line-height: .18rem;
                color: #333;
                margin: 0;
                padding: 0;
                margin-bottom: .13617rem;
            }
        }
    }
    .container-footer-space{
        height: .48511rem;
    }
`
export const Footer = styled.div`
    .container-footer-zone{
        position: fixed;
        width: 100%;
        bottom: 0;
        left: 0;
        z-index: 99;
    }
    .game-info-footer{
        display: flex;
        box-orient: horizontal;
        flex-direction: row;
        background-color: white;
        border-top: 1px solid #cccccc;
        width: 100%;
        height: .4rem;
        a {
            display: flex;
            justify-content: center;
            align-items: center;
            /* border: 0; */
        }
        a:last-child{
            margin-right:0;
        }
    }
    .game-info-footer-icon {
    height: .4rem;
    display: flex;
    box-orient: horizontal;
    flex-direction: row;
}


.view-cart-button {
    color: #666666;
    padding: 0rem 0.03404rem;
    height: .4rem;
    border-right: solid 1px #cccccc;
    display: flex;
    box-orient: vertical;
    flex-direction: column;
    align-items: center;
    position: relative;
    min-width: .52766rem;
    span {
        width: .17016rem;
        height: .17016rem;
        font-size: .13rem;
        display: block;
        padding: 0;
        margin-top: -0.02rem;
    }
    div{
        font-size:.13rem;
    color: #666666;
    }
    
}
.view-wish-button {
    color: #666666;
    padding: 0rem 0.10212rem;
    height: .4rem;
    display: flex;
    box-orient: vertical;
    flex-direction: column;
    align-items: center;
    min-width: .544681rem;
    span {
        width: .17016rem;
        height: .17016rem;
        font-size: .13rem;
        display: block;
        padding: 0;
        margin-top: -0.02rem;
    }
    div {
        font-size: 0.13rem;
    }
}

.game-footer-canby {
    display: flex;
    box-orient: horizontal;
    flex-direction: row;
    flex: 1;
}
.add-cart-button {
    background-color: #ff9800;
    color: #ffffff;
    flex: 1;
    height: .4rem;
    text-align: center;
    font-size: 0.14rem;
}
.buy-button {
    color: #ffffff;
    flex: 1;
    height:.4rem;
    font-size:  0.14rem;
    text-align: center;
    background-color: #ff5722;
}


`