import React, { createContext, useState } from "react";

export const RecipiesContex = createContext(null);

function Context({ children }) {
  const [data, setData] = useState([
    {
      id: "rtptr",
      name: "Margreta Pizza",
      ingredients: "Cheese, Tomato, Basil",
      description: "Classic Italian pizza with fresh mozzarella and basil.",
      url: "https://images.pexels.com/photos/34118353/pexels-photo-34118353.jpeg",
      chef: "Xian Zoo",
    },
    {
      id: "rtptr2",
      name: "Pepperoni Pizza",
      ingredients: "Cheese, Tomato, Pepperoni",
      description: "Savory pizza topped with slices of pepperoni.",
      url: "https://images.pexels.com/photos/4109115/pexels-photo-4109115.jpeg",
      chef: "Lina Chen",
    },
  ]);

  return (
    <RecipiesContex.Provider value={[data, setData]}>
      {children}
    </RecipiesContex.Provider>
  );
}
export default Context;
