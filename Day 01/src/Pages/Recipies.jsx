import React, { useContext } from "react";
import { RecipiesContext } from "../Context/Recipe";

function Recipies() {
  const [data] = useContext(RecipiesContext);

  if (!data || data.length === 0) {
    return <p className="text-white mt-5">No recipes found.</p>;
  }

  return (
    <div className="flex gap-4 mt-5 flex-wrap min-h-screen overflow-y-hidden">
      {data.map((obj) => (
        <div
          key={obj.id}
          className="w-72 rounded-2xl  p-4 flex flex-col gap-4 bg-gray-900 hover:shadow-2xl"
        >
          {/* Image */}
          <div className="w-full h-40 bg-gray-800 rounded-xl flex items-center justify-center overflow-hidden">
            <img
              src={obj.url}
              alt={obj.recipeName}
              className="w-full h-full object-cover hover:scale-105 transition-all"
            />
          </div>

          {/* Details */}
          <div className="flex flex-col text-white font-semibold">
            <span className="text-lg">{obj.recipeName}</span>
            <span className="text-sm text-gray-300">{obj.recipeDesc}</span>
            <span className="text-sm text-gray-400">By {obj.chiefName}</span>
          </div>

          {/* Favorite Button */}
          <div className="flex justify-end">
            <button className="px-4 py-1 bg-gray-800 text-white font-bold rounded-lg border border-white/50 hover:bg-gray-700 transition">
              FAVORITE
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Recipies;
