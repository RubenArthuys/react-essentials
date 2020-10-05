import React from 'react'
import Todo from './Todo'

export default function TodoList({ todoProp, toggleTodo }) {
  return (
 
    todoProp.map(todoFromTodoList => {
      return <Todo key={todoFromTodoList.id} toggleTodo={toggleTodo} todoFromTodoList={todoFromTodoList} />
    })
  )
}
