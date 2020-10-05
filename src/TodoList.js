import React from 'react'
import Todo from './Todo'

export default function TodoList({ todoProp, toggleTodo }) {
  return (
 
    todoProp.map(todo => {
      return <Todo key={todo.id} toggleTodo={toggleTodo} todo={todo} />
    })
  )
}
