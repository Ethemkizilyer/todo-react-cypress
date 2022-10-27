import React from 'react'
import Todo from './Todo';

const TodoList = ({todos,setTodos,filteredTodos}) => {
  return (
    
        <div className="todo-container">
    <ul className="todo-list">
      {filteredTodos.map((todo)=>(
        <Todo text={todo.text} todo={todo} todos={todos} key={todo.id} setTodos={setTodos}/>
      ))}
      
      
      
    </ul>
    </div>
   
  );
}

export default TodoList