import React, { useState } from "react";
import Creat from "./components/Creat";
import Read from "./components/Read";

function App() {
  
  const [todos, setTodos] = useState(
   [
    {name:'Improvements added',age:46}
   ]
  )

  return (
    <div className="h-screen w-screen bg-gray-900 text-white overflow-hidden">
      <h2 className="text-2xl p-5 font-sans ">Task Reminder</h2>
      <div className="flex justify-around">
        <Creat todos={todos} setTodos={setTodos}/>
        <div>
          <p>Pending Task</p>
          <Read todos={todos} setTodos={setTodos}/>
        </div>
      </div>
    </div>
  );
}

export default App;
