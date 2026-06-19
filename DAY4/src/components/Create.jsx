
import { nanoid } from "nanoid";
import{useForm} from "react-hook-form";
import {toast} from "react-toastify";

const Create = (props) => {
  const todos = props.todos;
  const settodos = props.settodos;

  const{register, handleSubmit,reset,formState:{errors}} = useForm();

   const submitHandler = (data) =>{
       console.log(data);
       data.isCompleted= false;
       data.id = nanoid();
       console.log(data);
     
       const copytodos = [...todos];
       copytodos.push(data);
       settodos(copytodos);
       
       toast.success("Todo created!")


       reset();
      };
      
  return (
    < div className="border w-[60%] p-10 mx-auto">
    <h1 className=" mb-10 text-5xl text-white font-thin">
        Set <span className="text-red-400"> Reminders </span>for <br></br>tasks
      </h1>
       <form onSubmit ={ handleSubmit(submitHandler)}>
        < input className=" p-2 border-b w-full text-2xl font-thin outline-0"
             {...register("title", { required: "title can not be empty" })} type="text" placeholder="title" ></input>
         
         <small className="font-thin text-red-400">{errors?.title?.message} </small> 
        <br/>
        <button className="mt-5 text-xl px-10 py-2 border rounded"> Create Todo </button>
       </form> 
       </div>
  )
}

export default Create