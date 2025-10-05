import React, { createContext, useEffect, useState } from "react";

export const RecipiesContex = createContext(null);

function Context({ children }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(JSON.parse(localStorage.getItem("data")) || []);
  }, []);

  return (
    <RecipiesContex.Provider value={[data, setData]}>
      {children}
    </RecipiesContex.Provider>
  );
}
export default Context;
