import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom'


class Index extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            list: [
                {cid: 123, title: 'seven的博客--1'},
                {cid: 456, title: 'seven的博客--2'},
                {cid: 789, title: 'seven的博客--3'},
            ]
         }
         this.props.history.push('/home/'); // 推荐函数式重定向
    }
    render() { 
        return (
            <div>
                {/* <Redirect to="/home/" /> 标签重定向 */}
                <h2>seven</h2>
                <ul>
                    {
                        this.state.list.map((item, index) => {
                            return (
                                <li key={index+item}>
                                    <Link to={`/list/${item.cid}`}>{item.title}</Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        );
    }
}
 
export default Index;