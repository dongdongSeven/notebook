import React, { useState, useMemo } from 'react';

// useMemo主要解决没有componentShouldUpdate这个生命周期函数的问题，提升性能；也用于缓存状态

function Example7() {
    const [xiaohong, setXiaohong] = useState('小红')
    const [zhilin, setZhilin] = useState('志林')
    return (
        <>
            <button onClick={() => {setXiaohong(+new Date())}}>小红</button>
            <button onClick={() => {setZhilin(+new Date() + '，志林向我们走来过来！')}}>志林</button>
            <ChildComponent name={xiaohong}>{zhilin}</ChildComponent>
        </>
    )
}

function ChildComponent({name, children}) {
    const changeXiaohong = n => {
        console.log(`她来啦，她来啦，${n}向我们走过来啦！`)
        return `${n}，小红向我们走来啦！`
    }
    const actionXiaohong = useMemo(() => changeXiaohong(name), [name]) // 第一参数：不需要重复执行的东西，第二个参数：什么条件改变时，才执行
    return (
        <>
            <div>{actionXiaohong}</div>
            <div>{children}</div>
        </>
    )
}

export default Example7