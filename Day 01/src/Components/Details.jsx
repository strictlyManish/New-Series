import React, { useContext, useState, useEffect } from "react";
import { RecipiesContext } from "./../Context/Recipe";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Details() {
  const [imgUrl, setImgUrl] = useState("");
  const [recipeData, setRecipeData] = useState({
    recipeName: "",
    recipeIngredients: "",
    recipeDesc: "",
    categories: "",
  });

  const [data, setData] = useContext(RecipiesContext);
  const param = useParams();
  const navigate = useNavigate();

  // Find the recipe by id
  const recipe = data.find((obj) => String(obj.id) === String(param.id));

  useEffect(() => {
    if (!recipe) {
      toast.error("Recipe not found!");
      navigate("/recipies");
    } else {
      setImgUrl(recipe.url || "");
      setRecipeData({
        recipeName: recipe.recipeName || "",
        recipeIngredients: recipe.recipeIngredients || "",
        recipeDesc: recipe.recipeDesc || "",
        categories: recipe.categories || "",
      });
    }
  }, [recipe, navigate]);

  const handleUpdate = () => {
    const updatedData = data.map((item) =>
      item.id === recipe.id ? { ...item, ...recipeData, url: imgUrl } : item
    );
    setData(updatedData);
    toast.success("Recipe updated successfully!");
    navigate("/recipies");
  };

  const handleDelete = (id) => {
    const updatedData = data.filter((item) => item.id !== id);
    setData(updatedData);
    toast.success("Recipe deleted successfully!");
    navigate("/recipies");
  };

  return (
    <div className="h-screen w-screen px-10 py-6 overflow-x-hidden text-gray-100 flex items-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl  p-8 rounded-2xl">
        {/* Left - Form */}
        <div className="flex flex-col gap-6">
          {["recipeName", "recipeIngredients", "recipeDesc", "categories"].map(
            (field) => (
              <div key={field}>
                <label className="block text-sm font-medium mb-2 capitalize">
                  {field === "recipeName"
                    ? "Recipe Title"
                    : field === "recipeIngredients"
                    ? "Ingredients"
                    : field === "recipeDesc"
                    ? "Description"
                    : "Categories"}
                </label>
                {field === "recipeIngredients" || field === "recipeDesc" ? (
                  <textarea
                    rows={field === "recipeDesc" ? 4 : 3}
                    value={recipeData[field]}
                    onChange={(e) =>
                      setRecipeData({ ...recipeData, [field]: e.target.value })
                    }
                    placeholder={`Enter ${field}`}
                    className="w-full p-3 rounded-2xl border border-gray-400 focus:border-green-600 outline-none shadow-sm resize-none"
                  />
                ) : (
                  <input
                    type="text"
                    value={recipeData[field]}
                    onChange={(e) =>
                      setRecipeData({ ...recipeData, [field]: e.target.value })
                    }
                    placeholder={`Enter ${field}`}
                    className="w-full p-3 rounded-2xl border border-gray-400 focus:border-green-600 outline-none shadow-sm"
                  />
                )}
              </div>
            )
          )}

          {/* Image URL */}
          <div>
            <label className="block text-sm font-medium mb-2">Image URL</label>
            <input
              type="text"
              placeholder="Paste image link"
              value={imgUrl}
              onChange={(e) => setImgUrl(e.target.value)}
              className="w-full p-3 rounded-2xl border border-gray-400 focus:border-green-600 outline-none shadow-sm"
            />
          </div>
        </div>

        {/* Right - Preview + Action */}
        <div className="flex flex-col items-center justify-between gap-6">
          <div className="w-full h-72 md:h-[420px] flex items-center justify-center border border-gray-400 rounded-2xl shadow-sm overflow-hidden">
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
            onClick={() => handleDelete(recipe.id)}
            className="w-full cursor-pointer py-3 rounded-2xl bg-gradient-to-r from-red-600 to-red-400 hover:from-red-700 hover:to-red-500 text-white transition font-medium shadow-md"
          >
            ❌ Delete Recipe
          </button>
          <button
            onClick={handleUpdate}
            className="w-full cursor-pointer py-3 rounded-2xl bg-gradient-to-r from-green-600 to-green-400 hover:from-green-700 hover:to-green-500 text-white transition font-medium shadow-md"
          >
            ✅ Update Recipe
          </button>
        </div>
      </div>
    </div>
  );
}

export default Details;
