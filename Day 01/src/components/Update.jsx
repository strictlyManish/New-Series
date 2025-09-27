import React, { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { todoscontext } from "../Wrapper";
import { useNavigate, useParams } from "react-router-dom";

function Update() {
  const [todos, setTodos] = useContext(todoscontext);
  const { id } = useParams();
  const navigate = useNavigate();

  const { register, handleSubmit, reset ,  formState: { errors }, } = useForm();

  useEffect(() => {
    const up = todos.find((obj) => obj.id === id);
    if (up) {
      reset({ title: up.title }); // preload value into form
    }
  }, [id, todos, reset]);

  const handleUpdate = (data) => {
    setTodos((prev) =>
      prev.map((obj) => (obj.id === id ? { ...obj, title: data.title } : obj))
    );
    navigate("/");
  };

  return (
    <div>
      <h1 className="text-2xl italic font-thin">update tasks.</h1>
      <form onSubmit={handleSubmit(handleUpdate)} className="flex flex-col gap-5 mt-10">
        <input
          {...register("title", { required: 'Can not be empty' })}
          type="text"
          placeholder="Update task here"
          className="outline-none border-b-2 py-2 w-[20vw]"
        />
        {<small>{errors?.title?.message}</small>}
        <div className="flex gap-5">
          <button
            type="submit"
            className="bg-orange-600 w-fit text-white px-5 py-2 rounded-full uppercase cursor-pointer"
          >
            Update
          </button>
          <button
            type="button"
            onClick={() => navigate("/")}
            className="bg-gray-600 w-fit text-white px-5 py-2 rounded-full uppercase cursor-pointer"
          >
            back
          </button>
        </div>
      </form>
    </div>
  );
}

export default Update;
