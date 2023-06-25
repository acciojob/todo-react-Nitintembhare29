import React from "react";

const TodoList = (props)=>{
     
    return(
        <ul className="list-div">
            <li className="list-item">
                {props.item}
                <span
                onClick={()=>props.deleteitem(props.index)}><button>Delete</button></span>
            </li>
        </ul>

    )
}
export default TodoList