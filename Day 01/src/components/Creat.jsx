import React, { useState } from "react";

function Creat(props) {
    const {setTodos} = props
   
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

    const submit = (e) => {
        e.preventDefault();
        const newuser = { name, age };
        setTodos((prev)=> [...prev,newuser])
    };



  return (
    <form
      onSubmit={(e) => submit(e)}
      className=" w-fit flex flex-col gap-5 p-5 justify-start items-start"
    >
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        type="text"
        placeholder="Enter name"
        className="bg-gray-700 text-white outline-none p-2 "
        name="name"
        minLength="3"
        maxLength="12"
        required
      />
      <input
        value={age}
        onChange={(e) => setAge(e.target.value)}
        type="number"
        placeholder="Enter age"
        className="bg-gray-700 text-white outline-none p-2 "
        name="age"
        minLength="3"
        maxLength="12"
        required
      />
      <button className=" bg-zinc-700 px-5 py-2 rounded-full">Add task</button>
    </form>
  );
}

export default Creat;
