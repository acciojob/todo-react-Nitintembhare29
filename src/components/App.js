
import React,{useState} from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import './../styles/App.css';

const App = () => {
  const[list, setList] = useState([]) 
  console.log(list)

  function addTask(task){
    setList([...list, task])
  }
  
  function deleteListItem(key){
    let newListTodo = [...list]
    newListTodo.splice(key,1)
    setList([...newListTodo])
  }

  
  return (
    <div>
        {/* Do not remove the main div */}
        <TodoInput addTask={addTask}/>
        {
          list.map((item, i)=>(
           
              <TodoList key={i} index={i} item={item} deleteitem={deleteListItem}/>
            
          ))
        }
        
    </div>
  )
}

export default App
