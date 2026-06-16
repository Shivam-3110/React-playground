import React from 'react'

const Read = (props) => {
     const todos = props.todos;
  const settodos = props.settodos;
    const rendertodos = todos.map((todo)=>{
        return <li style={{color:todo.isCompleted ?"green":"tomato"}}
        key = {todo.id}>{todo.title}</li> ;
   });
  return (
    
       <>

       <h1 style = {{color:"tomato"}}> pending Todos </h1>
       <ol>{rendertodos}</ol>

       </>
  )
}

export default Read;