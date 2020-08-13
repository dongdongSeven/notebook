import React, { useReducer } from 'react';

// useReduce类似于Redux

function ReducerDemo() {
    let [count, dispatch] = useReducer((state, action) => {
        switch (action) {
            case 'add':
                return state + 1
            case 'sub':
                return state - 1
            default:
                return state
        }
    }, 0)
    return (
        <div>
            <p>现在的分数是：{count}</p>
            <button onClick={() => dispatch('add')}>increment</button>
            <button onClick={() => dispatch('sub')}>decrement</button>
        </div>
    )
}

export default ReducerDemo