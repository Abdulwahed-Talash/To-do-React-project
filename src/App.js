import React, { useState, useEffect } from "react";
import './App.css'
import Form from "./Components/Form";
import TodoList from "./Components/TodoList";

export default function App() {
  // state stuff
  const [inputText , setInputText] = useState("");
  const [todos , setTodos] = useState([]);
  const [status, setStatus] = useState('All');
  const [filteredtodos, setFilteredTodos] = useState([]);
  // use Effects 
  useEffect(() => {
    getLocalStorage()
    },[]);

  useEffect(()=>{
    setLocalStorage();
    filterHandler();
  },[todos,status]);

  
  // Function
  const filterHandler = () =>{
    switch(status){
      case 'completed': setFilteredTodos(todos.filter( todo => todo.completed === true ));
      break;
      case 'uncompleted': setFilteredTodos(todos.filter( todo => todo.completed === false ));
      break;
      default: setFilteredTodos(todos)
    }
  }
  // local storage here
  const setLocalStorage = ()=>{
    localStorage.setItem("todos" ,JSON.stringify(todos) )
  }

  const getLocalStorage = () =>{
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos",JSON.stringify([]))
    } else {
      let todoLocal = JSON.parse(localStorage.getItem("todos"));
      setTodos(todoLocal)
    }
  } 
  return <div className='App'>{/* write code here */}
  <header>
      <h1>Ed's Todo List</h1>
  </header>
  <Form inputText={inputText} setInputText={setInputText} todos={todos} setTodos={setTodos} 
        setStatus={setStatus} 
/>
  <TodoList todos={todos} setTodos={setTodos}  filteredtodos={filteredtodos}/>
  </div>;
}
