import React from 'react'
const Read = (props) => {
     const todos = props.todos;
  const settodos = props.settodos;
  const deleteHandler = (id) => {
  const filtredtodo =  todos.filter((todo)=> todo.id != id);
  settodos(filtredtodo);
  };  
    const rendertodos = todos.map((todo)=>{
        return <li className='mb-4 flex justify-between items-center p-3 bg-gray-700 rounded'
        key = {todo.id}>
          <span className=' text-xl font-thin'>{todo.title}</span> | <button className='text-sm font-thin text-red-500' onClick={()=>deleteHandler(todo.id)}> DELETE </button></li> ;
   });
  return (
    
       <div className='w-[40%] p-10'>

       <h1  className= "mb-10 text-5xl text-white font-thin">
          <span className='text-orange-400'> pending</span>  Todos </h1>
       <ol>{rendertodos}</ol>

       </div>
  )
}

export default Read;

