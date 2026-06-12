import { useState } from "react";
import { nanoid } from "nanoid";

 const App = () => {
    const [todos, settodos] = useState([
      {id:1,title:"kaam krle bhyee",isCompleted:false},
    ]);
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
   //  settodos([...todos , newtodo ])

   const rendertodos = todos.map((todo)=>{
        return <li key = {todo.id}>{todo.title}</li> ;
   });
  return (
    <div>
      <h1>
        Create Tasks
      </h1>
       <form onSubmit ={submitHandler}>
        < input onChange={(e)=> settitle(e.target.value)} value={title} type = 'text' placeholder="title"/>
        
        <br/>
        <button> Create Todo </button>
       </form> 
       <hr/>
       <h1> pending Todos </h1>
       <ol>{rendertodos}</ol>
    </div>
  )
}

export default App;
