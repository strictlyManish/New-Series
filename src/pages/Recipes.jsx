import React, { useContext } from "react";
import { RecipiesContex } from "./../context/Context";
import RecipeCard from "./../components/RecipeCard";

function Recipes() {
  const [data] = useContext(RecipiesContex);

  return (
    <div className="flex gap-5">
      {data.map((obj) => (
        <RecipeCard key={obj.id} value={obj} />
      ))}
    </div>
  );
}

export default Recipes;
