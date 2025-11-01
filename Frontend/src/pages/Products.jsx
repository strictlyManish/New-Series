import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { ShoppingCart, Star } from 'lucide-react';

function Products() {
  const products = useSelector((state) => state.productReducer.products);
  
  if (!products || products.length === 0) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="inline-block h-12 w-12 animate-spin rounded-full border-4 border-solid border-blue-500 border-r-transparent mb-4"></div>
          <h2 className="text-xl text-gray-300">Loading products...</h2>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen  px-4 sm:px-6 lg:px-8 py-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">Our Products</h1>
          <p className="text-gray-400">Discover amazing deals on quality products</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((obj) => (
            <Link
              key={obj.id}
              to={`/product/${obj.id}`}
              className="group bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-1"
            >
              {/* Image Container */}
              <div className="relative bg-white/5 p-6 h-48 flex items-center justify-center overflow-hidden">
                <img
                  src={obj.image}
                  alt={obj.title}
                  className="max-h-full max-w-full object-contain group-hover:scale-110 transition-transform duration-300"
                />
                
              </div>

              {/* Content Container */}
              <div className="p-5">
                {/* Category Badge */}
                <span className="inline-block bg-gray-700/50 text-gray-300 text-xs font-medium px-3 py-1 rounded-full mb-3">
                  {obj.category}
                </span>

                {/* Title */}
                <h2 className="text-white font-semibold text-base mb-2 line-clamp-2 min-h-12 group-hover:text-blue-400 transition-colors">
                  {obj.title}
                </h2>

                {/* Description */}
                <p className="text-gray-400 text-sm mb-4 line-clamp-2 min-h-10">
                  {obj.description}
                </p>

                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-2xl font-bold text-white">
                      ${obj.price}
                    </span>
                  </div>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      // Add to cart logic here
                    }}
                    className="bg-blue-600 hover:bg-blue-500 text-white p-2 rounded-lg transition-colors duration-200"
                  >
                    <ShoppingCart size={18} />
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Products;