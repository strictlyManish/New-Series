import React from "react";
import axios from './api/axiosconfig';
function App() {


  const getproduct = async () =>{
    try {
      const {data} = await axios.get('products');

      console.log(data)

    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="bg-gray-700 h-screen w-screen font-thin text-white px-5 py-5">
      <button onClick={getproduct} >Fetch</button>
    </div>
  );
}

export default App;
