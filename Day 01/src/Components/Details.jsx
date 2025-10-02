import React, { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { RecipiesContext } from "./../Context/Recipe";
import { useForm } from "react-hook-form";
import {toast} from 'react-hot-toast'
function Details() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useContext(RecipiesContext);

  const recipe = data.find((obj) => String(obj.id) === id);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: recipe,
  });

  if (!recipe) {
    return <h2 className="text-center text-red-500">Recipe not found</h2>;
  }

  const onSubmit = (newdata) => {
    const idx = data.findIndex((obj) => obj.id === id);
    const copudata = [...data];
    copudata[idx] = { ...copudata, ...newdata };
    setData(copudata);
    toast.success('Successfully updated!');
    navigate("/recipies");
  };

  const handleDelete = () => {
    const del = data.filter((obj) => obj.id !== id);
    setData(del);
    toast.success("Recipe Deleted");
    navigate("/recipies");
  };

  return (
    <div className="w-full min-h-screen flex flex-col md:flex-row gap-10 p-8 ">
      <div className="flex-1 rounded-2xl shadow-lg p-6 flex flex-col items-center">
        <img
          src={recipe.url}
          alt={recipe.recipeName}
          className="w-full max-w-md rounded-xl shadow-md object-cover"
        />
        <h2 className="text-3xl font-bold mt-4">{recipe.recipeName}</h2>
      </div>

      <div className="flex-1 rounded-2xl shadow-xl p-8 backdrop-blur-lg">
        <h2 className="text-2xl font-bold mb-6">Update Recipe</h2>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-1 gap-6"
        >
          <div>
            <label className="block text-sm font-medium mb-2">
              Recipe Title
            </label>
            <input
              {...register("recipeName", {
                required: "Recipe title is required",
              })}
              type="text"
              className={`w-full p-3 rounded-xl border ${
                errors.recipeName ? "border-red-400" : "border-gray-300"
              } focus:border-green-500 outline-none shadow-sm`}
            />
            {errors.recipeName && (
              <p className="text-red-500 text-sm mt-1">
                {errors.recipeName.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Ingredients
            </label>
            <textarea
              {...register("recipeIngredients", {
                required: "Ingredients are required",
              })}
              rows="3"
              className={`w-full p-3 rounded-xl border ${
                errors.recipeIngredients ? "border-red-400" : "border-gray-300"
              } focus:border-green-500 outline-none shadow-sm resize-none`}
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Chef Name</label>
            <input
              {...register("chiefName", {
                required: "Chef name is required",
              })}
              type="text"
              className={`w-full p-3 rounded-xl border ${
                errors.chiefName ? "border-red-400" : "border-gray-300"
              } focus:border-green-500 outline-none shadow-sm`}
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Description
            </label>
            <textarea
              {...register("recipeDesc", {
                required: "Description is required",
              })}
              rows="4"
              className={`w-full p-3 rounded-xl border ${
                errors.recipeDesc ? "border-red-400" : "border-gray-300"
              } focus:border-green-500 outline-none shadow-sm resize-none`}
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Categories</label>
            <input
              {...register("categories")}
              type="text"
              className="w-full p-3 rounded-xl border border-gray-300 focus:border-green-500 outline-none shadow-sm"
            />
          </div>

          <div className="flex justify-between items-center mt-6">
            <button
              type="submit"
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-green-500 to-green-400 hover:from-green-600 hover:to-green-500 text-white font-medium shadow-lg transition"
            >
              Update Recipe
            </button>
            <button
              type="button"
              onClick={handleDelete}
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-red-500 to-red-400 hover:from-red-600 hover:to-red-500 text-white font-medium shadow-lg transition"
            >
              Delete Recipe
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Details;
