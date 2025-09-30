import React, { useContext } from "react";
import { RecipiesContext } from "./../Context/Recipe";
import RecipeCard from "../Components/RecipeCard";
import Loader from './../Components/Loader';

function Recipies() {
  const [data] = useContext(RecipiesContext);

  if (!data || data.length === 0) {
    return (
      <div className="font-sans flex justify-center items-center min-h-screen p-10 text-gray-400 text-xl">
        <Loader/>
      </div>
    );
  }

  return (
    <div className="font-sans flex justify-center items-start min-h-screen p-10">
      <div className="flex justify-start items-start gap-5 flex-wrap">
        {data.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
}

export default Recipies;
