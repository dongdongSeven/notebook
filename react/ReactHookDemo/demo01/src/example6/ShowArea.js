import React, { useContext } from 'react';
import { ColorContext } from './Color'

function ShowArea() {
    const {color} = useContext(ColorContext)
    return (
        <div>
            <p style={{color: color}}>颜色字体为{color}</p>
        </div>
    )
}

export default ShowArea