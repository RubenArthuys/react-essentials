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
    //to load our todos, only once ! So empty array will load once
    //parse will transform data into an array, for map in TodoList to work
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if(storedTodos) setTodos(storedTodos)
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todoVariable))
  //to know when to call this function, we pass an array of props
  //this array becomes a dependency, so anytime sthg in this array changes
  //the function gets executed
  }, [todoVariable])

  function toggleTodo(id) {
    const newTodos = [...todoVariable]
    const todoChange = newTodos.find(todoChange => todoChange.id === id )
    todoChange.complete = !todoChange.complete
    setTodos(newTodos)
  }

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

  function handleClearTodo() {
    const newTodoAfterDelete = todoVariable.filter(todoDelete => !todoDelete.complete)
    setTodos(newTodoAfterDelete)
  }
  
  return (
    <>
    <TodoList todoProp={todoVariable} toggleTodo={toggleTodo} />
    <input ref={todoNameRef} type="text" />
    <button onClick={handleAddTodo} >Add Todo</button>
    <button onClick={handleClearTodo} >Clear Completed</button>
    <div>{todoVariable.filter(todoChangeNew => !todoChangeNew.complete).length} left to do</div>
    </>
  )
}

export default App;
