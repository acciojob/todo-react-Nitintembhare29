import React from "react";

const TodoList = (props)=>{
     
    return(
        <li className="list-div">
            <div className="list-item">
                <div>{props.item}</div>
                <div
                onClick={()=>props.deleteitem(props.index)}><button>Delete</button></div>
            </div>
        </li>

    )
}
export default TodoList