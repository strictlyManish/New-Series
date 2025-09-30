import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function RecipeCard({ recipe }) {
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <motion.div variants={itemVariants} whileHover={{ y: -8, transition: { duration: 0.2 } }}>
      <Link to={`/details/${recipe.id}`} className="block">
        <div className="w-full rounded-2xl p-4 flex flex-col gap-4 bg-gray-800 shadow-lg hover:shadow-orange-500/20 transition-shadow duration-300 h-full">
          {/* Image */}
          <div className="w-full h-48 bg-gray-800 rounded-xl overflow-hidden">
            <img
              src={recipe.url}
              alt={recipe.recipeName}
              className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Details */}
          <div className="flex flex-col text-white flex-grow">
            <span className="text-lg font-bold truncate">{recipe.recipeName}</span>
            {/* Truncate description to 2 lines */}
            <span className="text-sm text-gray-400 mt-1 line-clamp-2">{recipe.recipeDesc}</span>
            <span className="text-xs text-gray-500 mt-2">By {recipe.chiefName}</span>
          </div>

          {/* Favorite Button */}
          <div className="flex justify-end mt-2">
            <motion.button
              className="px-4 py-2 bg-gray-800 text-sky-300 font-bold rounded-lg "
              whileHover={{ scale: 1.05, backgroundColor: 'rgba(249, 115, 22, 0.1)' }}
              whileTap={{ scale: 0.95 }}
            >
              MORE.
            </motion.button>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export default RecipeCard;