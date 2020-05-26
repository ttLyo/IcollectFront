import React, { Component } from "react"
import { Carousel } from 'antd';
class info extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // name:{
            //     '1': '绘画',
            //     '2': '影视',
            //     '3': '手工艺',
            //     '4': '食品',
            //     '5': '文字'
            // },
            id: this.props.linkId,
            name: null,
            pics: Array(3).fill(null),
            words: null
        }
        this.name = {
            '1': '绘画',
            '2': '影视',
            '3': '手工艺',
            '4': '食品',
            '5': '文字'
        }
    }

    getData() {

        function data(id, pics, words) {
            this.id = id;
            this.pics = pics;
            this.words = words;
        }
        let datas = {
            '1': new data(1, ['hello', 'world', 'there'], '你好你好你好'),
            '2': new data(2, ['1', '2', '3'], '你好你好你好1111'),
            '3': new data(3, ['4', '5', '6'], '你好你好你好111'),
            '4': new data(4, ['7', '8', '9'], '你好你好你好1'),
            '5': new data(5, ['10', '11', '12'], '你好你好你好11')
        };
        // = {
        //     id: 3,
        //     pics: ['hello', 'world', 'there'],
        //     words: '你好你好你好'
        // }
        return datas;
    }

    componentDidMount() {
        // console.log(this.props.match.params)
       
        // const { id } = this.state;
        // this.setState({
        //     name: this.name[id],
        //     pics: datas[id].pics,
        //     words: datas[id].words
        // });
        const datas = this.getData();
        const { id } = this.state;
        this.setState({
            name: this.name[id],
            pics: datas[id].pics,
            words: datas[id].words
        });
    }

    render() {
       
        //console.log(this.state.pics);
        return (
            <div className="info">
                <div className="carousel" >
                    <Carousel autoplay>
                        {
                            this.state.pics.map((item, index) => (<div key={index}>
                                <h3> {item} </h3>
                            </div>))
                        }
                        {/* <div>
                            <h3>pic1</h3>
                        </div>
                        <div>
                            <h3>pic2</h3>
                        </div>
                        <div>
                            <h3>pic3</h3>
                        </div> */}
                    </Carousel>
                </div>
                <div className="titleInfo">
                    <h1>{this.state.name}:</h1>
                    {/* <p className="words">意存笔先，画尽意在。——唐·张彦远</p> */}
                    <p className="words">{this.state.words}</p>
                </div>
            </div>
        )
    }
}
export default info