import React from 'react'
import Todo from './Todo'

export default function TodoList({ todoProp }) {
  return (
 
    todoProp.map(todo => {
      return <Todo key={todo.id} todo={todo} />
    })
  )
}
