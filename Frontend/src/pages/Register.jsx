import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { asyncRegisterUser } from "../store/actions/userAction";
import { useDispatch } from "react-redux";

function Register() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onSubmit = (data) => {
    data.isAdmin = false;
    dispatch(asyncRegisterUser(data))
    navigate("/login");
  };

  const password = watch("password");

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="bg-gray-800 text-white rounded-2xl w-full max-w-md p-8">
        <h2 className="text-3xl font-bold text-center mb-6">
          Create an Account ✨
        </h2>
        <p className="text-gray-400 text-center mb-8">
          Register to get started
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div>
            <input
              {...register("username", { required: "Username is required" })}
              type="text"
              placeholder="User Name"
              className="w-full p-3 bg-gray-700 rounded-lg focus:ring-2 focus:ring-pink-500 focus:outline-none placeholder-gray-400"
            />
            {errors.username && (
              <p className="text-pink-500 text-sm mt-1">
                {errors.username.message}
              </p>
            )}
          </div>

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

          <div>
            <input
              {...register("confirmPassword", {
                required: "Please confirm your password",
                validate: (value) =>
                  value === password || "Passwords do not match",
              })}
              type="password"
              placeholder="Confirm Password"
              className="w-full p-3 bg-gray-700 rounded-lg focus:ring-2 focus:ring-pink-500 focus:outline-none placeholder-gray-400"
            />
            {errors.confirmPassword && (
              <p className="text-pink-500 text-sm mt-1">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-pink-600 hover:bg-pink-700 transition rounded-lg font-semibold shadow-md"
          >
            Register
          </button>

          <div className="text-center mt-4 text-gray-400">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-pink-500 hover:text-pink-400 font-semibold"
            >
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;