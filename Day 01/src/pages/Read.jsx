import React, { useContext } from "react";
import { todoscontext } from "../Wrapper";
import {toast} from "react-toastify";
import { useNavigate } from "react-router-dom";

function Read() {
  const [todos, setTodos] = useContext(todoscontext);

  const delhandler = (id) => {
    const filtredData = todos.filter((obj) => id !== obj.id);
    setTodos(filtredData);
    toast.error('Task deleted')
  };

  const navigate = useNavigate()

  const renderTaask = todos.map((obj) => {
    return (
      <li
        key={obj.id}
        className="list-none p-2 rounded"
        style={{ backgroundColor: obj.isComplete ? "#13a34a" : "#374151" }} // Tailwind green-600 hex
      >
        <p>{obj.title}</p>
        <div className="flex justify-end gap-2">
          <button
            onClick={() => delhandler(obj.id)}
            className="bg-gray-600 rounded-full px-3 py-1 cursor-pointer active:scale-95"
          >
            Delete
          </button>
          <button onClick={()=>navigate(`update/${obj.id}`)} className="bg-gray-600 rounded-full px-3 py-1 cursor-pointer active:scale-95">
            Edit
          </button>
        </div>
      </li>
    );
  });

  return (
    <div>
      <h1 className="text-2xl font-thin italic">
        <span className="text-pink-400">Pending</span> todos goes here
      </h1>
      <div className="flex flex-col gap-1 mt-5 w-[25vw]">{renderTaask}</div>
    </div>
  );
}

export default Read;
