import styled from "styled-components"





export const HomeListUL = styled.div`

        ul{
            margin: 0;
            background-color: #f5f5f5;
            padding: 0;
            list-style: none;
            background: #fff;
            .item-main{
                min-width: 100%;
                overflow: hidden;
            }
        }
            
        .item{
            background-color: white;
            padding:0;
            min-height: .48446rem;
            margin-bottom: -1px;
            border: 1px solid #e6e6e6;
            border-width: 1px 0;
        }
        .item-main{
            flex:1;
        }
        .mainmenu-items-bar-link {
            width: 100%;
            color: black;
            display: block;
            /* height: 1.01rem; */
            border-bottom: solid 1px #f5f5f5;
        }
        .mainmenu-items-bar-link .mainmenu-items-bar {
            padding: 0.15rem 0.06rem;
            padding-left: .17rem;
            position: relative;
            display: flex;
        }

        .container-row {
            flex-direction: row;
            height: auto;
        }
        .container-column, .container-row {
            display: flex;
            max-height: 100%;
            width: 100%;
        }
        .mainmenu-items-bar-link .mainmenu-items-bar .mainmenu-items-bar-img {
            height: 100%;
            position: relative;
        }
        .sk-presale-icon {   /*预售*/
            position: absolute;
            right: 0;
            top: 0;
            background-color: #bd38ff;
            width: 0.2rem;
            .sale-icon {
                color: white;
                font-size: 0.1rem;
                text-align: center;
            }
            .arrow {
                position: absolute;
                width: 0;
                height: 0;
                border-left: 0.1rem solid transparent;
                border-right: 0.1rem solid transparent;
                border-top: 0.0425rem solid #bd38ff;
            }
        }
        .mainmenu-items-bar-link .mainmenu-items-bar .mainmenu-items-bar-img img {
            height: .75rem;
            width: 1.2715rem;
            min-width: 1.2715rem;
            display: block;
        }
        .mainmenu-items-bar-link .mainmenu-items-bar .item-bar-content {
            display: flex;
            flex: 1;
            box-orient: vertical;
            flex-direction: column;
            margin-left: 0.12766rem;
            width: 100% !important;
            overflow: hidden;
            .item-content-title {
                font-size: 0.13rem;
                color: #333333;
                line-height: .153191rem;
                display: flex;
                box-orient: horizontal;
                flex-direction: row;
                flex-wrap: wrap;
                >span{
                    width:100%;
                    overflow:hidden;
                    text-overflow:ellipsis; 
                    display: -webkit-box;
                    -webkit-box-orient: vertical;
                    -webkit-line-clamp: 2;
                }
                .sale-content {
                    background-color: #ff5722;
                    color: white;
                    border-radius: 0.013rem;
                    font-size: 0.13rem;
                    padding: 0rem 0.02rem;
                    margin-right: 0.051rem;
                }
                .inter {/*  国际颜色 */
                    background-color: #106dde;
                }
            }
            .item-content-view {
                display: flex;
                box-orient: horizontal;
                flex-direction: row;
                flex: 1;
                .item-bar-middle {
                    position: relative;
                    display: flex;
                    flex: 1;
                    box-orient: vertical;
                    flex-direction: column;
                    .space {
                        display: flex;
                        flex: 1;
                    }
                    .item-bar-summary {
                        margin-bottom: 0.1106rem;
                        display: flex;
                        box-orient: horizontal;
                        flex-direction: row;
                        flex-wrap: wrap;
                        div {
                            background-color: #f5f5f5;
                            color: #666666;
                            font-size: 0.13rem;
                            padding: 0rem 0.034rem;
                            border-radius: 0.1rem;
                            margin-right: 0.0425rem;
                            max-width: 0.510638rem;
                            white-space: nowrap;
                            overflow: hidden;
                            text-overflow: ellipsis;
                            margin-bottom: 0.0255rem;
                        }
                    }
                    .item-bar-price {
                        display: flex;
                        box-orient: horizontal;
                        flex-direction: row;
                        flex: 1;
                        align-items: flex-end;
                        color: #ff5722;
                        font-size: 0.13rem;
                        text-align: left;
                        margin-bottom: 0px;
                        width: 100%;
                        height: auto;
                        .large-screen-font {
                            font-size: 0.13rem;
                            font-weight: bold;
                            line-height: 0.13rem;
                        }
                        .item-discount {
                            display: flex;
                            align-items: flex-end;
                            margin-left: 0.068rem;
                            .round-discount-background {
                                font-size: 0.11rem;
                                line-height: 0.11rem;
                            }
                        }
                    }
                }
            }
        }
        .round-discount-background {
            color: #ff5722;
            font-size: 0.11rem;
            line-height: 0.11rem;
            border: solid 1px #ff5722;
            border-radius: 0.017rem;
            padding: 0rem 0.02553rem;
        }
        .item, .item-linked > a, .item-main, .item-title-row {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

`