import React, { Component } from "react"
import { Link } from "react-router-dom"
import Productoin from "../../common/prodution"
import itemjpg from "../../images/123.jpeg"
import axios from "../../../util/axios"
import url from "../../../util/url"
class itemList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.linkId,
            list:[]
        }
        this.items = null;
    }
    getData(e) {
        axios.get("project/getByCategory?category="+e).then(res=>{
            console.log(res)
            if(res.data.code==200){
                this.setState({list:res.data.data})
            }
        })
    }

    componentDidMount() {
        //console.log(datas);
        this.getData(this.props.linkId)
        // const { id } = this.state;
        // this.setState({
        //     id: id,
        // });
    }
    render() {
        // const datas = this.getData();
        // const { id } = this.state;
        // this.items = datas[id];
        //console.log(123);
        console.log(this.items);
        return (
            <div className="itemList">
                {this.state.list.map((item, index) => (
                    <Productoin 
                    key={index}
                    id={item.pid}
                    img={item.image||itemjpg} 
                    title={item.name}
                    author={item.author} 
                    content={item.introduction} />
                    

                ))}
            </div>
        )
    }
}
export default itemList