import { useState } from "react";
import Creat from "./components/Creat";
import Read from "./components/Read";

function App() {
  const [todos, setTodos] = useState([
    { tasks: "Data Structure and Algorithm", isComplited: false },
    { tasks: "Artificial Intelligence", isComplited: true },
  ]);

  return (
    <div className="bg-gray-900 min-h-screen w-full text-white p-4 sm:p-6 md:p-10">
      <h2 className="text-sm sm:text-base md:text-lg uppercase bg-gray-700 inline-flex items-center gap-2 p-2 sm:p-3 rounded-full shadow-lg">
        <span>Todos Reminder</span>
        <span>🌍</span>
      </h2>
      <div className="flex flex-col md:flex-row justify-around mt-5 gap-5 md:gap-10">
        <Creat todos={todos} setTodos={setTodos} />
        <Read todos={todos} />
      </div>
    </div>
  );
}

export default App;