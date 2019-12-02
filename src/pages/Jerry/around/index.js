import  React from "react"
import {Second} from "./styled"
import HeaderSearch from "components/Jerry/headers/headerSearch.js"
import { Carousel } from 'antd';
import {Link} from "react-router-dom"

import {connect} from "react-redux";
import {mapStateToProps,mapDispatchToProps} from "./connect.js"
@connect(mapStateToProps,mapDispatchToProps)
class Around extends React.Component{
    render() {
        let { list,data } = this.props;
        console.log(data)
        return(
            <div id="around">
                <HeaderSearch/>
                <Second>
                    <Carousel autoplay>
                        {
                            (list.banners ? list.banners : []).map((item, index) =>(
                            <div key={index}>
                                <h3><img src={item.cover} alt=""/></h3>
                            </div>     
                            ))
                        }
                </Carousel>
                <div className="btn">
                    < Link to = '/aroundClassify' >
                        <div>
                            <img alt="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAYAAAA5ZDbSAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MzE3NzU3MkEwQzdEMTFFNzkwRTdGQkE0MEFEMjk5QjkiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MzE3NzU3MkIwQzdEMTFFNzkwRTdGQkE0MEFEMjk5QjkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDozMTc3NTcyODBDN0QxMUU3OTBFN0ZCQTQwQUQyOTlCOSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDozMTc3NTcyOTBDN0QxMUU3OTBFN0ZCQTQwQUQyOTlCOSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Ppcl6TcAAA4lSURBVHja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" />
                            <span>分类</span>
                        </div>
                    </Link>
                    {
                        (list.nav_items ? list.nav_items : []).map((item, key) => (
                            < Link to={"/aroundSearch?nav_items_id="+item.peri_tag.id} key = {key} >
                                <div>
                                    <img alt="" src={item.icon_mobile} />
                                    <span>{item.name}</span>
                                </div>
                            </Link>
                        ))
                    }
                </div>
                    {
                        (data.peri_banners ? data.peri_banners : []).map((item, index) => (
                            <div className="content" key={index}>
                                <div className="main">
                                    <h2>{item.name}</h2>
                                    <img  alt="" src={item.img_mobile}/>
                                </div>
                                <ul className="goods">
                                    {
                                        (item.games?item.games:[]).map((good, index) => [
                                         <li key={index}>
                                            <div className="img">
                                                    <img alt="" src={good.cover}/>
                                            </div>
                                            <h3>{good.sku_name}</h3>
                                            <p>￥189.0</p>
                                        </li>   
                                        ])
                                    }
                                </ul>
                                <div className="findMore">
                                    <Link to="/aroundSearch">
                                        <p>查看更多</p>
                                        <i className="iconfont">{'\ue604'}</i>
                                    </Link>
                                    
                                </div>
                            </div>
                        ))
                    }
                
                
                </Second>
            </div>      
        )
    }
    componentDidMount(){
        this.props.handleGetList();
        this.props.handleGetData();
    }
}
export default Around;
// {
//     banners: Array(4),
//     nav_items: Array(3),
//     categories: Array(32),
//     game_tags: Array(4),
//     company_tags: Array(8)
// }