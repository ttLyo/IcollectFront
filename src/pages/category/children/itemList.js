import React, { Component } from "react"
import { Link } from "react-router-dom"
import Productoin from "../../common/prodution"
import itemjpg from "../../images/123.jpeg"
class itemList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.linkId,
        }
        this.items = null;
    }
    getData() {
        function item(id, itemPic, title, author, content) {
            this.id = id;
            this.itemPic = itemPic;
            this.title = title;
            this.author = author;
            this.content = content;
        }

        let data1 = [
            new item(1, itemjpg, '111', 'mmm', 'ccc'),
            new item(2, itemjpg, '121', 'mmm', 'ccc'),
            new item(3, itemjpg, '113', 'mm5', 'ccc'),
            new item(4, itemjpg, '115', 'mmm', 'ccc'),
            new item(5, itemjpg, '171', '8mm', 'ccc'),
            new item(6, itemjpg, '131', 'mmm', 'ccc'),
        ];
        let data2 = [
            new item(7, itemjpg, '222', 'mmm', 'ccc'),
            new item(8, itemjpg, '222', 'mmm', 'ccc'),
            new item(9, itemjpg, '333', 'mm5', 'ccc'),
            new item(10, itemjpg, '333', 'mmm', 'ccc'),
        ];
        let datas = {
            '1': data1,
            '2': data2,
            '3': data1,
            '4': data2,
            '5': data1,

        }
        return datas;
    }

    componentDidMount() {
        //console.log(datas);
        const { id } = this.state;
        this.setState({
            id: id,
        });
    }
    render() {
        const datas = this.getData();
        const { id } = this.state;
        this.items = datas[id];
        //console.log(123);
        console.log(this.items);
        return (
            <div className="itemList">
                {this.items.map((item, index) => (
                    <Productoin 
                        key={index}
                        id={index}
                        img={itemjpg}
                        title={item.title}
                        author={item.author}
                        content={item.content}
                    />

                ))}
            </div>
        )
    }
}
export default itemList