import React , {useState} from "react";
import ToDoItem from "./ToDoItem";
import "./App.css";

function App() {

  const [text,settext]=useState("");

  const[items, setitems]=useState([]);
  function changeText(event){
    settext(event.target.value)
  }

  function AddItem(){
    setitems((prevItems=>{
      return [...prevItems,text];
    }
  ));
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={changeText} type="text" value={text} />
        <button onClick={AddItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
         {items.map((todoitem)=> {
          return (
            <ToDoItem 
            text={todoitem} />
          )
          }
         )}
        </ul>
      </div>
    </div>
  );
}

export default App;
