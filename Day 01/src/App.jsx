import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const sumbit = (e) => {
    e.preventDefault();
    const data = e.target;

    const main_Data = [];
   

    for(let i = 0; i<data.length-1;i++){
      main_Data.push({ [data[i].name]: data[i].value })
    };

    console.log(main_Data);
  };

  return (
    <div className="h-screen w-screen bg-gray-900 text-white">
      <h2 className="text-2xl p-5 font-sans ">Simple Login Form</h2>
      <div className="flex justify-around">
        <form
          onSubmit={(e) => sumbit(e)}
          className=" w-fit flex flex-col gap-5 p-5 justify-start items-start"
        >
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Enter name"
            className="bg-gray-700 text-white outline-none p-2 "
            name="name"
          />
          <input
            value={age}
            onChange={(e) => setAge(e.target.value)}
            type="number"
            placeholder="Enter age"
            className="bg-gray-700 text-white outline-none p-2 "
            name="age"

          />
          <button className=" bg-zinc-700 px-5 py-2 rounded-full">
            Add task
          </button>
        </form>
        <div>
          <p>Pending Task</p>
        </div>
      </div>
    </div>
  );
}

export default App;
