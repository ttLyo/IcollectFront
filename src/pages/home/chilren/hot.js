import React, { Component } from "react"
import itemjpg from "../../images/123.jpeg"
import Productoin from "../../common/prodution"
import axios from "../../../util/axios"
import Axios from "axios"
class hot extends Component {
    constructor(){
        super()
        this.state={
            hotList:[],
        }
    }
    componentDidMount(){
        let list=[]
        for(let i=1;i<6;i++){
            list.push(axios.get("project/getByCategory?category="+i))
        }
        Axios.all(list).then((a)=>{
            a=a.map((i)=>{
                return i.data.data[0]
            })
            console.log(a)
            this.setState({hotList:a.slice(1)})
        })
        
    }
    render(){
        return (
            <div className="hot">
                <h3>今日热门</h3>
                <div className="hotList">
                        {this.state.hotList.map((item,index)=>(
                            <Productoin 
                            key={index}
                            id={item.pid}
                            img={item.image||itemjpg} 
                            title={item.name}
                            author={item.author} 
                            content={item.introduction} />

                        ))}
                </div>
                
            </div>
        )
    }
}
export default hot