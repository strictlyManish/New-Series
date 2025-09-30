import React, { useContext } from "react";
import { RecipiesContext } from "./../Context/Recipe";
import RecipeCard from "../Components/RecipeCard";

function Recipies() {
  const [data] = useContext(RecipiesContext);
  return (
    <div className="font-sans  flex justify-center items-start min-h-screen p-10">
      <div className="flex justify-start items-start gap-5 flex-wrap">
        {data.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
}

export default Recipies;
