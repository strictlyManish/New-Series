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
      <div className="flex flex-col gap-5">
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          name="title"
          placeholder="Task Details"
          className="outline-none border-b-2 w-[50vw] text-[18px] pb-1.5 border-pink-900 italic"
        />
        <button className="bg-pink-700 w-fit px-6 py-2 rounded-full uppercase italic font-mono active:scale-95 transition-all cursor-pointer">
          Create task
        </button>
      </div>
    </form>
  );
}

export default Creat;
