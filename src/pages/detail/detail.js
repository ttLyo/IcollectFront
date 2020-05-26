import React, { Component } from "react"
import Title from "./children/title"
import Summary from "./children/summary"
import Information from "./children/informaton"
import axios from "../../util/axios"
import "./detail.scss"
class detail extends Component {
    constructor(){
        super()
        
        this.state={
            name:"",
            author:"",
            image:"",
            startTime:"",
            endTime:"",
            instruction:"",
            targetMoney:"",
            currentMoney:"",
            qrCode:"",
            isEnded:false,
            isChecked:false,
            isFinished:false
        }
    }
    componentDidMount(){
        this.getInfo(this.props.match.params.id)
    }
    getInfo=(id)=>{
         axios.get("project/getByPid?pid="+id).then(res=>{
            console.log(res)
            this.setState(res.data.data)
        })
    }
    render(){
        return (
            <div className="detail">
                <Title name={this.state.name} introduction={this.state.introduction} />
                <Summary 
                    targetMoney={this.state.targetMoney} 
                    currentMoney={this.state.currentMoney}
                    endTime={this.state.endTime}
                    pid={this.state.pid}
                    author={this.state.author}
                    image={this.state.image}
                    update={this.getInfo}
                />
                <Information pid={this.props.match.params.id} introduction={this.state.introduction} />
            </div>
        )
    }
}
export default detail