import styled from "styled-components"
export const Header=styled.div`
   height:.41rem;
   background:white; 
   position:fixed;
   width:100%;
   z-index:900;
   div{ 
        padding: 0 .05rem;
        font-size:.12rem;
        clear: both;
        height:.41rem;
        background:#333;
        position:relative; 
        display:flex;
        align-items:center;
        justify-content:space-around;
       span{
            position: absolute;
            left: .55rem;
            top: .11rem;
            color: white;
            z-index: 100;
        }
        i{
            color:#ccc;
        }
        input{
            border:none;
            border-radius:2px;
            height:.25rem;
            width:2.17rem; 
            padding-left:.3rem;
            background:#515151;
            color:white ;
            transform: scale(.9);
            outline:none;
        }
   }
` 