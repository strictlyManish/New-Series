import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { RecipiesContex } from "../context/Context";

function Details() {
  const { id } = useParams();
  const data = useContext(RecipiesContex);
  
  const recipe = ''

  

  if (!recipe) {
    return <div className="text-white text-center mt-10">Recipe not found</div>;
  }

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-gray-900 text-white rounded-2xl shadow-lg">
      <img
        src={recipe.url}
        alt={recipe.name}
        className="w-full h-64 object-cover rounded-lg"
      />
      <h1 className="text-3xl font-bold mt-5">{recipe.name}</h1>
      <p className="mt-2 text-gray-300">{recipe.description}</p>
      <p className="mt-3 text-sm text-gray-400 bg-gray-800 w-fit px-5 py-2 rounded-full">
        👨‍🍳 {recipe.chef}
      </p>
    </div>
  );
}

export default Details;
