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
    < div className="border w-[60%] p-10 mx-auto">
    <h1 className=" mb-10 text-5xl text-white font-thin">
        Set <span className="text-red-400"> Reminders </span>for <br></br>tasks
      </h1>
       <form onSubmit ={submitHandler}>
        < input className=" p-2 border-b w-full text-2xl font-thin outline-0"
        onChange={(e)=> settitle(e.target.value)} value={title} type = 'text' placeholder="title"/>
        
        <br/>
        <button className="mt-5 text-xl px-10 py-2 border rounded"> Create Todo </button>
       </form> 
       </div>
  )
}

export default Create