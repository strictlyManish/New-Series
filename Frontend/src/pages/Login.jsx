import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { asyncLoginUser } from "../store/action/userAction";

export default function Login() {
  const { register, handleSubmit } = useForm();

  const dispatch = useDispatch()
  const navigate = useNavigate();

  const onSubmit = (data) => {
    dispatch(asyncLoginUser(data));
    navigate('/')
  };

  return (
    <div className="min-h-screen flex items-center justify-center  text-white px-4">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-zinc-900 shadow-lg rounded-2xl p-8 w-full max-w-sm sm:max-w-md"
      >
        <h2 className="text-3xl font-semibold text-center mb-6">Login</h2>

        <input
          type="text"
          placeholder="Username"
          {...register("username", { required: true })}
          className="w-full mb-4 p-3 bg-transparent border border-zinc-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
        />

        <input
          type="password"
          placeholder="Password"
          {...register("password", { required: true })}
          className="w-full mb-6 p-3 bg-transparent border border-zinc-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
        />

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg transition-colors"
        >
          Login
        </button>

        <p className="text-center text-sm text-gray-400 mt-4">
          Don’t have an account?{" "}
          <Link
            to="/register"
            className="text-blue-400 hover:underline font-medium"
          >
            Register
          </Link>
        </p>
      </form>
    </div>
  );
}