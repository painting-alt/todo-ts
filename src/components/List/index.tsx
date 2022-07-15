import React from 'react'

import {ListProps} from './types'



export default function List(props: ListProps) {
  const {todos,edit,updateContent,handleKeyUp} = props;
  
  return (
    <ul>
      {      
         todos.map(todo => (
          todo.editing ? 
          <input type="text" 
          key={todo.id} 
          value={todo.current} 
          onChange={(event)=>{updateContent(todo.id,event)}}
          onKeyUp={(event)=>{handleKeyUp(todo,event)}}
          /> :
          <li key={todo.id} onClick={()=>edit(todo)}>{todo.current}</li>
         )          
        )
      }
    </ul>
  )
}

