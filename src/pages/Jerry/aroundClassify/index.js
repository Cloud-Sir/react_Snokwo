import React from "react"
import {Classify,Second} from "./styled.js"
import Header from "components/Jerry/headers/headerTitle.js"

import {connect} from "react-redux";
import {mapStateToProps,mapDispatchToProps} from "../around/connect.js"
@connect(mapStateToProps,mapDispatchToProps)
class AroundClassify extends React.Component{
    constructor() {
        super();
        this.state = {
            parent: [],
            child: []
        }
    }
    render() {
        let { list } = this.props;
        let {parent,child } = this.state;
        if (list.categories && parent.length==0) {
            for (var i = 0; i < list.categories.length; i++){
                if (!list.categories[i].parent_id) {
                   parent.push(list.categories[i])
                } else {
                    child.push(list.categories[i])
                }
            }
        }
        return(
            <Classify>
                <Header title="分类"/>
                <Second>
                    {
                        parent.map((item, index) => (
                            <div className="clothes" key={index}>
                                <h2>{item.name}</h2>
                                <ul>
                                    {
                                        child.map((a, index) => (
                                             a.parent_id == item.id? <li key={index}><span>{a.name}</span></li>:""
                                        ))
                                    }
                                  
                                </ul> 
                              
                            </div>   
                        ))
                       
                    }
                   {/* depth: 0
                   id: 1
                   name: "服饰"
                   subs_count: 3
                   __proto__: Object
                   1:
                       depth: 1
                   id: 4
                   name: "帽子"
                   parent_id: 1
                   subs_count: 0 */}
                </Second>
                
            </Classify>
        )
    }
    componentDidMount() {
        this.props.handleGetData();
    }
   
}
export default AroundClassify;