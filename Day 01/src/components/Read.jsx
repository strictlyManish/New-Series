import React from "react";

function Read({ todos }) {
  let data = JSON.parse(localStorage.getItem("tasks")) || todos;

  const renderTodos = data.map((todo, idx) => {
    return (
      <li
        key={idx}
        className="mt-2 text-[16px] capitalize px-10 py-3 rounded-full shadow-full"
        style={
          todo.isComplited
            ? { backgroundColor: "darkgreen" }
            : { backgroundColor: "tomato" }
        }
      >
        {idx + 1} {todo.tasks}
      </li>
    );
  });

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
