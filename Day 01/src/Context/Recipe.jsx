import { createContext, useEffect, useState } from "react";

export const RecipiesContext = createContext(null);

function Recipe(prpops) {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(JSON.parse(localStorage.getItem("data"))) ||[];
  }, []);

  return (
    <RecipiesContext.Provider value={[data, setData]}>
      {prpops.children}
    </RecipiesContext.Provider>
  );
}

export default Recipe;
