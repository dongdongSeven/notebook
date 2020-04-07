import React, { Component } from 'react'
import PropTypes from 'prop-types'

class XiaojiejieIten extends Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this) // 建议在constructor内绑定this
    }
    // 组件第一次存在于dom中，函数是不会被执行
    // 如果已经存在在于DOM中，函数才会被执行
    // componentWillReceiveProps() {
    //     console.log('child - componentWillReceiveProps')
    // }
    // componentWillUnmount() {
    //     console.log('child - componentWillUnmount')
    // }
    shouldComponentUpdate(nextProps, nextState) {
        if (nextProps.content !== this.props.content) {
            return true;
        } else {
            return false;
        }
    }
    render() {
        console.log('child render')
        return (
            <li onClick={this.handleClick}>
                {this.props.avname}为你服务-{this.props.content}
            </li>
        );
    }

    handleClick() {
        // console.log(this.props.index)
        // this.props.list = []  // 数据单向流，不能这样改父组件值
        this.props.deleteItem(this.props.index)
    }

}

XiaojiejieIten.propTypes = { // 校验属性
    avname: PropTypes.string.isRequired,
    content: PropTypes.string,
    index: PropTypes.number,
    deleteItem: PropTypes.func
}

XiaojiejieIten.defaultProps = { // 默认值
    avname: '松岛枫'
}
 
export default XiaojiejieIten;