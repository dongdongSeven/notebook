import React, { Component, useState, useCallback, useEffect } from 'react';

// 自定义Hook函数，默认使用'use'开头的函数名

function useWinSize() {
    const [size, setSize] = useState({
        width: document.documentElement.clientWidth,
        height: document.documentElement.clientHeight
    })
    // useCallback是用于缓存我们的函数
    const onResize = useCallback(() => {
        setSize({
            width: document.documentElement.clientWidth,
            height: document.documentElement.clientHeight
        })
    }, [])
    useEffect(() => {
        window.addEventListener('resize', onResize)
        return () => {
            window.removeEventListener('resize', onResize)
        }
    }, [])
    return size
}

function Example9() {
    const size = useWinSize()
    return (
        <div>
            页面的size：{size.width} x {size.height}
        </div>
    )
}

export default Example9