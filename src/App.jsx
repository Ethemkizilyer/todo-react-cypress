import Form from './components/Form'
import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';
import TodoList from './components/TodoList';


function App() {
  const [inputText,setInputText]= useState("");
  const [todos, setTodos] = useState([])
  const [status, setStatus] = useState("all")
const [filteredTodos,setFilteredTodos]= useState([])

useEffect(()=>  {

  getLocalTodos()
  
},[])

useEffect(()=>{
filterHandler(todos)
  saveLocalTdos();
},[todos,status])


const filterHandler = ()=> {
  switch (status){
    case "completed":
      setFilteredTodos(todos.filter((todo)=> todo.completed ===true))
      break
    case "uncompleted":
      setFilteredTodos(todos.filter((todo)=> todo.completed ===false))
      break
    default:
      setFilteredTodos(todos)
      break;
  }
}

console.log(filteredTodos)


const saveLocalTdos = () =>{
  localStorage.setItem("todos",JSON.stringify(todos))
}

const getLocalTodos = ()=> {
  if(localStorage.getItem("todos") === null){
    localStorage.setItem("todos",JSON.stringify([]))
  }else{
    setTodos(JSON.parse(localStorage.getItem("todos")))
  }
}

  return (
   
        <div className="App">
          <header>
            <h1>MY TODO LIST</h1>
          </header>
          <Form
            inputText={inputText}
            setInputText={setInputText}
            todos={todos}
            setTodos={setTodos}
            setStatus={setStatus}
            filterHandler={filterHandler}
          />
          <TodoList
            todos={todos}
            setTodos={setTodos}
            filteredTodos={filteredTodos}
          />
        </div>
    
  );
}

export default App;












/* 

  const [olum,setolum]=useState(false)
  const [göster,setgöster]=useState("ayııııı")


  const ethem =(e)=>{
    setInputText(e.target.value)
console.log(e.target.value);
  }
  const ethe =(e,value)=>{
if(e.target.value == value)
{e.target.id = "mamut";
e.target.value="göster"} 
else{(e.target.id = "kazım");
} 

  }

***********************
<p style={{ border: "1px solid white", height: "2rem", color: "white" }}>
        {inputText}
      </p>
      <button value={"ert"} onMouseMove={ethem}>
        Ethem
      </button>
      <div>
        <p
          style={{ border: "1px solid white", height: "2rem", color: "white" }}
        >
          {inputText}
        </p>
        <button value={"namus"} id="asd" onMouseMove={ethem}>
          KIZILYER
        </button>
        <div>
          <p
            style={{
              border: "1px solid white",
              height: "2rem",
              color: "white",
            }}
            onMouseMove={(e) => {
              ethe(e, e.target.value);
            }}
          >
            ilk
          </p>
          <p
            id="mazlum"
            style={{
              border: "1px solid white",
              height: "2rem",
              color: "white",
            }}
          >
            bakarlar mı
          </p>
        </div>
        <div>
          <p
            style={{
              border: "1px solid white",
              height: "2rem",
              color: "white",
            }}
            onMouseMove={(e) => {
              ethe(e, e.target.value);
            }}
          >
            ikici
          </p>
          <p
            id="mazlum"
            style={{
              border: "1px solid white",
              height: "2rem",
              color: "white",
            }}
          >
            bakarlar
          </p>
        </div>
      </div>
*/