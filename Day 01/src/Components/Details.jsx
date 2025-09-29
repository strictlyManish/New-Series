import React, { useContext, useMemo } from "react";
import { RecipiesContext } from "../Context/Recipe";
import { useNavigate, useParams, Link } from "react-router-dom";
import { motion } from "framer-motion"; // Import motion

function Details() {
  const [data] = useContext(RecipiesContext);
  const { id } = useParams();
  const navigate = useNavigate(); // Corrected typo: 'navigate'

  // More efficient: Use .find() instead of .filter() to get a single object.
  // useMemo prevents recalculating this on every render unless data or id changes.
  const recipe = useMemo(() => data.find((obj) => id === obj.id), [data, id]);

  // Handler for the favorite button (you can add your logic here)
  const handleFavorite = () => {
    alert(`Added ${recipe.recipeName} to favorites!`);
    // Example: addToFavorites(recipe.id);
  };

  // Graceful handling if data is loading or recipe not found
  if (!recipe) {
    return (
      <div className="flex flex-col items-center justify-center h-screen text-white">
        <h2 className="text-2xl font-bold mb-4">Recipe not found! 😢</h2>
        <Link to="/recipes" className="px-6 py-2 rounded-lg bg-orange-500 hover:bg-orange-600 transition">
          Go Back to Recipes
        </Link>
      </div>
    );
  }

  // Animation variants for the main container
  const pageVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
    exit: { opacity: 0, y: -50, transition: { duration: 0.4 } },
  };

  return (
    <motion.div
      className="max-w-6xl w-full h-full my-10 mx-auto text-white rounded-2xl overflow-hidden 
                 flex flex-col md:flex-row bg-gray-800 shadow-2xl shadow-black/50"
      variants={pageVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      {/* ===== Image Section (Responsive) ===== */}
      <div className="w-full md:w-1/2 h-80 md:h-auto">
        <img 
          src={recipe.url} 
          alt={recipe.recipeName} 
          className="w-full h-full object-cover" 
        />
      </div>

      {/* ===== Content Section (Responsive & Animated) ===== */}
      <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-between">
        <div>
          <motion.h1 
            className="font-extrabold uppercase text-orange-500 text-3xl md:text-4xl mb-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0, transition: { delay: 0.2, duration: 0.5 } }}
          >
            {recipe.recipeName}
          </motion.h1>
          <p className="font-semibold text-gray-400 text-lg mb-6">by {recipe.chiefName}</p>

          <div className="space-y-5 text-gray-200">
            <div>
              <h3 className="font-bold text-lg mb-2 text-orange-400">INGREDIENTS</h3>
              {/* Display ingredients as a list for better readability */}
              <ul className="list-disc list-inside pl-2 font-light space-y-1">
                {recipe.recipeIngredients.split(',').map((item, index) => (
                  <li key={index}>{item.trim()}</li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-2 text-orange-400">DESCRIPTION</h3>
              <p className="font-medium leading-relaxed">{recipe.recipeDesc}</p>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-2 text-orange-400">CATEGORIES</h3>
              <p className="font-mono text-gray-300 bg-gray-700 inline-block px-3 py-1 rounded-md">{recipe.categories}</p>
            </div>
          </div>
        </div>

        {/* ===== Button Section (Animated) ===== */}
        <div className="flex gap-4 justify-end mt-8">
          <motion.button
            onClick={handleFavorite}
            className="px-5 py-2 rounded-lg border border-orange-500 text-orange-500 font-semibold"
            whileHover={{ scale: 1.05, backgroundColor: 'rgba(249, 115, 22, 0.1)' }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            FAVORITE
          </motion.button>
          <motion.button
            onClick={() => navigate("/recipies")}
            className="px-5 py-2 rounded-lg bg-orange-500 text-white font-semibold"
            whileHover={{ scale: 1.05, boxShadow: "0px 0px 8px rgb(249, 115, 22)" }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            BACK
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}

export default Details;