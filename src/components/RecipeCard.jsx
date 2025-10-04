import { Link } from "react-router-dom";

function RecipeCard({ value }) {
  return (
    <Link to={`/recipes/${value.id}`} key={value.id}>
      <div className="bg-gray-900 rounded-2xl w-72 p-3 shadow-md hover:scale-105 transition-transform duration-200">
        <div className="w-full h-40 overflow-hidden rounded-lg">
          <img
            src={value.url}
            alt={value.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="mt-3 text-white">
          <h1 className="text-lg font-bold">{value.name}</h1>
          <p className="text-sm text-gray-300">{value.description}</p>
          <p className="mt-1 text-xs text-white bg-pink-800 w-fit px-5 py-2 rounded-full backdrop-blur-md">
            👨‍🍳 {value.chef}
          </p>
        </div>
      </div>
    </Link>
  );
}

export default RecipeCard;
