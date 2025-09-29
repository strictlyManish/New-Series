import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChefHat, Heart, Search } from 'lucide-react';

function Home() {
  // Animation variants for staggering child elements
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  // Animation variants for individual items
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  // A simple feature card component for reusability
  const FeatureCard = ({ icon, title, description }) => (
    <motion.div
      variants={itemVariants}
      className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-2xl border border-white/10 text-center flex flex-col items-center"
    >
      <div className="bg-orange-500/10 p-4 rounded-full mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </motion.div>
  );

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* ===== Hero Section ===== */}
      <section className="h-screen flex items-center justify-center text-center relative overflow-hidden">
        {/* Background Image - Add your own image URL here */}
        <div 
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=2680&auto=format&fit=crop')" }}
        >
           {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/70"></div>
        </div>
        

        <motion.div
          className="relative z-10 p-4"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-4"
          >
            Cooking a Sunday Feast?
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-8"
          >
            Discover thousands of recipes from around the world. From classic Biryani to quick evening snacks, find your next favorite dish right here.
          </motion.p>
          <motion.div variants={itemVariants}>
            <Link to="/recipies">
              <motion.button
                className="bg-orange-500 text-white font-bold text-lg px-8 py-4 rounded-xl shadow-lg shadow-orange-500/20"
                whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgb(249, 115, 22)" }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                Explore All Recipes
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* ===== Features Section ===== */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible" // Animate when section scrolls into view
            viewport={{ once: true, amount: 0.3 }} // Animation triggers once
            variants={containerVariants}
          >
            <FeatureCard 
              icon={<Search size={32} className="text-orange-400" />}
              title="Find Recipes Fast"
              description="Our powerful search helps you find the perfect dish by ingredients, name, or category in seconds."
            />
            <FeatureCard 
              icon={<ChefHat size={32} className="text-orange-400" />}
              title="Expert Chefs"
              description="Learn from the best with recipes curated and shared by renowned chefs from all over India."
            />
            <FeatureCard 
              icon={<Heart size={32} className="text-orange-400" />}
              title="Save Your Favorites"
              description="Never lose a recipe you love. Save your favorites with a single click and build your personal cookbook."
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Home;