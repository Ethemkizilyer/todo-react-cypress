import React from 'react'
import { useState} from 'react'

const Form = ({inputText,setInputText,todos,setTodos,setStatus,filteredHandler}) => {
  const [alertWarning, setAlertWarning] = useState()
  const [alertSuccess, setAlertSuccess] = useState()

const inputTextHandler =(e)=> {
    setInputText(e.target.value);
    // console.log(e.target.value);
}

const submitTodoHandler = (e) => {
  e.preventDefault();
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
  setStatus(e.target.value)
  
}



  return (
    <form>
      <div className="search">
        <input
          value={inputText}
          type="text"
          className="todo-input"
          placeholder="Add..."
          onChange={inputTextHandler}
        />
        <button
          className="todo-button"
          type="submit"
          onClick={submitTodoHandler}
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
          <div className="alert-success ert">
            <div>Ekleme başarılı.</div>
          </div>
        ) }
        {alertWarning && 
        <div className="alert-warning ert">
            <div>Input alanı boş geçilemez!</div>
          </div>}
      </div>
    </form>
  );
}

export default Form