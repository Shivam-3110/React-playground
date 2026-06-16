import { useState } from "react";

import Create from "./components/Create";
import Read   from "./components/Read";

 const App = () => {
    const [todos, settodos] = useState([
      {id:1,title:"kaam krle bhyee",isCompleted:false},
    ]);
    
  
   //  settodos([...todos , newtodo ])

   
  return (
    <div>
      <Create todos={todos} settodos={settodos}/>
      <Read todos={todos} settodos={settodos}/>
    </div>
  )
}

export default App;
