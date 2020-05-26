import React, { Component } from "react"
import {Link} from "react-router-dom"
import itemjpg from "../../images/123.jpeg"
class project extends Component {
    render(){
        return (
            <div className="project">
                <h2>发布作品</h2>
                <div className="projectList">
                    {[1,2,3,4].map((item)=>(
                        <Link to={"/detail/"+item} className="projectItem" key={item}>
                            {/* <div> */}
                                <img src={itemjpg} alt="img"/>
                                <p className="title">some title</p>
                                <p>author</p>
                                <p>content</p>
                            {/* </div> */}
                        </Link>

                    ))}
                </div>
                
            </div>
        )
    }
}
export default project