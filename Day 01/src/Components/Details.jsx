import React, { useContext, useState, useEffect } from "react";
import { RecipiesContext } from "./../Context/Recipe";
import { useParams } from "react-router-dom";

function Details() {
  const [imgUrl, setImgUrl] = useState("");
  const [data] = useContext(RecipiesContext);
  const param = useParams();

  // find the recipe instead of filter
  const recipe = data.find((obj) => String(obj.id) === String(param.id));

  useEffect(() => {
    if (recipe?.url) {
      setImgUrl(recipe.url);
    }
  }, [recipe]);



  return (
    <div className="min-h-screen bg-transparent text-white flex items-center justify-center p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl">
        {/* Left - Form */}
        <div className="flex flex-col gap-6">
          {/* Title */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Recipe Title
            </label>
            <input
              type="text"
              defaultValue={recipe?.recipeName || ""}
              placeholder="Enter recipe name"
              className="w-full p-3 rounded-2xl bg-transparent border border-gray-500 focus:border-white outline-none shadow-sm"
            />
          </div>

          {/* Image URL */}
          <div>
            <label className="block text-sm font-medium mb-2">Image URL</label>
            <input
              type="text"
              placeholder="Paste image link"
              value={imgUrl}
              onChange={(e) => setImgUrl(e.target.value)}
              className="w-full p-3 rounded-2xl bg-transparent border border-gray-500 focus:border-white outline-none shadow-sm"
            />
          </div>

          {/* Ingredients */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Ingredients
            </label>
            <textarea
              defaultValue={recipe?.recipeIngredients || ""}
              placeholder="List ingredients here..."
              rows="3"
              className="w-full p-3 rounded-2xl bg-transparent border border-gray-500 focus:border-white outline-none shadow-sm resize-none"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Description
            </label>
            <textarea
              defaultValue={recipe?.recipeDesc || ""}
              placeholder="Write cooking steps or description..."
              rows="4"
              className="w-full p-3 rounded-2xl bg-transparent border border-gray-500 focus:border-white outline-none shadow-sm resize-none"
            />
          </div>

          {/* Categories */}
          <div>
            <label className="block text-sm font-medium mb-2">Categories</label>
            <input
              type="text"
              defaultValue={recipe?.categories || ""}
              placeholder="e.g. Dessert, Vegan"
              className="w-1/2 p-3 rounded-2xl bg-transparent border border-gray-500 focus:border-white outline-none shadow-sm"
            />
          </div>
        </div>

        {/* Right - Preview + Action */}
        <div className="flex flex-col items-center justify-between gap-6">
          <div className="w-full h-72 md:h-[420px] flex items-center justify-center border border-gray-500 rounded-2xl shadow-sm overflow-hidden">
            {imgUrl ? (
              <img
                src={imgUrl}
                alt="preview"
                className="w-full h-full object-cover rounded-2xl"
              />
            ) : (
              <p className="text-gray-400">Image preview</p>
            )}
          </div>
          <button className="w-full cursor-pointer py-3 rounded-2xl border border-white bg-gradient-to-r from-gray-900 to-gray-700 hover:from-white hover:to-gray-200 hover:text-black transition font-medium shadow-md">
            Update Recipe
          </button>
        </div>
      </div>
    </div>
  );
}

export default Details;
