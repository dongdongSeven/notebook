import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

function Index() {
    useEffect(() => {
        console.log(`老弟，你来啦！`)
        return () => { // 通过return来实现componentWillUnmount生命周期函数
            console.log(`老弟，你走啦！`)
        }
    }, []) // useEffect第二个参数数组内填状态参数，表示只有这些状态变化了才触发，return那个函数
    return (
        <h2>我是首页</h2>
    )
}

function List() {
    return (
        <h2>我是列表页面</h2>
    )
}

// Hook方式对比传统继承Component的方式
function Example() {
    let [count, setCount] = useState(0);
    useEffect(() => {
        console.log(`count: ${count}`)
        return () => {
            console.log(`Example useEffect`)
        }
    }, [count])
    return (
        <div>
            <p>you clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>click me</button>
            <Router>
                <ul>
                    <li><Link to="/">首页</Link></li>
                    <li><Link to="/list/">列表</Link></li>
                </ul>
                <Route path="/" exact component={Index} />
                <Route path="/list/" component={List} />
            </Router>
        </div>
    )
}

// class Example extends Component {
//     constructor(props) {
//         super(props);
//         this.state = { count: 0 }
//     }
//     render() { 
//         return ( 
//             <div>
//                 <p>you clicked {this.state.count} times</p>
//                 <button onClick={this.addCount.bind(this)}>click me</button>
//             </div>
//          );
//     }
//     addCount() {
//         this.setState({
//             count: this.state.count + 1
//         })
//     }
// }
 
export default Example;