import React from "react";

const TodoList = (props)=>{
     
    return(
        <ul className="list-div">
            <li className="list-item">
                <div>{props.item}</div>
                <div
                onClick={()=>props.deleteitem(props.index)}><button>Delete</button></div>
            </li>
        </ul>

    )
}
export default TodoList