import React, { Component, Fragment } from 'react';
import Header from "components/grace/headers"
import SearchUL from "components/grace/homesearch"
import { Section } from './styled';
import { withRouter } from "react-router-dom"
import { connect } from "react-redux"
import { mapStateToProps, mapDispatchToProps } from "./mapStore"
@withRouter
@connect(mapStateToProps, mapDispatchToProps)
class SearchGame extends Component {
    constructor() {
        super()
        this.state = {
            has: true,
            flag: false,
            activeIndex: ''
        }
    }
    render() {
        let { flag, has, activeIndex } = this.state
        return (
            <Fragment>
                <Header lefticon={"\ue645"} righticon={"\ue6a7"} has={"1"} path={this.props} />
                <Section>
                    <div className="container-header-space"></div>
                    <div className="search-title">
                        <span>
                            <div className={activeIndex === 0 ? 'border active' : 'border'} onClick={this.handleTogle.bind(this, 0)}>演唱会</div>
                        </span>
                        <span>
                            <div className={activeIndex === 1 ? 'border active' : 'border'} onClick={this.handleTogle.bind(this, 1)}>舞台剧</div>
                        </span>
                        <span>
                            <div className={activeIndex === 2 ? 'border active' : 'border'} onClick={this.handleTogle.bind(this, 2)}>儿童剧</div>
                        </span>

                        <span>
                            <div className={activeIndex === 3 ? 'border active' : 'border'} onClick={this.handleTogle.bind(this, 3)}>
                                音乐剧
                            </div>
                        </span>
                        <span >
                            <div className={activeIndex === 4 ? 'border active' : 'border'} onClick={this.handleTogle.bind(this, 4)}>
                                价格
                                {
                                    !flag ? (
                                        <Fragment>
                                            <i className="border_top border_sort_content" style={{ borderBottomColor: "pink" }}></i>
                                            <i className="border_bottom border_sort_content" style={{ borderTopColor: "pink" }}></i>
                                        </Fragment>
                                    ) : (
                                            (has ? (
                                                <Fragment>
                                                    <i className="border_bottom border_sort_content" style={{ borderTopColor: "red" }}></i>
                                                    <i className="border_top border_sort_content" style={{ borderBottomColor: "pink" }}></i>
                                                </Fragment>
                                            ) : (
                                                    <Fragment>
                                                        <i className="border_bottom border_sort_content" style={{ borderTopColor: "pink" }}></i>
                                                        <i className="border_top border_sort_content" style={{ borderBottomColor: "red" }}></i>
                                                    </Fragment>
                                                )
                                            )

                                        )
                                }
                            </div>
                        </span>
                    </div>
                    <div className="container-space"></div>
                    <SearchUL list={this.props.searchList ? this.props.searchList : []} />
                </Section>
            </Fragment>
        );
    }
    handleTogle(ind) {
        switch (ind) {//eslint-disable-line
            case 0:
                this.props.handleSearchChange("演唱会")
                break;
            case 1:
                this.props.handleSearchChange("舞台剧")
                break;
            case 2:
                this.props.handleSearchChange("儿童剧")
                break;
            case 3:
                this.props.handleSearchChange("音乐剧")
                break;
            case 4:
                this.props.handlePriceSort(this.state.has)
                this.setState({ has: !this.state.has, flag: true })
                break;
        }
        this.setState({ activeIndex: ind })
    }
}

export default SearchGame;