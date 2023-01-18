import React from 'react'
import { useState} from 'react'
import { Link } from 'react-router-dom'

const Form = ({inputText,setInputText,todos,setTodos,setStatus,filteredHandler}) => {
  const [alertWarning, setAlertWarning] = useState()
  const [alertSuccess, setAlertSuccess] = useState()
const [filteredTodos, setFilteredTodos] = useState([]);
const inputTextHandler =(e)=> {
    setInputText(e.target.value);
    // console.log(e.target.value);
}

const submitTodoHandler = (event) => {
  event.preventDefault();
  const isEmpty = (str) => !str.trim().length;
  if(isEmpty(inputText)){
    setAlertWarning(true);
    setTimeout(()=> {setAlertWarning(false)},1000)
    

  } else{
setAlertSuccess(true);
setTimeout(() => {
  setAlertSuccess(false);
}, 1000);
  
  
  console.log(inputText);
  setTodos([...todos,{text:inputText,completed:false,id:Math.random()}]);
  console.log(todos);
  setInputText("");}
};
setTimeout(() => {
  submitTodoHandler()
 
}, 3000);

const statusHandler=(e)=> {
  const filterHandler = (status) => {
    switch (status) {
      case "completed":
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };
  setStatus(e.target.value)
  filterHandler(e.target.value);
  
}



  return (
    <>
      <Link to="/cypress" style={{ position: "absolute", padding: "1rem",top:"0",cursor:"pointer",background:"#637435",color:"red",fontSize:"bolder" }}>
        CYPRESS TEST SAYFASI
      </Link>
      <form data-cy="form" onSubmit={submitTodoHandler}>
        <h2>
          <strong data-cy="heading">🎈Todo Add🎈</strong>
        </h2>
        <div className="search">
          <input
            value={inputText}
            type="text"
            className="todo-input"
            placeholder="Add..."
            onChange={inputTextHandler}
            data-cy="yeter"
          />
          <button
            className="todo-button"
            type="submit"
            onClick={(event) => submitTodoHandler(event)}
          >
            <i className="fas fa-plus-circle"></i>
          </button>
        </div>

        <div className="select">
          <select name="todos" className="filter-todo" onChange={statusHandler}>
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
        </div>
        <div className="alert-wrapper">
          {alertSuccess && (
            <div data-cy="asd" className="alert-success ert">
              <div data-cy="suggestion-list">Ekleme başarılı.</div>
            </div>
          )}
          {alertWarning && (
            <div className="alert-warning ert">
              <div>Input alanı boş geçilemez!</div>
            </div>
          )}
        </div>
      </form>
    </>
  );
}

export default Form