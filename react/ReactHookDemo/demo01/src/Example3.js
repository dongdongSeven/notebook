import React, { useState, useEffect } from 'react';

// useEffect主要解决原来组件生命周期的问题

function Example3() {
    const [count, setCount] = useState(0)
    useEffect(() => { // 用于取代生命周期函数，但是它是异步的不能实时获取最新变化，比如窗口大小变化
        console.log(`useEffect => ${count}`)
    })
    return (
        <div>
            <p>you click {count}</p>
            <button onClick={() => setCount(count + 1)}>click me</button>
        </div>
    )
}

// class Example3 extends Component {
//     constructor(props) {
//         super(props);
//         this.state = { count: 0 }
//     }
//     componentDidMount(){
//         console.log(`componentDidMount => ${this.state.count}`)
//     }
//     componentDidUpdate() {
//         console.log(`componentDidUpdate => ${this.state.count}`)
//     }
//     render() { 
//         return ( 
//             <div>
//                 <p>you click {this.state.count}</p>
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
 
export default Example3;