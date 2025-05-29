import React from 'react';

const Menu = () => {
  const categories = [
    {
      id: 1,
      title: "Breakfast",
      description: "Start your day with our nutritious breakfast options",
      buttonText: "View Breakfast Menu",
      image: "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?w=800&h=600&fit=crop"
    },
    {
      id: 2,
      title: "Lunch",
      description: "Perfect midday meals for a productive afternoon",
      buttonText: "View Lunch Menu",
      image: "https://images.unsplash.com/photo-1546793665-c74683f339c1?w=800&h=600&fit=crop"
    },
    {
      id: 3,
      title: "Dinner",
      description: "End your day with our exquisite dinner selections",
      buttonText: "View Dinner Menu",
      image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?w=800&h=600&fit=crop"
    }
  ];

  return (
    <section className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Explore Our Categories</h2>
          <p className="text-lg text-gray-600">We offer a wide variety of delicious meals throughout the day</p>
        </div>

        {/* Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category) => (
            <div key={category.id} className="relative group overflow-hidden rounded-lg shadow-lg">
              {/* Category Image */}
              <div className="h-64 overflow-hidden">
                <img 
                  src={category.image} 
                  alt={category.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
              
              {/* Category Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">{category.title}</h3>
                <p className="mb-4">{category.description}</p>
                <button className="px-6 py-2 bg-amber-600 hover:bg-amber-700 rounded-full text-sm font-medium transition-colors duration-200">
                  {category.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button (if needed) */}
        {/* <div className="text-center mt-10">
          <button className="px-8 py-3 border border-gray-300 rounded-full text-gray-900 font-medium hover:bg-gray-50 transition-colors duration-200">
            View All Categories
          </button>
        </div> */}
      </div>
    </section>
  );
};

export default Menu;