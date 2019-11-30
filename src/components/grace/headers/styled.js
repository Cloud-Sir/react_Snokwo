import styled from "styled-components"

export const Headers = styled.div`
    width:100%;
    height:.216rem;
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
    
    &>.left{
        font-size:.12rem;
        margin-left:.128rem;
    }
    &>.right{
        margin-right:.128rem;
       
      
    }
    .headerTitle{
        width:100%;
        position: relative;
        text-align:center;
        font-size:.13rem;
    }
    .headerinput{
        display: flex;
        box-orient: horizontal;
        flex-direction: row;
        flex: 1;
        padding: 0.027234rem 0;
        div {
            display: flex;
            align-items: center;
            background-color:  #333;
            border: 0;
            width: 100%;
            height:.246719rem;
            border-radius: 0.04255rem;
            div{
                background-color: #666;
                color: white;
                font-size: 0.1rem;
                padding-left: 0.06808rem;
                margin:0 .1rem;
                .search_icon{
                    color: white;
                    width: .170156rem;
                    margin-right:.05rem;
                    font-size:.18rem;
                    display: flex;
                } 
                input{
                    outline:none;
                    border:none;
                    background:#666;
                    width:100%; 
                    color: #fff;
                    font-size:.14rem;
                    ::-webkit-input-placeholder {  color: #fff;}
                    :-moz-placeholder {  color: #fff;}
                    :-ms-input-placeholder {  color: #fff;}​
                }
            }
        }
    }
    .searchright{
        font-size: 0.1rem;
        font-family: inherit;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #999;
        font-style:normal;
    }
`