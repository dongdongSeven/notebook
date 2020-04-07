import React, { Component } from 'react';
class List extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
    return ( <h2>page-list -> {this.state.id}</h2> );
    }
    componentDidMount() {
        this.setState({
            id: this.props.match.params.id
        })
    }
}
 
export default List;