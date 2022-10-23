import React from 'react'
import { useState } from 'react';

const TodoForm = ({addTodo}) => {
  const [input, setInput] = useState("");

  const handleTaskInputChange = (e) => {
    setInput(e.target.value)
    console.log(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    addTodo(input)
    setInput("")
  }

  return (
    <div>
        <form className='form-todo' onSubmit={handleSubmit}>
            <input 
                value={input}
                className='input-todo'
                placeholder='Add a todo'
                onChange={handleTaskInputChange}
            />
            <button  type='submit' className='todo-button'>Submit</button>
        </form>
    </div>
  )
}

export default TodoForm
