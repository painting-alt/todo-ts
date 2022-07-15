import React from 'react'
import {useRef} from 'react'

import {HeaderProps} from './types'

import './index.css'

export default function Header(props: HeaderProps) {
    const myref = useRef<HTMLInputElement>(null)
    const {add} = props
   
    
    return (
        <div className='todo-header'>
            <input type="text" ref={myref}/>
            <button onClick={()=>add(myref)}>Add</button>
        </div>
    )
}
