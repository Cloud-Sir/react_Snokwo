import React from "react";
import { Container } from "./styled";
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "./mapStore";
@connect(mapStateToProps,mapDispatchToProps)
class Searchgroup extends React.Component{
    render() {
        let { url } = this.props;
        this.url = url;
        let { show_list } = this.props;
        console.log(show_list)
        return (
            <Container>
                <div className="howmanydata">共找到了<span>{show_list.total*20+""}</span>个结果</div>
                {
                    (show_list.list ? show_list.list : []).map((item) => (
                        <li key={item.schedular_id}>
                            <div className="group-list-img">
                                <img src={item.pic} alt="" />
                            </div>
                            <div className="group-list-content">
                                <p className="group-list-title" dangerouslySetInnerHTML={{ __html: item.name }}/>
                                <p className="group-list-heat">
                                    <i className="iconfont fontcolor">{"\ue605"}</i>
                                    <span>{item.max_price}</span>
                                    <i className="iconfont fontcolor">{"\ue68b"}</i>
                                    <span>{item.min_price}</span>
                                </p>
                            </div>
                        </li>
                    ))
                }
            </Container>
        )
    }
    componentDidMount() {
        this.props.handleBeingSearchAsync(this.url)
    }
}

export default Searchgroup;