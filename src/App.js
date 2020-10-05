import React, { useState, useRef, useEffect } from 'react';
import TodoList from './TodoList'
import uuidv4 from 'uuid/v4'


function App() {
  //destructured variables, which are = to result of useState
  const [todoVariable, setTodos] = useState([])
  //get what's written in input with useRef Hook, to send to the function below to add a 'todo'
  const todoNameRef = useRef()
  const LOCAL_STORAGE_KEY = 'todoApp.todoVariable'

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if(storedTodos) setTodos(storedTodos)
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todoVariable))
  }, [todoVariable])

  function handleAddTodo(e) {
    const name = todoNameRef.current.value
    if (name === '') return
    setTodos(prevTodos => {
      //spread operator for all the previous todos, + a new Todo
      //uuid library to create random ids with import above
      return [...prevTodos, { id: uuidv4(), name: name, complete: false}]
    })    
    todoNameRef.current.value = null
  }
  
  return (
    <>
    <TodoList todoProp={todoVariable} />
    <input ref={todoNameRef} type="text" />
    <button onClick={handleAddTodo} >Add Todo</button>
    <button>Clear Completed</button>
    <div>0 left to do</div>
    </>
  )
}

export default App;
