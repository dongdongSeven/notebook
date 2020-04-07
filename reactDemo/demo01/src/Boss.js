import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group'

/**
 * Transition
 * CSSTransition
 * TransitionGroup
 */

class Boss extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            isShow: true
         }
         this.toggle = this.toggle.bind(this)
    }
    render() { 
        return ( 
            <div>
                <CSSTransition
                    in={this.state.isShow}
                    timeout={2000}
                    classNames="boss-text"
                    unmountOnExit
                >
                    <div>Boss级任务-孙悟空</div>
                </CSSTransition>
                <div><button onClick={this.toggle}>召唤boss</button></div>
            </div>
         );
    }
    toggle() {
        this.setState({
            isShow: !this.state.isShow
        })
    }
}
 
export default Boss;