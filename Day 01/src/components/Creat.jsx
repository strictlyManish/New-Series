import React, { useState } from "react";
import { toast } from "react-toastify";

function Creat({ setTodos }) {
  const [tasks, setTasks] = useState("");
  const [isComplited, setComplited] = useState(false);

  const getData = (e) => {
    e.preventDefault();
    if (!tasks.trim()) return;

    const newUser = { tasks, isComplited };

    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];

    const isDuplicate = storedTasks.some(
      (item) => item.tasks.trim().toLowerCase() === tasks.trim().toLowerCase()
    );

    if (isDuplicate) {
      toast.error("Task already exists!");
      return;
    }

    const updatedTasks = [...storedTasks, newUser];

  
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    toast.success("Task Added");

    setTodos(updatedTasks);
    setTasks("");
    setComplited(false);
  };

  return (
    <div className="flex flex-col gap-4 mt-5 pb-2 w-full sm:w-3/4 md:w-1/2">
      <form onSubmit={getData} className="flex flex-col gap-4">
        <input
          onChange={(e) => setTasks(e.target.value)}
          value={tasks}
          type="text"
          placeholder="Enter task here..."
          className="outline-none p-2 text-lg sm:text-xl md:text-2xl bg-transparent font-mono w-full border-b border-gray-600 focus:border-gray-300 transition-colors"
          name="task"
        />
        <div className="flex flex-col sm:flex-row justify-between bg-gray-700 p-2 rounded-full gap-3 sm:gap-0">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              onChange={(e) => setComplited(e.target.checked)}
              checked={isComplited}
              type="checkbox"
              name="checkbox"
              className="appearance-none h-5 w-5 rounded-full border border-gray-400 checked:bg-gray-50 checked:border-gray-500 cursor-pointer"
            />
            Completed
          </label>
          <button className="bg-gray-600 rounded-full p-2 sm:px-4 cursor-pointer active:shadow-2xl text-sm sm:text-base md:text-lg">
            Add Task
          </button>
        </div>
      </form>
    </div>
  );
}

export default Creat;
