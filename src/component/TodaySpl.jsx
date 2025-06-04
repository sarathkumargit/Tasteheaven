import React, { useState, useEffect, useRef } from 'react';
import { ChefHat, Star, Clock, ArrowRight, Heart, Plus, ChevronLeft, ChevronRight } from 'lucide-react';

const TodaySpl = () => {
  const [favorites, setFavorites] = useState(new Set());
  const [hoveredItem, setHoveredItem] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const scrollContainerRef = useRef(null);
  const autoSlideIntervalRef = useRef(null);

  const specials = [
    {
      id: 3,
      name: "Steak & Fries",
      category: "Dinner",
      price: "$28.99",
      originalPrice: "Lkr 340.99",
      image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?w=300&h=200&fit=crop",
      rating: 4.7,
      prepTime: "25 min",
      description: "Prime cut steak cooked to perfection with crispy golden fries"
    },
    {
      id: 5,
      name: "Margherita Pizza",
      category: "Dinner",
      price: "Lkr180.99",
      originalPrice: "Lkr210.99",
      image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=300&h=200&fit=crop",
      rating: 4.8,
      prepTime: "18 min",
      description: "Wood-fired pizza with fresh mozzarella, basil, and San Marzano tomatoes"
    },
    {
      id: 6,
      name: "Seafood Pasta",
      category: "Dinner",
      price: "Lkr240.99",
      originalPrice: "Lkr 290.99",
      image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=300&h=200&fit=crop",
      rating: 4.9,
      prepTime: "22 min",
      description: "Fresh linguine with mixed seafood in a rich white wine sauce"
    },
    {
      id: 7,
      name: "Grilled Salmon",
      category: "Dinner",
      price: "Lkr260.99",
      originalPrice: "Lkr 300.99",
      image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=300&h=200&fit=crop",
      rating: 4.8,
      prepTime: "20 min",
      description: "Fresh Atlantic salmon with herbs and lemon butter sauce"
    },
    {
      id: 8,
      name: "BBQ Ribs",
      category: "Dinner",
      price: "Lkr 320.99",
      originalPrice: "Lkr360.99",
      image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=300&h=200&fit=crop",
      rating: 4.6,
      prepTime: "30 min",
      description: "Tender pork ribs with smoky BBQ sauce and coleslaw"
    },
    {
      id: 9,
      name: "Lamb Chops",
      category: "Dinner",
      price: "Lkr350.99",
      originalPrice: "Lkr390.99",
      image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=300&h=200&fit=crop",
      rating: 4.9,
      prepTime: "28 min",
      description: "Herb-crusted lamb chops with roasted vegetables"
    }
  ];

  // Auto-slide functionality
  useEffect(() => {
    if (isAutoPlaying) {
      autoSlideIntervalRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => {
          const nextIndex = (prevIndex + 1) % specials.length;
          scrollToIndex(nextIndex);
          return nextIndex;
        });
      }, 3000); // Change slide every 3 seconds
    }

    return () => {
      if (autoSlideIntervalRef.current) {
        clearInterval(autoSlideIntervalRef.current);
      }
    };
  }, [isAutoPlaying, specials.length]);

  // Scroll to specific index
  const scrollToIndex = (index) => {
    if (scrollContainerRef.current) {
      // Dynamic card width calculation based on screen size
      const isMobile = window.innerWidth < 640;
      const cardWidth = isMobile ? 280 : 320; // Mobile: 280px, Desktop: 320px
      const scrollPosition = index * cardWidth;
      scrollContainerRef.current.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
      });
    }
  };

  // Navigation functions
  const goToPrevious = () => {
    setIsAutoPlaying(false); // Pause auto-play when user interacts
    const newIndex = currentIndex > 0 ? currentIndex - 1 : specials.length - 1;
    setCurrentIndex(newIndex);
    scrollToIndex(newIndex);
    
    // Resume auto-play after 5 seconds
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const goToNext = () => {
    setIsAutoPlaying(false); // Pause auto-play when user interacts
    const newIndex = (currentIndex + 1) % specials.length;
    setCurrentIndex(newIndex);
    scrollToIndex(newIndex);
    
    // Resume auto-play after 5 seconds
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const toggleFavorite = (id) => {
    const newFavorites = new Set(favorites);
    if (newFavorites.has(id)) {
      newFavorites.delete(id);
    } else {
      newFavorites.add(id);
    }
    setFavorites(newFavorites);
  };

  return (
    <section 
      className="relative py-1 px-4 sm:px-6 lg:px-8" 
      id="TodaySpl"
      style={{
        backgroundImage: "url('https://www.centricsoftware.com/wp-content/uploads/2024/06/24Q2_NAM_CAM_ALL_Retail_Grocery_Private_Label_LP_Banner_1920_x_650.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/subtle-white-feathers.png')] opacity-10"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-6 sm:mb-8">
          <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full mb-4 sm:mb-5 shadow-lg transform transition-all duration-300 hover:rotate-12 hover:scale-110">
            <ChefHat className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-gray-900 via-amber-800 to-orange-600 bg-clip-text text-transparent mb-2 sm:mb-3 px-4">
            Today's Specials
          </h2>
          <p className="text-base sm:text-lg text-gray-700 max-w-2xl mx-auto px-4">
            Discover our chef-recommended dinner specialties
          </p>
        </div>

        {/* Carousel Container with Navigation */}
        <div className="relative mb-4 sm:mb-6">
          {/* Left Arrow - Hidden on mobile, visible on tablet+ */}
          <button
            onClick={goToPrevious}
            className="hidden sm:block absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white shadow-lg hover:shadow-xl rounded-full p-2 sm:p-3 transition-all duration-300 transform hover:scale-110 border border-gray-200 group"
            aria-label="Previous item"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700 group-hover:text-amber-600 transition-colors duration-300" />
          </button>

          {/* Right Arrow - Hidden on mobile, visible on tablet+ */}
          <button
            onClick={goToNext}
            className="hidden sm:block absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white shadow-lg hover:shadow-xl rounded-full p-2 sm:p-3 transition-all duration-300 transform hover:scale-110 border border-gray-200 group"
            aria-label="Next item"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700 group-hover:text-amber-600 transition-colors duration-300" />
          </button>

          {/* Scrollable Cards Container */}
          <div className="sm:mx-12"> {/* Add margin only on larger screens to avoid overlap with arrows */}
            <div 
              ref={scrollContainerRef}
              className="flex overflow-x-auto scrollbar-hide gap-4 sm:gap-6 pb-4 sm:pb-6 snap-x snap-mandatory px-4 sm:px-0"
              onMouseEnter={() => setIsAutoPlaying(false)} // Pause on hover
              onMouseLeave={() => setIsAutoPlaying(true)} // Resume on leave
            >
              {specials.map((item, index) => (
                <div
                  key={item.id}
                  className="flex-none w-64 sm:w-72 md:w-80 bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl snap-start border border-white/20"
                  onMouseEnter={() => setHoveredItem(item.id)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  {/* Image Container */}
                  <div className="relative h-36 sm:h-44 overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      onError={(e) => {
                        e.target.onerror = null; 
                        e.target.src="https://placehold.co/300x200/f97316/white?text=Image+Not+Found";
                      }}
                    />
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent"></div>
                    
                    {/* Favorite Heart Button */}
                    <button
                      onClick={(e) => { e.stopPropagation(); toggleFavorite(item.id); }}
                      className={`absolute top-2 sm:top-3 right-2 sm:right-3 p-1.5 sm:p-2 rounded-full backdrop-blur-sm transition-all duration-300 transform hover:scale-110 ${
                        favorites.has(item.id) 
                          ? 'bg-red-500/90 text-white shadow-md' 
                          : 'bg-white/90 text-gray-600 hover:bg-red-50 hover:text-red-500'
                      }`}
                      aria-label={favorites.has(item.id) ? "Remove from favorites" : "Add to favorites"}
                    >
                      <Heart className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${favorites.has(item.id) ? 'fill-current' : ''}`} />
                    </button>

                    {/* Category Badge */}
                    <div className="absolute top-2 sm:top-3 left-2 sm:left-3 bg-amber-500/95 text-white px-2 sm:px-3 py-1 rounded-full text-xs font-medium shadow-md">
                      {item.category}
                    </div>

                    {/* Rating & Prep Time */}
                    <div className={`absolute bottom-2 sm:bottom-3 left-2 sm:left-3 right-2 sm:right-3 flex justify-between items-center transition-all duration-300 ${
                      hoveredItem === item.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
                    }`}>
                      <div className="flex items-center space-x-1 bg-white/95 backdrop-blur-sm rounded-full px-2 sm:px-3 py-1 shadow-sm">
                        <Star className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-amber-400 fill-current" />
                        <span className="text-xs font-medium text-gray-800">{item.rating}</span>
                      </div>
                      <div className="flex items-center space-x-1 bg-white/95 backdrop-blur-sm rounded-full px-2 sm:px-3 py-1 shadow-sm">
                        <Clock className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-gray-600" />
                        <span className="text-xs font-medium text-gray-800">{item.prepTime}</span>
                      </div>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-4 sm:p-5">
                    <div className="flex justify-between items-start mb-2 sm:mb-3">
                      <h3 className="text-base sm:text-lg font-bold text-gray-900 hover:text-amber-600 transition-colors duration-300 line-clamp-1">
                        {item.name}
                      </h3>
                      <div className="text-right ml-2 flex-shrink-0">
                        <span className="text-lg sm:text-xl font-bold text-amber-600">{item.price}</span>
                        <div className="text-xs text-gray-400 line-through">{item.originalPrice}</div>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 text-sm mb-3 sm:mb-4 line-clamp-2">
                      {item.description}
                    </p>

                    <button className="w-full bg-gradient-to-r from-amber-500 to-orange-500 text-white py-2 sm:py-2.5 px-4 rounded-lg font-medium transition-all duration-300 transform hover:from-amber-600 hover:to-orange-600 hover:shadow-md hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center space-x-2 group/btn">
                      <Plus className="w-4 h-4 transition-transform duration-300 group-hover/btn:rotate-90" />
                      <span className="text-sm">Add to Cart</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Progress Indicators */}
          <div className="flex justify-center mt-4 sm:mt-6 space-x-2">
            {specials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index);
                  scrollToIndex(index);
                  setIsAutoPlaying(false);
                  setTimeout(() => setIsAutoPlaying(true), 5000);
                }}
                className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-amber-500 scale-125' 
                    : 'bg-amber-400/30 hover:bg-amber-500/60'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Mobile Navigation Buttons - Only visible on mobile */}
          <div className="flex justify-center mt-4 space-x-4 sm:hidden">
            <button
              onClick={goToPrevious}
              className="bg-white/90 hover:bg-white shadow-lg hover:shadow-xl rounded-full p-3 transition-all duration-300 transform hover:scale-110 border border-gray-200 group"
              aria-label="Previous item"
            >
              <ChevronLeft className="w-5 h-5 text-gray-700 group-hover:text-amber-600 transition-colors duration-300" />
            </button>
            <button
              onClick={goToNext}
              className="bg-white/90 hover:bg-white shadow-lg hover:shadow-xl rounded-full p-3 transition-all duration-300 transform hover:scale-110 border border-gray-200 group"
              aria-label="Next item"
            >
              <ChevronRight className="w-5 h-5 text-gray-700 group-hover:text-amber-600 transition-colors duration-300" />
            </button>
          </div>

          {/* Auto-play Status Indicator */}
          <div className="absolute top-2 sm:top-4 right-2 sm:right-4 z-10">
            <div className={`px-2 sm:px-3 py-1 rounded-full text-xs font-medium transition-all duration-300 ${
              isAutoPlaying 
                ? 'bg-green-500/90 text-white' 
                : 'bg-gray-500/90 text-white'
            }`}>
              {isAutoPlaying ? 'Auto-playing' : 'Paused'}
            </div>
          </div>
        </div>

        {/* Call to Action Button */}
        <div className="text-center mt-6">
          <button className="group relative inline-flex items-center px-8 py-3.5 bg-gradient-to-r from-amber-600 via-orange-500 to-red-500 text-white text-base font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
            <span className="relative flex items-center space-x-2">
              <span>View Full Menu</span>
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-2" />
            </span>
          </button>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
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
