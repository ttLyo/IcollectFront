import React, { Component } from "react"
import Project from "./children/project"
import Join from "./children/join"
import  PersonInfo from "./children/personInfo"
import "./person.scss"
class person extends Component {
    componentDidMount(){
        console.log(this.props.match.params)
    }
    back=()=>{
        window.history.back()
    }
    render(){
        return (
            <div className="person">
                <PersonInfo />
                <Project />
                <Join />
            </div>
        )
    }
}
export default person