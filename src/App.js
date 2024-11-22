
import { useState } from 'react';
import './App.scss';
import { ImAddressBook } from "react-icons/im";

function App() {

  const [todolist,setTodoList]=useState([])

  const[inputValue,setInputValue]=useState("")

  const _handleSubmit =(e)=>{
    e.preventDefault();
    if (inputValue===""){
      alert("Please Enter Project Name")
    }else{
      setTodoList([...todolist ,{text:inputValue, isChecked: false }])
      setInputValue("");
      e.preventDefault();
    }
    console.log(inputValue)
  }
 
  // Handle deleting a todo---------------------------------------------------------------------------------------------------
  const _handleDelete = (index) => {
    const newTodos = [...todolist];
    newTodos.splice(index, 1);
    setTodoList(newTodos);
  };
 // Handle the completion status of a todo-------------------------------------------------------------------------------------------
 const _checkedBox = (index) => {
  const updatedTodos = todolist.map((todo, idx) =>
    idx === index ? { ...todo, isChecked: !todo.isChecked } : todo
  );
  
  setTodoList(updatedTodos);
};
  return (
    <div className="App ">
      <div className='todo_container'>
      <h2 ><ImAddressBook /> My Project List</h2> <hr/>
      <form  onSubmit={_handleSubmit} className='form'> 
        <input type='text' value={inputValue} onChange={(e) => setInputValue(e.target.value)}/> 
        <button type="submit"  onSubmit={_handleSubmit}> Add ToDo </button>
        </form>
        <hr/> 
      <div className='todolist'> 
       
          { todolist.map((todo,index) => (
            <li key={index}  >
              <div>
              <span className='p-2'><input type='checkbox' onClick={() => _checkedBox(index)} /> </span>
              <span style={{textDecoration: todo.isChecked ? 'line-through' : 'none',
                 }}
            >
              {todo.text}
            </span></div>
           <div> <button onClick={() => _handleDelete(index)}>Delete</button></div>
            </li>

          ))}
      
        </div>
        
    </div>
    <div className='ms-5 '>
      <img src='https://cdn-icons-png.flaticon.com/128/3696/3696901.png' alt=''/>
      <h1 className='text-white'>
        Build 
       <span className='text-danger'> To-Do </span><br/> List 
        with React js
      </h1>
    </div>
    </div>
  );
}

export default App;
