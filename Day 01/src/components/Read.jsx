import React, { useState, useEffect } from "react";

function Read({ todos }) {
  const [data, setData] = useState([]);
  const [editIndex, setEditIndex] = useState(null); // track which todo is being edited
  const [editValue, setEditValue] = useState("Empty");   // temporary input value

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("tasks")) || todos;
    setData(stored);
  }, [todos]);

  // 🗑️ Delete handler
  const delHandler = (idx) => {
    const updated = data.filter((_, i) => i !== idx);
    setData(updated);
    localStorage.setItem("tasks", JSON.stringify(updated));
  };

  // ✏️ Edit handler
  const startEdit = (idx, taskText) => {
    setEditIndex(idx);
    setEditValue(taskText);
  };

  const saveEdit = (idx) => {
    const updated = [...data];
    updated[idx].tasks = editValue;
    setData(updated);
    localStorage.setItem("tasks", JSON.stringify(updated));
    setEditIndex(null); // exit edit mode
    setEditValue("");
  };

  const cancelEdit = () => {
    setEditIndex(null);
    setEditValue("");
  };

  const renderTodos = data.map((todo, idx) => (
    <li
      key={idx}
      className="mt-2 text-[16px] w-[30vw] p-2 capitalize rounded-full shadow-full flex items-center justify-between overflow-hidden bg-gray-800 shadow-2xl"
    >
      {/* 👇 If editing this task, show input box */}
      {editIndex === idx ? (
        <input
          type="text"
          value={editValue}
          onChange={(e) => setEditValue(e.target.value)}
          className="ml-5 px-2 py-1 rounded border-none outline-none"
          autoFocus
        />
      ) : (
        <p className="ml-5">{todo.tasks}</p>
      )}

      <div className="flex items-center gap-5 bg-gray-700 rounded-full p-2">
        {editIndex === idx ? (
          <>
            <button
              onClick={() => saveEdit(idx)}
              className="active:text-green-500 cursor-pointer"
            >
              Save
            </button>
            <button
              onClick={cancelEdit}
              className="active:text-yellow-500 cursor-pointer"
            >
              Cancel
            </button>
          </>
        ) : (
          <>
            <button
              onClick={() => startEdit(idx, todo.tasks)}
              className="active:text-green-500 cursor-pointer"
            >
              Edit
            </button>
            <button
              onClick={() => delHandler(idx)}
              className="active:text-red-500 cursor-pointer"
            >
              Remove
            </button>
          </>
        )}

        <p
          className="bg-gray-950 h-full p-2 rounded-full"
          style={
            todo.isComplited
              ? { backgroundColor: "darkgreen" }
              : { backgroundColor: "tomato" }
          }
        ></p>
      </div>
    </li>
  ));

  return (
    <div>
      <h2 className="capitalize">Pending task details</h2>
      <ul className="mt-5 h-[72vh] overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-300">
        {renderTodos}
      </ul>
    </div>
  );
}

export default Read;