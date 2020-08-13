import React, {Component} from 'react'

class App extends Component {
    render() {
        return (
            <ul className="my-list">
                <li>{0?'JSPang.com':'seven'}</li>
                <li>i love react</li>
            </ul>
        )
        // var child1 = React.createElement('li', null, 'JSPang.com')
        // var child2 = React.createElement('li', null, 'i love react')
        // var root = React.createElement('ul', {className: 'my-list'}, child1, child2)
    }
}

export default App;