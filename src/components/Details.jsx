import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { RecipiesContex } from "../context/Context";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

function Details() {
  const { id } = useParams();
  const [data, setData] = useContext(RecipiesContex);
  const recipe = data.find((recipe) => id === recipe.id);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ defaultValues: recipe });

  const onSubmit = (newdata) => {
    const idx = data.findIndex((obj) => id == obj.id);
    const copydata = [...data];
    copydata[idx] = { ...copydata[idx], ...newdata };
    localStorage.setItem("data", JSON.stringify(copydata));
    setData(copydata);
    toast.success("Recipe updated");
  };

  const delhandler = () => {
    const filtred = data.filter((obj) => id !== obj.id);
    setData(filtred);
    localStorage.setItem("data", JSON.stringify(filtred));
    navigate("/recipes");
    toast.success("recipes Deleted");
  };

  // --- Data Not Found View ---
  if (!recipe) {
    return (
      <div className="flex items-center justify-center min-h-screen text-white">
        <div className="p-8 bg-gray-800 rounded-lg shadow-xl">
          <h2 className="text-3xl font-bold text-red-500">
            Recipe Not Found 😔
          </h2>
          <p className="mt-2 text-gray-400">
            Please check the recipe ID and try again.
          </p>
        </div>
      </div>
    );
  }

  // --- Main Details/Edit View ---
  return (
    <div className="min-h-screen text-white p-4 sm:p-8">
      <div className="max-w-4xl mx-auto">
        <button
          onClick={() => navigate("/recipes ")}
          className=" rounded-full px-3 p-2 font-medium bg-gray-700"
        >
          Back to recipies
        </button>
        {/* Recipe Header (Details View) */}
        <header className="mb-8 p-6 bg-gray-800 rounded-xl shadow-2xl transition duration-300 hover:shadow-orange-900/50">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-shrink-0 w-full md:w-1/3">
              {/* Image with object-cover for better fit and a subtle border */}

              <img
                src={recipe.url}
                alt={recipe.name}
                className="w-full h-48 object-cover rounded-lg border-2 border-orange-500 shadow-md transition duration-300"
              />
            </div>
            <div className="flex-grow">
              <h1 className="text-4xl font-extrabold text-orange-400 mb-2">
                {recipe.name}
              </h1>
              <p className="text-xl text-gray-300 mb-4">
                <span className="font-semibold text-orange-500">Chef:</span>{" "}
                {recipe.chef}
              </p>
              <p className="text-gray-400 italic">
                {recipe.description || "No detailed description provided."}
              </p>
              {/* Optional: Display ingredients brief */}
              {recipe.ingredients && (
                <div className="mt-4">
                  <h3 className="text-lg font-semibold text-orange-400">
                    Key Ingredients:
                  </h3>
                  <p className="text-sm text-gray-400">
                    {recipe.ingredients
                      .split(",")
                      .map((i) => i.trim())
                      .slice(0, 3)
                      .join(", ")}
                    {"..."}
                  </p>
                </div>
              )}
            </div>
          </div>
        </header>

        {/* --- Edit Form Section --- */}
        <div className="p-6 bg-gray-800 rounded-xl shadow-2xl">
          <h2 className="text-3xl font-bold text-white mb-6 border-b border-gray-700 pb-3">
            Edit Recipe Details
          </h2>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {/* Recipe Name */}
            <InputField
              label="Recipe Name"
              register={register}
              name="name"
              placeholder="Enter recipe name..."
              requiredMessage="Recipe name is required"
              errors={errors}
              type="text"
            />

            {/* Recipe Image URL */}
            <InputField
              label="Image URL"
              register={register}
              name="url"
              placeholder="Enter recipe image URL..."
              requiredMessage="Image URL is required"
              errors={errors}
              type="url"
            />

            {/* Chef Name */}
            <InputField
              label="Chef's Name"
              register={register}
              name="chef"
              placeholder="Chef's name..."
              requiredMessage="Chef name is required"
              errors={errors}
              type="text"
            />

            {/* Placeholder to align the grid better */}
            <div className="hidden md:block"></div>

            {/* Description (Full width) */}
            <div className="md:col-span-2">
              <label
                htmlFor="description"
                className="block text-sm font-medium text-gray-300 mb-1"
              >
                Description
              </label>
              <textarea
                id="description"
                rows="4"
                placeholder="Enter recipe description..."
                className="w-full text-white bg-gray-700 rounded-lg px-4 py-3 resize-none outline-none focus:ring-2 focus:ring-orange-500 transition duration-200 border border-gray-700 hover:border-orange-500/50"
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

            {/* Ingredients (Full width) */}
            <div className="md:col-span-2">
              <label
                htmlFor="ingredients"
                className="block text-sm font-medium text-gray-300 mb-1"
              >
                Ingredients
              </label>
              <textarea
                id="ingredients"
                rows="4"
                placeholder="Enter ingredients (comma separated, e.g., 'Tomato, Basil, Cheese')..."
                className="w-full text-white bg-gray-700 rounded-lg px-4 py-3 resize-none outline-none focus:ring-2 focus:ring-orange-500 transition duration-200 border border-gray-700 hover:border-orange-500/50"
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

            {/* Submit Button (Full width) */}
            <div className="md:col-span-2 mt-4 flex justify-between">
              <button
                onClick={delhandler}
                type="button"
                className="bg-red-500 px-6 py-3 text-white rounded-full "
              >
                Delete Recipe
              </button>
              <button
                type="submit"
                className="bg-orange-600 px-6 py-3 text-white rounded-full transition duration-300 font-bold text-lg shadow-xl hover:bg-orange-700 hover:shadow-orange-500/50 focus:outline-none focus:ring-4 focus:ring-orange-500 focus:ring-opacity-50"
              >
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

// Helper component for cleaner form structure
const InputField = ({
  label,
  register,
  name,
  placeholder,
  requiredMessage,
  errors,
  type = "text",
}) => (
  <div>
    <label
      htmlFor={name}
      className="block text-sm font-medium text-gray-300 mb-1"
    >
      {label}
    </label>
    <input
      id={name}
      type={type}
      placeholder={placeholder}
      className="w-full text-white bg-gray-700 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-orange-500 transition duration-200 border border-gray-700 hover:border-orange-500/50"
      {...register(name, { required: requiredMessage })}
    />
    {errors[name] && (
      <p className="text-red-400 text-sm mt-1">{errors[name].message}</p>
    )}
  </div>
);

export default Details;
