import styled from "styled-components";


export const Searchcontainer = styled.div`
    width:100%;
    height:100%;
`

export const Header = styled.div`
    width:100%;
    height:.30629rem;
    padding:.03404rem 0;
    position:fixed;
    left:0;
    top:0;
    z-index:1;
    background:#333;
    display:flex;
    .searchkeyword{
        width:2.53629rem;
        height:.24675rem;
        background:#666;
        border-radius:.03rem;
        margin:.03rem 0 0 .1277rem;
        padding-left:.0681rem;
        .iconfont{
            color:#fff;
            font-size:.18rem;
            line-height:.24675rem;
        }
        input{
            width:2.27rem;
            margin-left:.04255rem;
            background:#666;
            border:none;
            outline:none;
            color:#fff;
            font-size:.1rem;
            ::-webkit-input-placeholder {color:#fff}
            :-moz-placeholder {color:#fff}
            :-ms-input-placeholder {color:#fff}              
        }
    }
    .cancle{
        width:.23821rem;
        height:.28637rem;
        padding:0.01rem .12766rem .01rem .10213rem;
        color: #999;
        font-size: .11rem;
        line-height:.28637rem;
    }
`

export const Searchhistory = styled.div`
    width:100%;
    height:5.3rem;
    background:#f4f4f4;
    padding-top:.3742rem;
    overflow-x:hidden;
    .history-record{
        width:2.94468rem;
        height:.17579rem;
        padding:.08511rem .12766rem;
        margin-top:.05rem;
        font-size:.1rem;
        color: #666;
        line-height:.17579rem;
        background:#fff;
        border:1px solid #f4f4f4;
    }
    li{
        width:100%;
        height:.4rem;
        line-height:.4rem;
        box-sizing:border-box;
        padding:.01rem .06rem .01rem .12766rem;
        font-size:.12rem;
        color: #666;
        background:#fff;
        border:1px solid #f4f4f4;
    }
    span{
        float:right;
        margin-right:.18rem;
    }
`