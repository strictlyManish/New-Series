import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { RecipiesContext } from "./../Context/Recipe";
import { nanoid } from "nanoid";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function Create() {
  const [imgUrl, setImgUrl] = useState("");
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [data, setdata] = useContext(RecipiesContext);

  const onSubmit = (newdata) => {
    newdata.id = nanoid(6);
    setdata([...data,newdata]);
    reset();
    toast.success("✅ Recipe Created Successfully!");
    navigate("/recipies");
  };

  return (
    <div className="h-screen w-screen px-10 py-6 overflow-x-hidden bg-[#000000] text-gray-100 flex items-center justify-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl  backdrop-blur-lg p-8 rounded-2xl shadow-xl "
      >
        {/* Left - Form */}
        <div className="flex flex-col gap-6">
          {/* Title */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Recipe Title
            </label>
            <input
              {...register("recipeName", {
                required: "Recipe title is required",
              })}
              type="text"
              placeholder="Enter recipe name"
              className={`w-full p-3 rounded-2xl border ${
                errors.recipeName ? "border-red-400" : "border-gray-400"
              } focus:border-green-600 outline-none shadow-sm`}
            />
            {errors.recipeName && (
              <p className="text-red-500 text-sm mt-1">
                {errors.recipeName.message}
              </p>
            )}
          </div>

          {/* Image URL */}
          <div>
            <label className="block text-sm font-medium mb-2">Image URL</label>
            <input
              {...register("url", {
                required: "Image URL is required",
                pattern: {
                  value: /^(http|https):\/\/[^ "]+$/,
                  message: "Enter a valid URL",
                },
              })}
              type="text"
              placeholder="Paste image link"
              value={imgUrl}
              onChange={(e) => setImgUrl(e.target.value)}
              className={`w-full p-3 rounded-2xl border ${
                errors.url ? "border-red-400" : "border-gray-400"
              } focus:border-green-600 outline-none shadow-sm`}
            />
            {errors.url && (
              <p className="text-red-500 text-sm mt-1">{errors.url.message}</p>
            )}
          </div>

          {/* Ingredients */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Ingredients
            </label>
            <textarea
              {...register("recipeIngredients", {
                required: "Ingredients are required",
              })}
              placeholder="List ingredients here..."
              rows="3"
              className={`w-full p-3 rounded-2xl border ${
                errors.recipeIngredients ? "border-red-400" : "border-gray-400"
              } focus:border-green-600 outline-none shadow-sm resize-none`}
            />
            {errors.recipeIngredients && (
              <p className="text-red-500 text-sm mt-1">
                {errors.recipeIngredients.message}
              </p>
            )}
          </div>

          {/* Chef Name */}
          <div>
            <label className="block text-sm font-medium mb-2">Chef Name</label>
            <input
              {...register("chiefName", { required: "Chef name is required" })}
              placeholder="Chef name here..."
              className={`w-full p-3 rounded-2xl border ${
                errors.chiefName ? "border-red-400" : "border-gray-400"
              } focus:border-green-600 outline-none shadow-sm`}
            />
            {errors.chiefName && (
              <p className="text-red-500 text-sm mt-1">
                {errors.chiefName.message}
              </p>
            )}
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Description
            </label>
            <textarea
              {...register("recipeDesc", {
                required: "Description is required",
              })}
              placeholder="Write cooking steps or description..."
              rows="4"
              className={`w-full p-3 rounded-2xl border ${
                errors.recipeDesc ? "border-red-400" : "border-gray-400"
              } focus:border-green-600 outline-none shadow-sm resize-none`}
            />
            {errors.recipeDesc && (
              <p className="text-red-500 text-sm mt-1">
                {errors.recipeDesc.message}
              </p>
            )}
          </div>

          {/* Categories */}
          <div>
            <label className="block text-sm font-medium mb-2">Categories</label>
            <input
              {...register("categories")}
              type="text"
              placeholder="e.g. Dessert, Vegan"
              className="w-1/2 p-3 rounded-2xl border border-gray-400 focus:border-green-600 outline-none shadow-sm"
            />
          </div>
        </div>

        {/* Right - Preview + Action */}
        <div className="flex flex-col items-center justify-between gap-6">
          <div className="w-full mt-6 h-72 md:h-[420px] flex items-center justify-center border border-gray-400 rounded-2xl shadow-sm overflow-hidden">
            {imgUrl ? (
              <img
                src={imgUrl}
                alt="preview"
                className="w-full h-full object-cover rounded-2xl"
              />
            ) : (
              <p className="text-gray-500">Image preview</p>
            )}
          </div>
          <button
            type="submit"
            className="w-full cursor-pointer py-3 rounded-2xl bg-gradient-to-r from-green-600 to-green-400 hover:from-green-700 hover:to-green-500 text-white transition font-medium shadow-md"
          >
            ✅ Create Recipe
          </button>
        </div>
      </form>
    </div>
  );
}

export default Create;