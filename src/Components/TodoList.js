import React from "react";
import Todo from './Todo'
const TodoList = ({todos ,setTodos , filteredtodos}) => {
    
  return (
    <div className="todo-container">
      <ul className="todo-list">

        {filteredtodos.map((todo) => (
            <Todo text={todo.text} key= {todo.id} todo={todo} todos={todos} setTodos={setTodos}/>
        ))}
           
      </ul>
    </div>
  );
};

export default TodoList;
