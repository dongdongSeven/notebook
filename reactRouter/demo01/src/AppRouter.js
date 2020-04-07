import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Index from './Pages/Index'
import List from './Pages/List'
import Home from './Pages/Home'

// function Index() { // 这是无状态组件写法
//     return (<h2>seven</h2>)
// }

// function List() { // 这是无状态组件写法
//     return (
//         <h2>list-page</h2>
//     )
// }

function AppRouter() {
    return (
        <Router>
            <ul>
                <li>
                    <Link to="/">首页</Link>
                </li>
                <li>
                    <Link to="/list/123">列表</Link>
                </li>
            </ul>
            <Route path="/" exact component={Index} />
            <Route path="/home/" component={Home} />
            <Route path="/list/:id" component={List} />
        </Router>
    )
}

export default AppRouter