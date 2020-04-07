import React, {Component,Fragment} from 'react'
import './style.css'
import axios from 'axios'
import XiaoJieJieItem from './XiaojiejieItem'
import Boss from './Boss'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

class XiaoJieJie extends Component {
    // 生命周期
    constructor(props) {
        super(props)
        this.state = {
            inputValue: 'seven',
            list: []
        }
    }
    // componentWillMount() {
    //     console.log('componentWillMount----组件将要挂载到页面的时刻')
    // }
    componentDidMount() {
        console.log('componentDidMount----组件挂载完成的时刻')
        axios.post('https://web-api.juejin.im/v3/web/wbbr/bgeda')
        // axios.post('https://www.baidu.com/')
            .then(res => {
                console.log(`axios 获取数据成功：${JSON.stringify(res)}`)
                this.setState({
                    list: [
                        '基础按摩',
                        '精油推背'
                    ]
                })
            })
            .catch(e => console.log(`axios 获取数据失败： ${JSON.stringify(e)}`))
    }
    // shouldComponentUpdate() {
    //     console.log('1-shouldComponentUpdate')
    //     return true
    //     // return false

    // }
    // componentWillUpdate() {
    //     console.log('2-componentWillUpdate')
    // }
    // componentDidUpdate() {
    //     console.log('4-componentDidUpdate')
    // }
    // componentWillReceiveProps() {
    //     console.log('componentWillReceiveProps')
    // }
    render() {
        // console.log('3-render----组件挂载中')
        return (
            <Fragment>
                {/**注释写法 */}
                <div>
                    <label htmlFor="seven">label：</label>
                    <input 
                        id="seven"
                        className="input"
                        value={this.state.inputValue}
                        onChange={this.inputChange.bind(this)}
                        ref={input => (this.input = input)}
                    />
                    <button onClick={this.addList.bind(this)}>增加服务</button>
                </div>
                <ul ref={ul => (this.ul = ul)}>
                    <TransitionGroup>
                        {
                            this.state.list.map((item, index) => (
                                <CSSTransition
                                    timeout={2000}
                                    classNames="boss-text"
                                    appear={true}
                                    unmountOnExit
                                    key={index+item}
                                >
                                    <XiaoJieJieItem
                                        /* avname='波多野结衣' */
                                        key={index}
                                        content={item}
                                        index={index}
                                        list={this.state.list}
                                        deleteItem={this.deleteItem.bind(this)}/>
                                        {
                                            /*
                                                <li key={index+item}
                                                    onClick={this.deleteItem.bind(this, index)}
                                                    dangerouslySetInnerHTML={{__html: item}}>
                                                </li>
                                            */
                                        }
                               </CSSTransition>
                            ))
                        }
                    </TransitionGroup>
                </ul>
                <Boss />
            </Fragment>
        )
    }
    inputChange(e) {
        // console.log(e.target.value)
        // console.log(this)
        // this.state.inputValue = e.target.value
        this.setState({
            // inputValue: e.target.value
            inputValue: this.input.value // ref的用法
        })
    }
    addList(e) {
        this.setState({ // 异步
            list: [...this.state.list, this.state.inputValue],
            inputValue: ''
        }, () => { // 回调
            console.log(this.ul.querySelectorAll('li').length)
        })
        
    }
    deleteItem(index) {
        // console.log(index)
        const list = [...this.state.list]
        list.splice(index, 1)
        this.setState({
            list
        })
    }
}

export default XiaoJieJie;