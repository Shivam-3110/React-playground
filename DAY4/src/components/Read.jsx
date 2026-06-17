import React from 'react'
import "./Read.css";
const Read = (props) => {
     const todos = props.todos;
  const settodos = props.settodos;
  const deleteHandler = (id) => {
  const filtredtodo =  todos.filter((todo)=> todo.id != id);
  settodos(filtredtodo);
  };  
    const rendertodos = todos.map((todo)=>{
        return <li 
        key = {todo.id}>{todo.title} | <span onClick={()=>deleteHandler(todo.id)}> DELETE </span></li> ;
   });
  return (
    
       <>

       <h1 style = {{color:"tomato"}}> pending Todos </h1>
       <ol>{rendertodos}</ol>

       </>
  )
}

export default Read;

