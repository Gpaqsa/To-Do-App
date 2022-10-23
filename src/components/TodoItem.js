import React from 'react'
import { RiCloseCircleLine} from "react-icons/ri"
import {BiCheckCircle} from "react-icons/bi"

const TodoItem  = ({todo, removeTodo, completedTodo}) => {
  return (
    <div className={todo.completed ? "todo-item completed" : "todo-item"}>
        {todo.text}
        <div  className='icons-container'>
          <RiCloseCircleLine  className="icon" onClick={()=> removeTodo(todo.id)}/>
          <BiCheckCircle className='check-icon' onClick={()=> completedTodo(todo.id)}/>
        </div>
    </div>
  )
}

export default TodoItem
