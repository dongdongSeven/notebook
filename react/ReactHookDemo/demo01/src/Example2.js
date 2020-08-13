import React, { useState } from 'react';

const isShow = true;

// useState主要解决原来组件的state和setState的问题

function Example2() {
    const [age, setAge] = useState(18)
    // if (isShow) { // useState不能有条件设置的，因为他是根据顺序来记住变量的
    //     const [sex, setSex] = useState('男')
    // }
    const [sex, setSex] = useState('男')
    const [work, setWork] = useState('前端工程师')
    return (
        <div>
            <p>age: {age}</p>
            <p>sex: {sex}</p>
            <p>work: {work}</p>
        </div>
    )
}
 
export default Example2;