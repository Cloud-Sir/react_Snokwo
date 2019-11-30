import React, { Component,Fragment } from 'react';
import Header from "components/grace/headers"
import  HomeUL  from "components/grace/homelist"
import { Section } from './styled';
import {withRouter} from "react-router-dom"
@withRouter
class SearchGame extends Component {
    render() {
        return (
            <Fragment>
                  <Header lefticon={"\ue645"} righticon={"\ue6a7"} has={"1"} path={this.props}/>
                  {/* title={"优惠大厅"}  */}
                  <Section>
                    <div className="container-header-space"></div>
                      <div className="search-title">
                        <a href="/"><div className="border active">最新</div></a>
                        <a href="/"><div className="border">评分</div></a>
                        <a href="/"><div className="border">大家想要</div></a>
                        <a href="/">
                            <div className="border">
                                价格
                                <span className="border_top border_sort_content"></span>
                                <span className="border_bottom border_sort_content"></span>
                            </div>
                        </a>
                        <a href="/">
                            <div className="border">
                            筛选
                            <span className="border_screen border_sort_content"></span>
                            </div>
                        </a>
                      </div>
                      <div className="container-space"></div>
                      <HomeUL></HomeUL>
                      <HomeUL></HomeUL>
                      <HomeUL></HomeUL>
                      <HomeUL></HomeUL>
                      <HomeUL></HomeUL>
                      <HomeUL></HomeUL>
                      <HomeUL></HomeUL>
                      <HomeUL></HomeUL>
                      <HomeUL></HomeUL>
                      <HomeUL></HomeUL>
                      <HomeUL></HomeUL>
                      <HomeUL></HomeUL>
                      <HomeUL></HomeUL>
                      <HomeUL></HomeUL>
                      <HomeUL></HomeUL>
                      <HomeUL></HomeUL>
                      <HomeUL></HomeUL>
                      <HomeUL></HomeUL>
                      <HomeUL></HomeUL>
                      <HomeUL></HomeUL>
                      <HomeUL></HomeUL>
                  </Section>
            </Fragment>
        );
    }
}

export default SearchGame;