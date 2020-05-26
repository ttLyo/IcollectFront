import React, { Component } from "react"
import { PageHeader } from 'antd';
class title extends Component {
    back=()=>{
        window.history.back()
    }
    render(){
        return (
            <div className="title">
                <PageHeader
                className="site-page-header"
                onBack={this.back}
                title="Title"
                />
                <h1>{this.props.name}</h1>
                {/* <p className="description">
                    {this.props.introduction}
                </p> */}
            </div>
        )
    }
}
export default title