

import Create from "./components/Create";
import Read   from "./components/Read";

 const App = () => {
   
    
  
   //  settodos([...todos , newtodo ])

   
  return (
    <div className =" text-white flex w-screen h-screen bg-zinc-800 p-10 ">
      <Create />
      <Read/>
    </div>
  )
}

export default App;
