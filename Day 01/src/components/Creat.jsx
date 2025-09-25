import { nanoid } from "nanoid";
import { useForm } from "react-hook-form";
import {toast} from "react-toastify"


function Creat(props) {

  const {todos, setTodos} = props;

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const sumbitData = (data) => {
    data.isComplited = false
    data.id = nanoid(6);

    const copytodos = [...todos];
    copytodos.push(data);
    setTodos(copytodos);
    toast.success('Task created')
    reset();
  };
  

  return (
    <form onSubmit={handleSubmit(sumbitData)}>
      <h1 className="text-4xl">
        Set <span className="text-orange-700">Reminders</span> for tasks
      </h1>
      <div className="flex flex-col gap-5 mt-10">
        <input
          {...register("title",{required:'This filed is required kindly filout this filed'})}
          type="text"
          name="title"
          placeholder="Tasks"
          className="outline-none border-b-2 w-[50vw] text-[18px] pb-1.5 border-gray-100"
        />
        {<small className="text-red-500 ">{errors?.title?.message}</small>}
        <button className="bg-gray-900 w-fit px-6 py-2 rounded-md font-mono active:scale-95 transition-all cursor-pointer">
          Create task
        </button>
      </div>
    </form>
  );
}

export default Creat;
