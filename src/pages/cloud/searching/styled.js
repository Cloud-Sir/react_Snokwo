import styled from "styled-components";

export const Bigbox = styled.div`
    width:100%;
    height:100%;
`

export const Header = styled.div`
    width:100%;
    height:.7147rem;
    position:fixed;
    background:#333;
    left:0;top:0;
    z-index:1;
    .top-header{
        width:100%;
        height:.3744rem;
        i{
            font-size:.14rem;
            color:#ccc;
            position:absolute;
            left:.12rem;
            top:.1rem;
        }
    }
    .savekeyword{
        width:2.53629rem;
        height:.24675rem;
        background:#666;
        border-radius:.03rem;
        position:absolute;
        left:.36rem;
        top:.07rem;
        display:flex;
        align-items:center;
    }
    .searchres{
        min-width:.24358rem;
        height:.18712rem;
        padding:0 .06809rem;
        margin-left:.034rem;
        font-size:.12rem;
        color: white;
        background:#4a4a4a;
        display:flex;
        justify-content:space-between;
        align-items:center;
        border-radius:.03rem;
        span{
            color:#666;
        }
    }

    .bottom-header{
        width:100%;
        height:.3404rem;
        ul{
            width:100%;
            height:100%;
            display:flex;
            justify-content:space-around;
            align-items:center;             
        }
        li{
            height:100%;
            font-size:.12rem;
            box-sizing:border-box;
            display:flex;
            color:#f4f4f4;
            align-items:center;
        }
    }
`

export const Contentbox = styled.div`
    width:100%;
    min-height: 4.95rem;
    padding-top:.7146rem;
    background:#f4f4f4;
    ul{
        width:100%;
        min-height:4.6rem;
        background:#fff;
    }
`