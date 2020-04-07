import React, { Component } from 'react';
import { connect } from 'react-redux'

const TodoList = (props) => {
    let {inputValue, inputChange, clickBtn, list, deleteItem} = props;
    return ( 
        <div>
            <div>
                <input
                    value={inputValue}
                    onChange={inputChange}
                />
                <button onClick={clickBtn}>增加</button>
            </div>
            <ul>
                {
                    list.map((item, index) => {
                        return (
                            <li key={index} onClick={() => deleteItem(index)}>{item}</li>
                        )
                    })
                }
            </ul>
        </div>
    );
}

// class TodoList extends Component {
//     render() { 
//         let {inputValue, inputChange, clickBtn, list, deleteItem} = this.props;
//         return ( 
//             <div>
//                 <div>
//                     <input
//                         value={inputValue}
//                         onChange={inputChange}
//                     />
//                     <button onClick={clickBtn}>增加</button>
//                 </div>
//                 <ul>
//                     {
//                         list.map((item, index) => {
//                             return (
//                                 <li key={index} onClick={() => deleteItem(index)}>{item}</li>
//                             )
//                         })
//                     }
//                 </ul>
//             </div>
//          );
//     }
// }

const stateToProps = (state) => ({
    inputValue: state.inputValue,
    list: state.list
})

const dispatchToProps = (dispatch) => ({
    inputChange(e) {
        const action = {
            type: 'input_change',
            value: e.target.value
        }
        dispatch(action)
    },
    clickBtn() {
        const action = {
            type: 'add_item'
        }
        dispatch(action)
    },
    deleteItem(index) {
        const action = {
            type: 'delete_item',
            index
        }
        dispatch(action)
    }
})
 
export default connect(stateToProps, dispatchToProps)(TodoList);