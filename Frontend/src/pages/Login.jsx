import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    toast.success('user logged sucessfully')
  };

  return (
    <div className="min-h-screen flex items-center justify-center  px-4">
      <div className="bg-gray-800 text-white rounded-2xl  w-full max-w-md p-8">
        <h2 className="text-3xl font-bold text-center mb-6">
          Welcome Back 👋
        </h2>
        <p className="text-gray-400 text-center mb-8">Login to your account</p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div>
            <input
              {...register("email", { required: "Email is required" })}
              type="email"
              placeholder="Email address"
              className="w-full p-3 bg-gray-700 rounded-lg focus:ring-2 focus:ring-pink-500 focus:outline-none placeholder-gray-400"
            />
            {errors.email && (
              <p className="text-pink-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <input
              {...register("password", { required: "Password is required" })}
              type="password"
              placeholder="Password"
              className="w-full p-3 bg-gray-700 rounded-lg focus:ring-2 focus:ring-pink-500 focus:outline-none placeholder-gray-400"
            />
            {errors.password && (
              <p className="text-pink-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-pink-600 hover:bg-pink-700 transition rounded-lg font-semibold shadow-md"
          >
            Login
          </button>

          <div className="text-center mt-4 text-gray-400">
            Don’t have an account?{" "}
            <Link
              to="/register"
              className="text-pink-500 hover:text-pink-400 font-semibold"
            >
              Register
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;