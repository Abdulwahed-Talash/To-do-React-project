import React from "react";

const Form = ({inputText,setInputText,todos,setTodos , setStatus}) => {
    // in this place i write my javascript function 
    const inputTexthandler = (e) =>{
        // console.log(e.target.value);
        setInputText(e.target.value)
    }
    const submitHandler = e =>{
        e.preventDefault();
        setTodos([
            ...todos , {text:inputText , completed:false , id: Math.floor(Math.random() * 1000)}
        ])
        setInputText("");      
    }
    const statusHandler = (e) =>{
        // console.log(e.target.value);
        setStatus(e.target.value)
        
    }
  return (
    <form>
      <input type="text" value={inputText} className="todo-input" onChange={inputTexthandler} />
      <button className="todo-button" type="submit" onClick={submitHandler}>
        <i className="fa fa-plus-square"></i>
      </button>
      <div className="select">
        <select onChange={statusHandler} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
};
export {Form as default}