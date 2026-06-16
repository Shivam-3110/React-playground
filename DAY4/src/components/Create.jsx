import { useState } from "react"; 
import { nanoid } from "nanoid";

const Create = (props) => {
  const todos = props.todos;
  const settodos = props.settodos;
   const[title,settitle]=useState("");
   const submitHandler = (e) =>{
       e.preventDefault();
  
       const newTodo = {
          id : nanoid(),
          title:title,
          isCompleted:false,
       }
       console.log(newTodo);
     
     let copytodos = [...todos];
      copytodos.push(newTodo);
      settodos(copytodos);
      settitle("");
      }
  return (
    <>
    <h1>
        Create Tasks
      </h1>
       <form onSubmit ={submitHandler}>
        < input onChange={(e)=> settitle(e.target.value)} value={title} type = 'text' placeholder="title"/>
        
        <br/>
        <button> Create Todo </button>
       </form> 
       </>
  )
}

export default Create