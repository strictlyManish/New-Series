import axios from "../utils/axios";
import React, { useEffect } from "react";

function Home() {
  const getproduct = async () => {
    const { data } = await axios.get("products");

    const newdata = data.filter((obj)=> obj.id < 5);
    console.log(newdata)
  };

  useEffect(() => {
    getproduct();
  }, []);

  return (
    <div className="h-screen">
      <h1>Home page renderd</h1>
    </div>
  );
}

export default Home;
