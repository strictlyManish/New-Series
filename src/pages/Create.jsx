import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { RecipiesContex } from "./../context/Context";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { nanoid } from "nanoid/non-secure";

function Create() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch, // Kept to watch for the image URL for the preview
    reset,
  } = useForm();
  const navigate = useNavigate();
  const [data, setdata] = useContext(RecipiesContex);

  const onSubmit = (newdata) => {
    newdata.id = nanoid(4);
    const copydata = [...data];
    copydata.push(newdata);
    setdata(copydata);
    localStorage.setItem("data", JSON.stringify(copydata));
    toast.success("Recipe created sucessfully");
    navigate("/recipes");
    reset();
  };

  const formValues = watch();

  // The default image URL for the preview
  const defaultImageUrl =
    "https://images.unsplash.com/photo-1759354001829-233b2025c6b2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0N3x8fGVufDB8fHx8fA%3D%3D";

  return (
    <div className="flex flex-col md:flex-row gap-10 h-screen items-start mt-4">
      <div className="w-full md:w-1/2 text-white bg-gray-800 rounded-2xl p-1 ">
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
          {/* Recipe Name */}
          <div>
            <input
              type="text"
              placeholder="Enter recipe name..."
              className="w-full text-white bg-gray-700 rounded-xl px-4 py-2 outline-none focus:ring-2 focus:ring-orange-500 transition duration-150"
              {...register("name", { required: "Recipe name is required" })}
            />
            {errors.name && (
              <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          {/* Recipe Image URL */}
          <div>
            <input
              type="url"
              placeholder="Enter recipe image URL..."
              className="w-full text-white bg-gray-700 rounded-xl px-4 py-2 outline-none focus:ring-2 focus:ring-orange-500 transition duration-150"
              {...register("url", {
                required: "Image URL is required",
              })}
            />
            {errors.url && (
              <p className="text-red-400 text-sm mt-1">{errors.url.message}</p>
            )}
          </div>

          {/* Chef Name */}
          <div>
            <input
              type="text"
              placeholder="Chef's name..."
              className="w-full text-white bg-gray-700 rounded-xl px-4 py-2 outline-none focus:ring-2 focus:ring-orange-500 transition duration-150"
              {...register("chef", { required: "Chef name is required" })}
            />
            {errors.chef && (
              <p className="text-red-400 text-sm mt-1">{errors.chef.message}</p>
            )}
          </div>

          {/* Description */}
          <div>
            <textarea
              rows="3"
              placeholder="Enter recipe description..."
              className="w-full text-white bg-gray-700 rounded-xl px-4 py-2 resize-none outline-none focus:ring-2 focus:ring-orange-500 transition duration-150"
              {...register("description", {
                required: "Description is required",
                minLength: {
                  value: 10,
                  message: "Description must be at least 10 characters",
                },
              })}
            />
            {errors.description && (
              <p className="text-red-400 text-sm mt-1">
                {errors.description.message}
              </p>
            )}
          </div>

          {/* Ingredients */}
          <div>
            <textarea
              rows="3"
              placeholder="Enter ingredients (comma separated)..."
              className="w-full text-white bg-gray-700 rounded-xl px-2 py-2 resize-none outline-none focus:ring-2 focus:ring-orange-500 transition duration-150"
              {...register("ingredients", {
                required: "Ingredients are required",
              })}
            />
            {errors.ingredients && (
              <p className="text-red-400 text-sm mt-1">
                {errors.ingredients.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="bg-orange-600 w-fit px-2 py-2 cursor-pointer hover:bg-orange-700 text-white rounded-xl transition duration-150 font-bold text-lg shadow-lg"
          >
            Create Recipe
          </button>
        </form>
      </div>

      {/* Image Preview Section */}
      <div className="w-full md:w-1/2 p-4 md:p-6 bg-gray-800 rounded-2xl  flex flex-col items-center">
        <h3 className="text-xl font-semibold mb-4 text-white">Image Preview</h3>
        <img
          // 2. FIX: Access the 'image' field from the watched form values object.
          src={formValues.url || defaultImageUrl}
          alt="Recipe Preview"
          // Using object-cover to ensure the image fills and looks good
          className="rounded-2xl w-full h-auto max-h-96 object-cover "
        />
        {/* Optional: Add a text overlay for the current URL if the image hasn't loaded */}
        <p className="text-sm text-gray-400 mt-3 truncate w-full px-2">
          URL: {formValues.url || "Default Image URL"}
        </p>
      </div>
    </div>
  );
}

export default Create;
