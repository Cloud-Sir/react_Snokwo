import styled from "styled-components"

export const Header = styled.div`
    width:100%;
    height:.216rem;
    background:red;
    padding:.068rem 0;
    margin-bottom:.058rem;
    position:fixed;
    z-index:1;
    left:0;
    top:0;
    background-color: #333;
    color: #ccc;
    display:flex;
    align-items:center;
    i{
        position: absolute;
        margin-left:.128rem;
    }
    &>.left{
        font-size:.12rem;
    }
    &>.right{
        position: absolute;
        right:.128rem;
    }
    div{
        width:100%;
        text-align:center;
        font-size:.13rem;
    }
`

export const Downextrusion = styled.div`
    width:100%;
    height:.41rem;
    background:#f4f4f4;
`

export const Groupspagecontainer = styled.div`
    width:100%;
    .groups-introduction{
        width:100%;
        height:1.3954rem;
        box-sizing:border-box;
        padding:.12766rem .12766rem .08511rem .12766rem;
    }
    .group-base-container{
        width:100%;
        height:.7574rem;
        display:flex;
        .group-base-img{
            width:1.2765rem;
            height:.75737rem;
            margin-right:.08511rem;
            img{
                width:100%;
                height:100%;
            }
        }
        .base-info{
            width:1.58319rem;
            height:100%;
            h4{
                width:100%;
                height:.3744rem;
                font-size:.13rem;
                color: #333;
                overflow: hidden;
                word-break: break-all;
                word-wrap: break-word;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 2;
            }
            .info-introduction-center{
                width:100%;
                height:.112rem;
                margin-top:.05106rem;
                font-size:.1rem;
                i{
                    color:#999;
                    font-size:.1rem;
                    padding-right:.05106rem;
                }
                span{
                    padding-right:.09362rem;
                }
            }
            .info-introduction-leaders{
                width:100%;
                height:.12762rem;
                margin-top:.05106rem;
                font-size:.1rem;
                color:#666;
                display:flex;
                img{
                    width:.1276rem;
                    height:.1276rem;
                    border-radius:50%;
                }
            }
        }
    }
    .group-btn-container{
        width:100%;
        height:.34038rem;
        margin-top:.08511rem;
        display:flex;
        .btn-normal{
            width:1.2565rem;
            height:.32038rem;
            border:1px solid #ccc;
            border-radius:.025rem;
            margin-right:.08511rem;
            display:flex;
            justify-content:center;
            align-items:center;
            color: #666;
            font-size:.12rem;
        }
        .btn-focus{
            display: flex;
            flex: 1;
            align-items: center;
            justify-content: center;
            height:.32038rem;
            background-color: #ff5722;
            opacity: 0.9;
            border-radius: 0.025rem;
            color: white;
            font-size: 0.0875rem;
        }
    }
`

export const Groupposts = styled.div`
    width:100%;
    height: .37438rem;
    ul{
        width:100%;
        height:.37438rem;
        padding-bottom:.0085rem;
        border-bottom: 0.00625rem solid whitesmoke;
        display:flex;
        justify-content:space-around;
        align-items:center;
        color: #333333;
        li{
            line-height:.37438rem;
            font-size:.13rem;
            box-sizing:border-box;
            a{
                float:left;
                width:100%;
                height:100%;
            }
            .activebian{
            color: #ff5722;
            border-bottom:0.012rem solid #ff5722;
        }
        }
    }
`
