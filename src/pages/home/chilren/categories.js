import React, { Component } from "react"
import itemjpg from "../../images/123.jpeg"
import Productoin from "../../common/prodution"
import { Link } from 'react-router-dom'
import axios from "../../../util/axios"
import Axios from "axios"
class categories extends Component {
    constructor(){
        super()
        this.state={
            list:[[],[],[],[],[],[],[]],
        }
    }
    componentDidMount(){
        let list=[]
        for(let i=1;i<6;i++){
            list.push(axios.get("project/getByCategory?category="+i))
        }
        Axios.all(list).then((a)=>{
            // console.log(a)
            let hot=[]
            a=a.map((i)=>{
                hot.push(i.data.data[0])
                return i.data.data
            })
            this.setState({list:a,hotList:hot})
        })
        
    }
    render(){
        let categoriesTypes=["绘画","影视","手工艺","食品","文字"]
        return (
            <div className="categories">
                {categoriesTypes.map((type, index)=>(
                    <div key={index} id={type}>
                    <Link to={"/category/"+index} className="typeName">{type}</Link>
                    <div className="categoriesItem">
                        {this.state.list[index].map((item,index1)=>(
                            <Productoin 
                            key={index1}
                            id={item.pid}
                            img={item.image||itemjpg} 
                            title={item.name}
                            author={item.author} 
                            content={item.introduction} />

                        ))}
                    </div>
                    </div>
                ))}
            </div>
        )
    }
}
export default categories