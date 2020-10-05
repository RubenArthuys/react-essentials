import React from 'react'

export default function Todo({ todoFromTodoList, toggleTodo }) {
 
  function handleTodoClick() {
    toggleTodo(todoFromTodoList.id)
  }

  return (
    <div>
      <label>
        <input type="checkbox" 
          checked={todoFromTodoList.complete} 
          onChange={handleTodoClick} />
        {todoFromTodoList.name}
      </label>
    </div>
  )
}
