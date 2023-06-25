
import React,{useState} from "react";

const TodoInput = ({addTask})=>{

    const[task, setTask] = useState("")
     
    return(
        <div className="center-div">
            <p>To-Do List</p>
            <input type="text" placeholder="Enter Task" onChange={(e)=>setTask(e.target.value)} value={task}/>
            <button
               onClick={()=>{addTask(task)}}
               
            >Add Todo</button>
        </div>

    )
}
export default TodoInput