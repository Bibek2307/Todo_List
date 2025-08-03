import React from 'react'
import { useState } from 'react'
import "../style.css"
const Todolist = () => {

    const[todos,setTodos]= useState([])
    const[input,setInput]=useState('')

    const handlesubmit=()=>{
        setTodos((todos)=>{
           return todos.concat({
            text: input,
            id: Math.floor(Math.random() * 100)
        })
        })
    
        setInput("") 
    }

    const removeTodo=(id)=>{
        setTodos(todos=> todos.filter(t=> t.id!=id))
    }

  return (
    <div className='container'>
        <input className='inputbox' type="text" value={input} placeholder='Enter your Todo' onChange={e=>setInput(e.target.value)} />
        <button className='inputsubmit' onClick={handlesubmit}>
            Submit
        </button>
        <ul className='todolist'>
            {todos.map(({text,id})=>(
                <li className='todoitem' key={id}>
                <span className='txt' >{text}</span>
                <button className='textbtn' onClick={()=>removeTodo(id)}>x</button>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default Todolist
