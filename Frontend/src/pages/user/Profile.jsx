import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { asyncDeleteUser, asyncLogOutUser, asyncUpdateuser } from '../../app/actions/userAction';

export default function Profile() {
  const { user } = useSelector((state) => state.useReducer);
  const { handleSubmit, register, formState: { errors } } = useForm({
    defaultValues: {
      username: user?.username,
      email: user?.email,
      password: user?.password

    }
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();


  const onSubmit = (data) => {
    console.log(data);
    dispatch(asyncUpdateuser(user.id, data))
  };

  const DeleteHandler = (id) => {
    dispatch(asyncDeleteUser(id));
    navigate('/login')
  };

  const LogOutuser = (id) => {
    dispatch(asyncLogOutUser());
    navigate('/login')
  };

  return (
    <div className="h-screen w-full flex justify-center items-center">
      <div className=" rounded-lg p-8 w-[700px] h-fit flex justify-between gap-10">
        <div className="w-1/2 bg-gray-900 rounded-md p-6">
          <h2 className="text-lg font-medium mb-4">Preview</h2>
          <p className="text-gray-100 mb-2"><strong>Username :</strong> {user?.username}</p>
          <p className="text-gray-100 mb-2"><strong>Email :</strong> {user?.email}</p>
          <p className="text-gray-100"><strong>Password :</strong> {user?.password}</p>
        </div>
        <div className="w-1/2">
          <h1 className="text-xl font-semibold mb-1">Profile Settings</h1>
          <p className="text-sm text-gray-500">Update your account information</p>

          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 mt-6">
            <div>
              <input
                type="text"
                {...register("username", { required: "Username is required" })}
                placeholder="Username"
                className="border rounded-md px-3 py-2 w-full outline-gray-400"
              />
              {errors.username && (
                <p className="text-red-500 text-sm mt-1">{errors.username.message}</p>
              )}
            </div>

            <div>
              <input
                type="email"
                {...register("email", { required: "Email is required" })}
                placeholder="Email"
                className="border rounded-md px-3 py-2 w-full outline-gray-400"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
              )}
            </div>

            <div>
              <input
                type="password"
                {...register("password", { required: "Password is required" })}
                placeholder="Password"
                className="border rounded-md px-3 py-2 w-full outline-gray-400"
              />
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
              )}
            </div>

            <div className='flex gap-3'>
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white rounded-md py-2 w-full cursor-pointer"
              >
                Update
              </button>

              <button
                onClick={LogOutuser}
                type="button"
                className="bg-pink-500 hover:bg-red-600 text-white rounded-md py-2 w-full cursor-pointer"
              >
                Logout
              </button>
            </div>
            <button
              onClick={() => DeleteHandler(user.id)}
              type="button"
              className="bg-red-600 hover:bg-red-600 text-white rounded-md py-2 w-full cursor-pointer"
            >
              Delete Account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}