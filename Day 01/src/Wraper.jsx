import React, { createContext, useState } from "react";

export const todocontex = createContext(null);

function Wraper(propps) {
  const [todos, setTodos] = useState([
    {
      title: "implimentation of databse is databse is preform",
      id: "86d54r",
      isComplited: false,
    },
    { title: "Vector databse", id: "8654r", isComplited: false },
  ]);

  return (
    <todocontex.Provider value={[todos, setTodos]}>
      {propps.children}
    </todocontex.Provider>
  );
}

export default Wraper;
