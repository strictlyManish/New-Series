import {Link} from 'react-router-dom';

const EyeIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-6 w-6 text-zinc-800"
  >
    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

function RecipeCard({ recipe }) {
  return (
    <Link to={`/recipies/${recipe.id}`}>
      <div className="bg-[#3e3e3e4b] text-white rounded-3xl overflow-hidden shadow-2xl max-w-xs w-full font-serif">
        {/* Image Section */}
        <div className="relative">
          <img
            src={recipe.url}
            alt="Spicy Chickpea Curry"
            className="w-full h-55 object-cover"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src =
                "https://placehold.co/400x600/202020/ffffff?text=Curry";
            }}
          />
          <button className="cursor-pointer absolute bottom-4 right-4 bg-white/90 text-black rounded-full h-12 w-12 flex items-center justify-center shadow-lg backdrop-blur-sm hover:bg-white transition-colors duration-300">
            <EyeIcon />
          </button>
        </div>

        {/* Content Section */}
        <div className="p-7">
          <h2 className="text-2xl font-bold text-white leading-tight">
            {recipe.recipeName}
          </h2>
          <p className="text-zinc-400 mt-2 font-sans text-base leading-relaxed line-clamp-2">
            {recipe.recipeDesc}
          </p>
        </div>
      </div>
    </Link>
  );
}

export default RecipeCard;
