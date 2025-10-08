import React, { useEffect } from "react";
import { getasyncgetusers } from "./store/userAction";
import { useDispatch, useSelector } from "react-redux";
function App() {

  const diapatch = useDispatch();
  const data = useSelector((state)=>state.user)

  console.log(data)


  useEffect(()=>{
    diapatch(getasyncgetusers())
  },[])

  return (
    <div className="bg-gray-700 h-screen w-screen font-thin text-white px-5 py-5">
      <button>Automatically Fetching</button>
    </div>
  );
}

export default App;
