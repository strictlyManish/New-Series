import React, { useContext } from "react";
import { toast } from "react-toastify";
import { todocontex } from "../Wraper";

function Read() {
  const [todos, setTodos] = useContext(todocontex);

 

  const renderData = todos.map((obj) => {
    return (
      <div
        key={obj.id}
        className="flex bg-gray-900 p-5 justify-between rounded"
      >
        <p className="capitalize">{obj.title}</p>
        <button
        className="text-pink-600 text-[12px] cursor-pointer"
          onClick={() => {
            setTodos(todos.filter((item) => item.id !== obj.id));
            toast.error("Task deleted");
          }}
        >
          Delete
        </button>
      </div>
    );
  });

  return (
    <div>
      <h1 className=" mb-5 text-3xl capitalize">
        <span className="text-pink-700">Pending</span> todos
      </h1>
      <div className="flex flex-col gap-2 w-[25vw]">{renderData}</div>
    </div>
  );
}

export default Read;
