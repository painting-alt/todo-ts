import React from 'react'

import {FooterProps} from './types'

import './index.css'

export default function Footer(props: FooterProps) {
    const {deleteTodo,redoTodo} = props
    return (
        <div>
            {/* 点击undo开始从最后todo删除 - 尾删 */}
            <button onClick={()=>deleteTodo()}>undo</button>
            {/* 点击redo，开始从最开始加入的todo重新加入进去 */}
            <button onClick={()=>{redoTodo()}}>redo</button>
        </div>
    )
}
