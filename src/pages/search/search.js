import React, { Component } from "react"
import Productoin from "../common/prodution"
import axios from "../../util/axios"
import "./search.scss"
class search extends Component {
    constructor(){
        super()
        this.state={
            list:[]
        }
    }
    componentDidMount(){
        this.getInfo(this.props.match.params.key)
    }
    getInfo=(key)=>{
        key = decodeURI(key)
        axios.get("project/getByName?name="+key).then(res=>{
            console.log(res)
            if(res.data.code===200){
                this.setState({list:res.data.data})
            }
        })
    }
    render() {
        
        return (
            <div className="searchResult">
                <div className="resultList">
                    {this.state.list.map((item, index) => (
                        <Productoin 
                            key={index}
                            id={item.pid}
                            img={item.image}
                            title={item.title}
                            author={item.author}
                            content={item.content}
                        />

                    ))}
                </div>
            </div>

        )
    }
}
export default search