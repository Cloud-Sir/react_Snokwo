import styled from "styled-components";

export const Section = styled.div`
    padding: 0.06809rem;
    max-height: 100%;
    overflow-x: hidden;
    overflow-y: scroll;
    height: 100%;
    .subject-view-container{
        background-color: white;
        border: 1px solid #cccccc;
        margin-bottom: 0.068rem;
        .subject-view-title {
            padding: 0.068rem;
            color: #f06d01;
        }
        img {
            width: 100%;
            max-height: 4.08511rem;
            display: block;     
            border: 0;  
        }
    }
    .p-title {
        overflow: hidden;
        white-space: nowrap;
        word-break: break-all;
        word-wrap: break-word;
        text-overflow: ellipsis;
    }
`