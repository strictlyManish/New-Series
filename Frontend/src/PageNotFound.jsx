import React from "react";
import { useParams, Link } from "react-router-dom";

function PageNotFound() {
  const params = useParams();

  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center text-center px-4">
      <h1 className="text-8xl font-bold animate-bounce">404</h1>
      
      <p className="text-gray-500 mt-2">
        We couldn’t find
        <span className="font-bold text-red-500 ml-1">{params["*"]}</span>
      </p>

      <Link
        to="/"
        className="mt-6 inline-block px-6 py-2 rounded text-white bg-gray-800 hover:bg-blue-700 transition-all duration-300 shadow-md"
      >
        Go Back Home
      </Link>

      <div className="absolute bottom-6 text-gray-400 text-sm">
        "Looks like you're lost..."
      </div>
    </div>
  );
}

export default PageNotFound;
