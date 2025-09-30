import { useContext, useEffect } from "react";
import { RecipiesContext } from "./../Context/Recipe";
import { useParams, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

function Details() {
  const [data, setData] = useContext(RecipiesContext);
  const params = useParams();
  const navigate = useNavigate();
  const recipe = data.find((obj) => obj.id == params.id);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: recipe,
  });

  const imageUrl = watch("url");

  const updateRecipe = (updatedData) => {
    const recipeIndx = data.findIndex((obj) => obj.id == params.id);
    const copydata = [...data];
    copydata[recipeIndx] = { ...copydata[recipeIndx], ...updatedData };

    setData(copydata);
    toast.success("Recipe updated");
    navigate("/recipies");
  };



  const favbtn = (recipeToAdd) => {
    const existingFavs = JSON.parse(localStorage.getItem("fav")) || [];
    const isAlreadyFav = existingFavs.some((fav) => fav.id === recipeToAdd.id);
    if (isAlreadyFav) {
      toast.info("Recipe is already in your favorites! 😉");
    } else {
      const updatedFavs = [...existingFavs, recipeToAdd];
      localStorage.setItem("fav", JSON.stringify(updatedFavs));
      toast.success("Added to favorites! ❤️");
    }
  };


  if (!recipe) {
    return (
      <div className="text-center mt-20">
        <h1 className="text-2xl font-bold">Recipe not found! 😥</h1>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-10 mt-10">
      <h1 className="text-4xl font-bold mb-8">Edit Your Recipe</h1>
      <form onSubmit={handleSubmit(updateRecipe)} className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Form Fields Column */}
          <div className="flex-1 space-y-4">
            {/* Input fields for various recipe details */}
            <div>
              <label className="block mb-1 text-sm font-medium">
                Recipe Name
              </label>
              <input
                type="text"
                className="w-full p-3 rounded-md bg-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                {...register("recipeName", {
                  required: "Recipe name is required",
                  minLength: { value: 3, message: "At least 3 characters" },
                })}
              />
              {errors.recipeName && (
                <p className="text-red-400 text-xs mt-1">
                  {errors.recipeName.message}
                </p>
              )}
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium">
                Image URL
              </label>
              <input
                type="text"
                className="w-full p-3 rounded-md bg-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                {...register("url", {
                  required: "Image URL is required",
                  pattern: {
                    value: /^(ftp|http|https):\/\/[^ "]+$/,
                    message: "Enter a valid URL",
                  },
                })}
              />
              {errors.url && (
                <p className="text-red-400 text-xs mt-1">
                  {errors.url.message}
                </p>
              )}
            </div>

            {/* Other input fields follow the same pattern... */}
            <div>
              <label className="block mb-1 text-sm font-medium">
                Chef Name
              </label>
              <input
                type="text"
                className="w-full p-3 rounded-md bg-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                {...register("chiefName", {
                  required: "Chef name is required",
                })}
              />
              {errors.chiefName && (
                <p className="text-red-400 text-xs mt-1">
                  {errors.chiefName.message}
                </p>
              )}
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium">
                Categories
              </label>
              <input
                type="text"
                className="w-full p-3 rounded-md bg-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                {...register("categories", {
                  required: "Category is required",
                })}
              />
              {errors.categories && (
                <p className="text-red-400 text-xs mt-1">
                  {errors.categories.message}
                </p>
              )}
            </div>
          </div>

          {/* Textareas & Image Preview Column */}
          <div className="flex-1 space-y-4">
            <label className="block mb-1 text-sm font-medium">
              Image Preview
            </label>
            <div className="w-full relative h-48 rounded-lg overflow-hidden bg-gray-700 flex items-center justify-center">
              <div
                onClick={() => favbtn(recipe)}
                className="hover:scale-110 cursor-pointer transition-all absolute top-0 right-0 p-2 text-2xl backdrop:blur-xl rounded"
              >
                ❤️
              </div>
              {imageUrl ? (
                <img
                  src={imageUrl}
                  alt="Recipe Preview"
                  className="object-cover w-full h-full"
                />
              ) : (
                <span className="text-gray-400">Image will appear here</span>
              )}
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium">
                Description
              </label>
              <textarea
                rows="4"
                className="w-full p-2 rounded-md bg-gray-700 placeholder-gray-400 focus:outline-none resize-none focus:ring-2 focus:ring-blue-500"
                {...register("recipeDesc", {
                  required: "Description is required",
                  minLength: { value: 10, message: "At least 10 characters" },
                })}
              />
              {errors.recipeDesc && (
                <p className="text-red-400 text-xs mt-1">
                  {errors.recipeDesc.message}
                </p>
              )}
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium">
                Ingredients
              </label>
              <textarea
                rows="4"
                className="w-full p-2 rounded-md bg-gray-700 placeholder-gray-400 focus:outline-none resize-none focus:ring-2 focus:ring-blue-500"
                {...register("recipeIngredients", {
                  required: "Ingredients are required",
                })}
              />
              {errors.recipeIngredients && (
                <p className="text-red-400 text-xs mt-1">
                  {errors.recipeIngredients.message}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-end gap-5 mt-8">
          <button
            type="submit"
            className="px-8 py-3 cursor-pointer bg-blue-600 text-white rounded-md font-semibold hover:bg-blue-700 transition-colors"
          >
            Update Recipe
          </button>
        </div>
      </form>
    </div>
  );
}

export default Details;
