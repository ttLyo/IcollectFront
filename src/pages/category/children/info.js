import React, { Component } from "react"
import { Carousel } from 'antd';
import pic from "../../images/123.jpeg"
import axios from "../../../util/axios"
import url from "../../../util/url"
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
            pics: Array(3).fill({}),
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
            '1': new data(1, [pic, 'world', 'there'], '意存笔先，画尽意在。——唐·张彦远'),
            '2': new data(2, ['1', '2', '3'], '镜头代表着眼睛，但它代表着两种眼睛，一种是观众的眼睛，一种是剧中人的眼睛。——（中国作家）夏衍'),
            '3': new data(3, ['4', '5', '6'], '最精美的宝石，受匠人琢磨的时间最长。最贵重的雕刻，受凿的打击最多。'),
            '4': new data(4, ['7', '8', '9'], '王者以民为天，而民以食为天。——《汉书·郦食其传》'),
            '5': new data(5, ['10', '11', '12'], '是文学唤醒我们注意人类生活的准则，平息大火，抑制邪恶。——圣皮埃尔')
        };
        // = {
        //     id: 3,
        //     pics: ['hello', 'world', 'there'],
        //     words: '你好你好你好'
        // }
        axios.get("project/getByCategory?category="+this.props.linkId).then(res=>{
            console.log(res)
            if(res.data.code==200){
                let pics=[]
                res.data.data.map(item=>{
                    pics.push(url+"image/get/project/"+item.pid+"/"+item.image)
                })
                this.setState({pics:pics.slice(0,3)})
            }
        })
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
        console.log(datas)
        const { id } = this.state;
        this.setState({
            name: this.name[id],
            pics: datas[id].pics,
            words: datas[id].words
        });
    }

    render() {
        return (
            <div className="info">
                <div className="carousel" >
                    <Carousel autoplay>
                        {
                            this.state.pics.map((item, index) => (<div key={index}>
                                <img src={item} className="info_pic"/>
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