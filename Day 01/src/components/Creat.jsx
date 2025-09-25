import { nanoid } from "nanoid";
import React, { useState } from "react";

function Creat(props) {
  const {data, setData} = props;
  const [title, setTitle] = useState();

  const sumbitData = (e) =>{

    if(title.trim().length === 0) return

    e.preventDefault();

    const newttask = {
      title,
      id:nanoid(4),
      isComplited:false
    };

    const updatedData = [...data];
    updatedData.push(newttask);
    setData(updatedData);
    setTitle('')
  }

  return (
    <form onSubmit={(e) => sumbitData(e)}>
      <h1 className="text-3xl">Set <span className="text-orange-700">Reminders</span> for tasks</h1>
      <div className="flex flex-col gap-5 mt-10">
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          name="title"
          placeholder="Tasks"
          className="outline-none border-b-2 w-[50vw] text-[18px] pb-1.5 border-gray-600"
        />
        <button className="bg-gray-900 w-fit px-6 py-2 rounded-md font-mono active:scale-95 transition-all cursor-pointer">
          Create task
        </button>
      </div>
    </form>
  );
}

export default Creat;
