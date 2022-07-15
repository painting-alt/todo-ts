import React from 'react'
import {useState} from 'react'

import {nanoid} from 'nanoid'

import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'

import {TodoType} from './components/List/types'

export default function App() {
  const [todos,setTodos] = useState<Array<{id:string,current:any,editing: boolean}>>([])
  const [redoTodos,setRedoTodos] = useState<Array<{id:string,current:any,editing: boolean} >>([])

  //添加todo
  const add = (obj:any)=>{ 
    // console.log(obj)
    const todoObj = {id:nanoid(),current:obj.current.value,editing: false}
    setTodos([...todos,todoObj])

    //点击添加之后，清空输入框内容
    obj.current.value = ''
  }

  const deleteTodo =()=>{
    const newTodos = [...todos];    
      const todo = newTodos.pop() //删除的todo
      setTodos([...newTodos])  //用于设置新的todo列表
      if(todo){ //把删除的todo添加到redoTodos里面
        setRedoTodos([...redoTodos,todo])
      }
  }
  
  const redoTodo = ()=>{
    // console.log("redoTodos: ",redoTodos)
    const todo = redoTodos.pop();
    if(todo){
      setTodos([...todos,todo])
    }
  }

  //对内容进行更新
  const updateContent = (id:string,event:any)=>{
    console.log(event)
    todos.forEach(todo =>{
      if(todo.id === id){
        todo.current = event.target.value
        setTodos([...todos])
      }
    })
  }
  
  //对todo内容进行编辑
  const edit = (todo:TodoType)=>{
    todos.forEach(item => {
      if(item.id === todo.id){
        todo.editing = true;
        setTodos([...todos])
      }
    })
  } 

  // 敲回车之后，让editing状态变为false，即变为文本格式
  const handleKeyUp = (todo:TodoType,event:any) => { 
    if(event.keyCode !== 13) return;
    todos.forEach(item => {
      if(item.id === todo.id){
        todo.editing = false;
        setTodos([...todos])
      }
    })
  }

  return (
    <div>
      <Header add={add}/>
       <List todos={todos} edit={edit} updateContent={updateContent} handleKeyUp={handleKeyUp}/>
      <Footer deleteTodo={deleteTodo} redoTodo={redoTodo}/> 
    </div>
  )
}

