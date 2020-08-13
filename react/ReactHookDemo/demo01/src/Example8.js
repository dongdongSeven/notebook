import React, { useRef, useState, useEffect } from 'react';

// useRef的两个特性，1、获取DOM；2、保存值

function Example8() {
    const inputEl = useRef(null); // 获取DOM
    const onBtnClick = () => {
        inputEl.current.value = 'seven'
    }
    const [text, setText] = useState('seven')

    const textRef = useRef() // 保存值

    useEffect(() => {
        textRef.current = text;
        console.log(`textRef.current: ${textRef.current}`)
    })

    return (
        <>
            <input ref={inputEl} />
            <button onClick={onBtnClick}>在input上展示值</button>
            <br/>
            <br/>
            <input value={text} onChange={e => setText(e.target.value)} />
        </>
    )
}

export default Example8