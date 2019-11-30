import styled from "styled-components"

export const Classify=styled.div`
   
`

export const Second=styled.div`
    position:absolute;
    left:0;
    top:0;
    bottom:0;
    right:0;
    padding-top:.35rem;
    overflow-y:scroll;
    background:#f4f4f4;
    .clothes{
        background-color: white;
        padding: 0.0625rem 0;
        width: 100%;
        height: auto;
        margin-top: 0.068rem;
        h2{
            width: 100%;
            height: .15rem;
            text-align: center;
            color: #666666;
            font-size: 0.12rem;
            transform:scale(.9);
            font-weight:normal;
        }
        ul{
            display: flex;
            flex-wrap: wrap;
            align-items: stretch;
            text-align: left;
            flex-direction:row;
            justify-content: space-between;
            overflow: hidden;
            padding: 0 .05rem;
            li{
                margin-top: 0.12rem;
                display: flex;
                padding: 0 .0625rem .0625rem .0625rem;
                justify-content: center;
                align-items: center;
                span{
                    padding: .05rem 0.33rem;
                    height: .15rem;
                    border-radius: 0.12rem;
                    background-color: #f4f4f4;
                    margin: auto;
                    color: #333333;
                    font-size: 0.12rem;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    transform:scale(.8);
                }
            }
        }
    }
`