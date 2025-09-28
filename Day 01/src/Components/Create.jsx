import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import {nanoid} from "nanoid";
import { RecipiesContext } from "../Context/Recipe";
import {toast} from "react-toastify";
import { useNavigate } from "react-router";

function CreateRecipe() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [data,setData] = useContext(RecipiesContext);
  
  const navigate = useNavigate()

  const creatrecipies = (newrecipe) => {
    newrecipe.id =nanoid(4);
    setData([...data,newrecipe])
    reset();
    toast.success('Recipes Created')
    navigate('/recipies');
  };

  return (
    <div className="text-white min-h-screen flex justify-center items-center overflow-hidden">
      <div className="rounded-2xl p-8 w-full max-w-3xl">
        {/* Heading */}
        <h2 className="text-lg font-bold mb-6">Create a single recipe</h2>

        {/* Form */}
        <form onSubmit={handleSubmit(creatrecipies)}>
          <div className="flex flex-col md:flex-row gap-6">
            {/* Form Section */}
            <div className="flex-1 space-y-2">
              {/* Recipe URL */}
              <div>
                <input
                  type="text"
                  placeholder="Drop a URL for a single recipe"
                  className="w-full p-3 rounded-md bg-gray-600 text-white placeholder-gray-400 focus:outline-none"
                  {...register("url", {
                    required: "Recipe URL is required",
                    pattern: {
                      value: /^(ftp|http|https):\/\/[^ "]+$/,
                      message: "Enter a valid URL",
                    },
                  })}
                />
                {errors.url && (
                  <p className="text-red-400 text-[10px] ">{errors.url.message}</p>
                )}
              </div>

              {/* Recipe Name */}
              <div>
                <input
                  type="text"
                  placeholder="Recipe name"
                  className="w-full p-3 rounded-md bg-gray-600 text-white placeholder-gray-400 focus:outline-none"
                  {...register("recipeName", {
                    required: "Recipe name is required",
                    minLength: { value: 3, message: "At least 3 characters" },
                  })}
                />
                {errors.recipeName && (
                  <p className="text-red-400 text-[10px] ">{errors.recipeName.message}</p>
                )}
              </div>

              {/* Chef Name */}
              <div>
                <input
                  type="text"
                  placeholder="Chef name"
                  className="w-full p-3 rounded-md bg-gray-600 text-white placeholder-gray-400 focus:outline-none"
                  {...register("chiefName", {
                    required: "Chef name is required",
                  })}
                />
                {errors.chiefName && (
                  <p className="text-red-400 text-[10px] ">{errors.chiefName.message}</p>
                )}
              </div>

              {/* Recipe Description */}
              <div>
                <textarea
                  placeholder="Recipe description..."
                  rows="3"
                  className="w-full p-2 rounded-md bg-gray-600 text-white placeholder-gray-400 focus:outline-none resize-none"
                  {...register("recipeDesc", {
                    required: "Description is required",
                    minLength: { value: 10, message: "At least 10 characters" },
                  })}
                ></textarea>
                {errors.recipeDesc && (
                  <p className="text-red-400 text-[10px] ">{errors.recipeDesc.message}</p>
                )}
              </div>

              {/* Ingredients */}
              <div>
                <textarea
                  placeholder="Recipe ingredients..."
                  rows="2"
                  className="w-full p-2 rounded-md bg-gray-600 text-white placeholder-gray-400 focus:outline-none resize-none"
                  {...register("recipeIngredients", {
                    required: "Ingredients are required",
                  })}
                ></textarea>
                {errors.recipeIngredients && (
                  <p className="text-red-400 text-[10px] ">
                    {errors.recipeIngredients.message}
                  </p>
                )}
              </div>

              {/* Categories */}
              <div>
                <input
                  type="text"
                  placeholder="Categories..."
                  className="w-full p-3 rounded-md bg-gray-600 text-white placeholder-gray-400 focus:outline-none"
                  {...register("categories", {
                    required: "Category is required",
                  })}
                />
                {errors.categories && (
                  <p className="text-red-400 text-[10px] ">
                    {errors.categories.message}
                  </p>
                )}
              </div>
            </div>

            {/* Image Circle */}
            <div className="flex justify-center md:justify-start">
              <div className="flex items-center justify-center w-32 h-32 md:w-40 md:h-40 rounded-full text-center overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGl6emF8ZW58MHx8MHx8fDA%3D"
                  className="object-cover"
                  alt="recipe"
                />
              </div>
            </div>
          </div>

          {/* Create Button */}
          <div className="flex justify-end mt-6">
            <button
              type="submit"
              className="px-6 py-2 mb-25 border cursor-pointer rounded-md font-semibold hover:bg-white hover:text-black transition"
            >
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateRecipe;
