import React, { createContext, useState } from "react";
export const todoscontext = createContext(null);

function Wrapper({ children }) {
  const [todos, setTodos] = useState([
    { id: '9jirt', title: "Learn React", isComplete: false },
    { id: '9jidf', title: "Build a project", isComplete: false },
    { id: '9jirg', title: "Practice Context API", isComplete: true },
  ]);

  return (
    <todoscontext.Provider value={[todos, setTodos]}>
      {children}
    </todoscontext.Provider>
  );
}

export default Wrapper;
