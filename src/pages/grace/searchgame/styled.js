import styled from "styled-components"


export const Section = styled.div`
    .container-header-space{
        height:.3519rem;
    }
    .container-space{
        height:.4219rem;
        background-color: white;
    }
    .search-title{
        width: 100%;
        height: .3519rem;
        background-color: white;
        display: flex;
        box-orient: horizontal;
        flex-direction: row;
        border-bottom: solid 1px #e6e6e6;
        position:fixed;
        z-index:111;
        span{
            width: 20%;
            height: 100%;
            border: 0;
            display: flex;
            flex: 1;
            justify-content: center;
            align-items: center;
            font-size: 0.1rem;
            color: #666;
            .active{
                color: #ff5722;
                border-bottom: solid 0.02rem #ff5722;
            }
        }
        .border{
                height: 100%;
                padding: 0rem 0.06rem;
                border-bottom: solid 0.02rem white;
                display: flex;
                justify-content: center;
                align-items: center;
                position: relative;
                box-sizing:border-box;
            }
    }
    .border_sort_content{
        color: #666;
    }
    .border_top{
        border:solid .05rem transparent;
        position: absolute;
        right: -.07rem;
        top: .07rem;    
    }
    .border_bottom{
        border:solid .05rem transparent;
        position: absolute;
        right: -.07rem;
        top: 0.2rem;
    }
    .border_screen{
        width: 0px;
        height: 0px;
        border-width: 0.045rem 0.045rem 0rem 0.045rem;
        border-color: #666 transparent;
        border-style: solid;
        /* margin-left: 0.25rem; */
    }

`
