import styled from "styled-components"

export const HomeModule = styled.div`

        /* 第三块 */
        .store-sec-kill-container{
            background:#fff;
            margin:0 0 .0997rem 0;
            .store-sec-kill-header{
                display:flex;
                flex-direction:row;
                align-items:center;
                width:100%;
                  padding: .1rem;
                .header{
                    font-size: .1531rem;;
                    font-weight: bold;
                }
            }
            /* height: 149px; */
            
                
                        .store-item-card-container{
                            margin: 0rem 0rem 0.1496rem 0.1496rem;
                            width:1.4rem;
                            :first-child {
                                margin-left: 0.1496rem;
                            }
                            .card-img{
                                width:1.4rem;
                                height: .9rem;
                                position: relative;
                                img{
                                    width: 100%;
                                    height: 100%;
                                }
                            }
                            .card-content{
                                display: flex;
                                flex-direction: column;
                                .title{
                                    width: 100%;
                                    font-size: 0.12rem;
                                    line-height: .14rem;
                                    margin-top: 0.049867rem;
                                    overflow: hidden;
                                    text-overflow: ellipsis;
                                    white-space: nowrap;
                                    .sale-content{
                                        background-color: #ff5722;
                                        color: white;
                                        border-radius: 0.99734PX;
                                        font-size: 0.13rem;
                                        padding: 0rem 0.03rem;
                                        margin-right: 0.06rem;
                                    }
                                   .inter {
                                        background-color: #106dde;
                                    }
                                }
                                .price-content{
                                    width: 100%;
                                    height: .1793rem;
                                    display: flex;
                                    flex-direction: row;
                                    align-items: center;
                                    font-size: 0.13rem;
                                    color: #ff5722;
                                    font-weight: bold;
                                    margin-top: 0.04rem;
                                    .discount{
                                        border-radius: 0.008rem;
                                        height: .14rem;
                                        font-size: 0.125rem;
                                        padding: 0rem 0.02rem;
                                        font-weight: normal;
                                        line-height: .145rem;
                                        margin-left: 0.0598rem;
                                        color: #FFFFFF;
                                        background: #FF5722;
                                        margin-right: 0.1296rem;
                                    }
                                    .list-price{
                                        font-size: 0.13rem;
                                        font-weight: normal;
                                        color: #B8B8B8;
                                        text-decoration: line-through;
                                    }
                                }
                            }
                        }
                    
            
        }
        .sk-touch-group{
            max-width: 100%;
            overflow: hidden;}
        .sk-touch-block{
            display: flex;
            flex-direction: row;
            width: 100%;
            overflow: auto ;
            position: absolute;
            top: 0;
            left: 0;    height: 1.5rem;
        }
        .sk-touch-container{
            width: auto;
            display: flex;
            flex-direction: row;
        }

`