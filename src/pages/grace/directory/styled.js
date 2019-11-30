import styled from "styled-components"
export const Section=styled.div`
    height: 100%;
    background-color: #393d42;
    overflow-x: hidden;
    overflow-y: scroll;
    .container-header-space{
        min-height:.41rem;
    }
    .grid-mui{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: stretch;
        text-align: left;
        background-color: #393d42;
        padding-top: 0.06809rem;
    }
    .grid-col{
        width: 33.3333%;
    }
    .grid-col > * {
        padding: 0 .08511rem .08511rem .08511rem;
    }
    .publishers-container button {
        width: 100%;
        border: 0;
        min-height: .714894rem;
        overflow: visible;
        color: inherit;
        line-height: normal;
        cursor: pointer;
        text-transform: none;
        outline:none;
        background: linear-gradient(to bottom, transparent, transparent);
    }
    img{
        max-width: 100%;
        height: auto;
        display: inline-block;
        vertical-align: middle;
    }
`

