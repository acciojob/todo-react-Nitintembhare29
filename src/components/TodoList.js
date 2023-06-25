import React from "react";

const TodoList = (props)=>{
     
    return(
        <li className="list-div">
            <ul className="list-item">
                <div>{props.item}</div>
                <div
                onClick={()=>props.deleteitem(props.index)}><button>Delete</button></div>
            </ul>
        </li>

    )
}
export default TodoList