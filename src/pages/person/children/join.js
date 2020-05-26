import React, { Component } from "react"
import {Link} from "react-router-dom"
import itemjpg from "../../images/123.jpeg"
class project extends Component {
    render(){
        return (
            <div className="join">
                <h2>参与项目</h2>
                <div className="joinList">
                    {[1,2,3,4].map((item)=>(
                        <Link to={"/detail/"+item} className="joinItem" key={item}>
                            {/* <div> */}
                                <img src={itemjpg} alt="img"/>
                                <p className="title">some title</p>
                                <p>￥200</p>
                                <p>已完成/未完成</p>
                            {/* </div> */}
                        </Link>

                    ))}
                </div>
                
            </div>
        )
    }
}
export default project