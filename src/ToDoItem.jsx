import React,{useState} from "react";

function ToDoItem(props){

    const [isDone ,SetisDone]=useState(false);

    function handleClick(){
        SetisDone(prevValue=>{
            return !prevValue;
        })

    }
        return(
            <div onClick={handleClick}>
                <li style={{textDecoration: isDone ? "line-through" :"none"}}>{props.text}</li>
            </div>
        );
}
export default ToDoItem;