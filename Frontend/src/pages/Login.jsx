import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

function Login() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  return (
    <div className="mt-10">
      <h2 className="text-2xl text-gray-400">Login or register here</h2>
      <form className="mt-5 w-1/6">
        <input
          {...register("username", { required: "username is required" })}
          type="text"
          placeholder="enter usernsme"
          className="border-2 outline-0 border-gray-300 p-2 rounded-lg w-full mb-4"
        />
        <input
          {...register("email", { required: "Email is required" })}
          type="email"
          placeholder="enter email here.."
          className="border-2 outline-0 border-gray-300 p-2 rounded-lg w-full mb-4"
        />
        <input
          {...register("password", { required: "password is required" })}
          type="password"
          placeholder="enter password here.."
          className="border-2 outline-0 border-gray-300 p-2 rounded-lg w-full mb-4"
        />
        <button className="bg-g" type="submit">Login</button>
        <div>
          <p>Don't have an account ? <Link to='/register'>Register</Link> </p>
        </div>
      </form>
    </div>
  );
}

export default Login;
