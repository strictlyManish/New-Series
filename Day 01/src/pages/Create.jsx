import React, { useContext } from "react";
import { useForm } from "react-hook-form"
import {nanoid} from "nanoid"
import { todoscontext } from "../Wrapper";

function Create() {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const [todos, setTodos] = useContext(todoscontext);

  const createdata = (data) =>{
      data.isComplete = false;
      data.id = nanoid()
    
      const copytodos = [...todos];
      copytodos.push(data);
      setTodos(copytodos);
      reset()
  };




  return (
    <div className="w-[55vw]">
      <h1 className="text-2xl italic font-thin">
        Set task for <span className="text-pink-400">Reminder</span>
      </h1>
      <form onSubmit={handleSubmit(createdata)} className="flex flex-col gap-5 mt-10">
        <input
         {...register("title",{required:'Required task field'})}
          type="text"
          placeholder="Enter taks for reminder"
          className="outline-none  border-b-2 py-2"
        />
        <small className="text-red-600">{errors?.title?.message}</small>
        <button className="bg-gray-600 w-fit text-white px-5 py-2 rounded-full uppercase cursor-pointer">
          create task
        </button>
      </form>
    </div>
  );
}

export default Create;
