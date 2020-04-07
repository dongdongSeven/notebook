import React from 'react'
import { Route, Link } from 'react-router-dom'
import Money from './workPlace/Money'
import GetUp from './workPlace/GetUp'

function Work() {
    return (
        <div>
            <div className="topNav">
                <ul>
                    <li>
                        <Link to="/work/money/">程序员加薪攻略</Link>
                    </li>
                    <li>
                        <Link to="/work/getup/">程序员早起秘籍</Link>
                    </li>
                </ul>
            </div>
            <div className="videoContent">
                <div><h3>职场软技能</h3></div>
                <Route path="/work/money/" component={Money} />
                <Route path="/work/getup/" component={GetUp} />
            </div>
        </div>
    )
}

export default Work