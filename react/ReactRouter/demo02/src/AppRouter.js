import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Index from './Pages/Index'
import Video from './Pages/Video'
import Work from './Pages/Work'

function AppRouter() {
    const routerConfig = [ // 模拟后台请求获取路由配置
        { path: '/', title: '博客首页', exact: true, component: Index },
        { path: '/video/', title: '视频教程', exact: false, component: Video },
        { path: '/work/', title: '职场技能', exact: false, component: Work },
    ]
    return (
        <Router>
            <div className="mainDiv">
                <div className="leftNav">
                    <h3>一级导航</h3>
                    <ul>
                        {
                            routerConfig.map((item, index) => {
                                return (
                                    <li key={index}>
                                        <Link to={item.path}>{item.title}</Link>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                <div className="rightMain">
                    {
                        routerConfig.map((item, index) => {
                            return (
                                <Route key={index} path={item.path} exact={item.exact} component={item.component} />
                            )
                        })
                    }
                </div>
            </div>
        </Router>
    )
}

export default AppRouter