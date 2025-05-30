import React, { useState } from 'react';
import { ChefHat, Star, Clock, ArrowRight, Heart, Plus } from 'lucide-react';

const TodaySpl = () => {
  const [favorites, setFavorites] = useState(new Set());
  const [hoveredItem, setHoveredItem] = useState(null);

  const specials = [
    {
      id: 3,
      name: "Steak & Fries",
      category: "Dinner",
      price: "$28.99",
      originalPrice: "$34.99",
      image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?w=300&h=200&fit=crop",
      rating: 4.7,
      prepTime: "25 min",
      description: "Prime cut steak cooked to perfection with crispy golden fries"
    },
    {
      id: 5,
      name: "Margherita Pizza",
      category: "Dinner",
      price: "$18.99",
      originalPrice: "$21.99",
      image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=300&h=200&fit=crop",
      rating: 4.8,
      prepTime: "18 min",
      description: "Wood-fired pizza with fresh mozzarella, basil, and San Marzano tomatoes"
    },
    {
      id: 6,
      name: "Seafood Pasta",
      category: "Dinner",
      price: "$24.99",
      originalPrice: "$29.99",
      image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=300&h=200&fit=crop", // Note: This image URL is duplicated, consider changing for variety
      rating: 4.9,
      prepTime: "22 min",
      description: "Fresh linguine with mixed seafood in a rich white wine sauce"
    },
    {
      id: 7,
      name: "Grilled Salmon",
      category: "Dinner",
      price: "$26.99",
      originalPrice: "$30.99",
      image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=300&h=200&fit=crop",
      rating: 4.8,
      prepTime: "20 min",
      description: "Fresh Atlantic salmon with herbs and lemon butter sauce"
    },
    {
      id: 8,
      name: "BBQ Ribs",
      category: "Dinner",
      price: "$32.99",
      originalPrice: "$36.99",
      image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=300&h=200&fit=crop", // Note: This image URL is duplicated, consider changing for variety
      rating: 4.6,
      prepTime: "30 min",
      description: "Tender pork ribs with smoky BBQ sauce and coleslaw"
    },
    {
      id: 9,
      name: "Lamb Chops",
      category: "Dinner",
      price: "$35.99",
      originalPrice: "$39.99",
      image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=300&h=200&fit=crop",
      rating: 4.9,
      prepTime: "28 min",
      description: "Herb-crusted lamb chops with roasted vegetables"
    }
  ];

  const toggleFavorite = (id) => {
    // Stop propagation to prevent card hover effects from triggering
    // when clicking the favorite button.
    // e.stopPropagation(); // This should be called in the onClick handler directly

    const newFavorites = new Set(favorites);
    if (newFavorites.has(id)) {
      newFavorites.delete(id);
    } else {
      newFavorites.add(id);
    }
    setFavorites(newFavorites);
  };

  return (
    // Main section container
    <section 
      className="relative py-1 px-4 sm:px-6 lg:px-8"  id="TodaySpl" // Reduced py from py-2 to py-1
      style={{
        backgroundImage: " url('https://www.centricsoftware.com/wp-content/uploads/2024/06/24Q2_NAM_CAM_ALL_Retail_Grocery_Private_Label_LP_Banner_1920_x_650.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Optional subtle texture overlay */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/subtle-white-feathers.png')] opacity-10"></div>
      
      {/* Content wrapper with z-index to be above the overlay */}
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Compact Header */}
        <div className="text-center mb-8"> {/* Reduced mb from mb-12 to mb-8 */}
          {/* Chef Hat Icon */}
          <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full mb-5 shadow-lg transform transition-all duration-300 hover:rotate-12 hover:scale-110">
            <ChefHat className="w-7 h-7 text-white" />
          </div>
          {/* Section Title */}
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-gray-900 via-amber-800 to-orange-600 bg-clip-text text-transparent mb-3">
            Today's Specials
          </h2>
          {/* Section Subtitle */}
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Discover our chef-recommended dinner specialties
          </p>
        </div>

        {/* Horizontal Scrollable Cards */}
        <div className="relative mb-6"> {/* Reduced mb from mb-10 to mb-6 */}
          {/* Flex container for horizontal scrolling */}
          <div className="flex overflow-x-auto scrollbar-hide gap-6 pb-6 snap-x snap-mandatory">
            {specials.map((item) => (
              // Individual Card
              <div
                key={item.id}
                className="flex-none w-72 sm:w-80 bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl snap-start border border-white/20"
                onMouseEnter={() => setHoveredItem(item.id)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                {/* Image Container */}
                <div className="relative h-44 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    onError={(e) => {
                      // Fallback image in case the original image fails to load
                      e.target.onerror = null; 
                      e.target.src="https://placehold.co/300x200/f97316/white?text=Image+Not+Found";
                    }}
                  />
                  
                  {/* Gradient Overlay on Image */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent"></div>
                  
                  {/* Favorite Heart Button */}
                  <button
                    onClick={(e) => { e.stopPropagation(); toggleFavorite(item.id); }}
                    className={`absolute top-3 right-3 p-2 rounded-full backdrop-blur-sm transition-all duration-300 transform hover:scale-110 ${
                      favorites.has(item.id) 
                        ? 'bg-red-500/90 text-white shadow-md' 
                        : 'bg-white/90 text-gray-600 hover:bg-red-50 hover:text-red-500'
                    }`}
                    aria-label={favorites.has(item.id) ? "Remove from favorites" : "Add to favorites"}
                  >
                    <Heart className={`w-4 h-4 ${favorites.has(item.id) ? 'fill-current' : ''}`} />
                  </button>

                  {/* Category Badge */}
                  <div className="absolute top-3 left-3 bg-amber-500/95 text-white px-3 py-1 rounded-full text-xs font-medium shadow-md">
                    {item.category}
                  </div>

                  {/* Rating & Prep Time - visible on hover */}
                  <div className={`absolute bottom-3 left-3 right-3 flex justify-between items-center transition-all duration-300 ${
                    hoveredItem === item.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none' // Added pointer-events-none when hidden
                  }`}>
                    {/* Rating */}
                    <div className="flex items-center space-x-1 bg-white/95 backdrop-blur-sm rounded-full px-3 py-1 shadow-sm">
                      <Star className="w-3.5 h-3.5 text-amber-400 fill-current" />
                      <span className="text-xs font-medium text-gray-800">{item.rating}</span>
                    </div>
                    {/* Prep Time */}
                    <div className="flex items-center space-x-1 bg-white/95 backdrop-blur-sm rounded-full px-3 py-1 shadow-sm">
                      <Clock className="w-3.5 h-3.5 text-gray-600" />
                      <span className="text-xs font-medium text-gray-800">{item.prepTime}</span>
                    </div>
                  </div>
                </div>

                {/* Card Content Area */}
                <div className="p-5">
                  {/* Item Name and Price */}
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-lg font-bold text-gray-900 hover:text-amber-600 transition-colors duration-300 line-clamp-1">
                      {item.name}
                    </h3>
                    <div className="text-right ml-2 flex-shrink-0"> {/* Added flex-shrink-0 to prevent price from wrapping too early */}
                      <span className="text-xl font-bold text-amber-600">{item.price}</span>
                      <div className="text-xs text-gray-400 line-through">{item.originalPrice}</div>
                    </div>
                  </div>
                  
                  {/* Item Description */}
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {item.description}
                  </p>

                  {/* Add to Cart Button */}
                  <button className="w-full bg-gradient-to-r from-amber-500 to-orange-500 text-white py-2.5 px-4 rounded-lg font-medium transition-all duration-300 transform hover:from-amber-600 hover:to-orange-600 hover:shadow-md hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center space-x-2 group/btn">
                    <Plus className="w-4 h-4 transition-transform duration-300 group-hover/btn:rotate-90" />
                    <span className="text-sm">Add to Cart</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          {/* Scroll Indicators for Mobile (dots) */}
          <div className="flex justify-center mt-6 space-x-2 md:hidden">
            {specials.map((_, index) => (
              <div key={index} className="w-2.5 h-2.5 bg-amber-400/30 rounded-full transition-all duration-300 hover:bg-amber-500"></div>
            ))}
          </div>
        </div>

        {/* Call to Action Button */}
        <div className="text-center mt-6"> {/* Reduced mt from mt-8 to mt-6 */}
          <button className="group relative inline-flex items-center px-8 py-3.5 bg-gradient-to-r from-amber-600 via-orange-500 to-red-500 text-white text-base font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 overflow-hidden">
            {/* Animated Shine Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
            <span className="relative flex items-center space-x-2">
              <span>View Full Menu</span>
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-2" />
            </span>
          </button>
        </div>
      </div>

      {/* Inline CSS for scrollbar hiding and line clamping */}
      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none; /* Firefox */
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none; /* Safari and Chrome */
        }
        .line-clamp-1 {
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .snap-x {
          scroll-snap-type: x mandatory;
        }
        .snap-start {
          scroll-snap-align: start;
        }
      `}</style>
    </section>
  );
};

export default TodaySpl;