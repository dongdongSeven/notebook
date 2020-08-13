import React, { useState, createContext, useContext } from 'react';

// createContext/useContext解决父子组件传值的问题

const CountContext = createContext()

function Counter() {
    const count = useContext(CountContext)
    return (
        <div>
            <h2>{count}</h2>
        </div>
    )
}

function Example4() {
    const [count, setCount] = useState(0)
    return (
        <div>
            <p>you clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>click me </button>
            <CountContext.Provider value={count}>
                <Counter />
            </CountContext.Provider>
        </div>
    )
}

export default Example4