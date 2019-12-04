import styled from "styled-components"

export const Second = styled.div`
    position:absolute;
    left:0;
    right:0;
    top:0;
    bottom:0;
    padding-top:.4rem;
    .apply{
        width: 100%;
        height: .625rem;
        background-color: white;
        display: flex;
        align-items: center;
        justify-content:center;
        padding: 0rem 0.1276rem;
        border-bottom: solid 0.0125rem whitesmoke;
         box-sizing: border-box;
        i:first-child{ width: .3rem;font-size:.25rem;margin-right:.08rem;font-weight:bold;}
        i {
            img{
                width:.28rem;
            }
        }

        h2{
            padding-left: .125rem;
            font-size: .136rem;
            color: #333333;
            margin-bottom:0;
            flex: 1;
        }
    }
` 