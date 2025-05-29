import React from 'react';

const Hero = () => {
  const foodImages = [
    'https://images.squarespace-cdn.com/content/v1/5ccec69c523958d3c510f0b7/2b970446-2cb6-4e1c-998e-1f3b0239290b/Prawn+and+Egg+Noodle+Salad+in+a+restaurant+with+chopstick+photo+taken+by+Matt+Madden+Photography+and+styled+by+Kate+Wesson.jpg',
    'https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=400&h=400&fit=crop&crop=center',
    'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&h=400&fit=crop&crop=center',
    'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=400&h=400&fit=crop&crop=center',
    'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=400&h=400&fit=crop&crop=center',
    'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&h=400&fit=crop&crop=center',
  ];

  return (
    <div className="relative h-[100vh] overflow-hidden">
      {/* Background Image Container with Zoom Animation */}
      <div 
        className="absolute inset-0 overflow-hidden"
        style={{
          animation: 'zoom 15s ease-in-out infinite alternate'
        }}
      >
        {/* Actual Background Image */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url('https://blog.petpooja.com/wp-content/uploads/2022/01/Foodporn-Instagram-image-mise-en-avant.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            width: '100%',
            height: '100%'
          }}
        />
      </div>
      
      {/* Dark Overlay for Text Readability */}
      <div className="absolute inset-0 bg-black/60" />
      
      {/* Gradient Overlay for Premium Feel */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 via-transparent to-green-500/20" />

      {/* Main Content Container */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 sm:px-6 lg:px-8 pt-16">
        
        {/* Hero Text */}
        <div className="text-center mb-8 max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 leading-tight">
            <span className="bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
              Exquisite
            </span>
            <br />
            <span className="text-white">Flavors</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 mb-6 leading-relaxed">
            Where culinary artistry meets unforgettable dining experiences
          </p>
          <button className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-semibold py-3 px-6 rounded-full text-base transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg">
            Explore Our Menu
          </button>
        </div>

        {/* Rotating Food Images */}
        <div className="relative w-full max-w-5xl mx-auto">
          <div className="flex justify-center items-center space-x-3 sm:space-x-4 lg:space-x-6 overflow-hidden">
            {foodImages.map((image, index) => (
              <div
                key={index}
                className="relative group"
                style={{
                  animationDelay: `${index * 0.2}s`
                }}
              >
                {/* Glow Effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 rounded-full opacity-75 blur-lg group-hover:opacity-100 transition-opacity duration-300 animate-pulse" />
                
                {/* Food Image Container */}
                <div className="relative w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 lg:w-44 lg:h-44">
                  <img
                    src={image}
                    alt={`Delicious food ${index + 1}`}
                    className="w-full h-full object-cover rounded-full border-2 border-white/20 shadow-2xl transition-all duration-300 group-hover:border-amber-400/60 group-hover:scale-110"
                    style={{
                      animation: 'spin 8s linear infinite',
                      animationDelay: `${index * -1}s`
                    }}
                  />
                  
                  {/* Rotating Border */}
                  <div 
                    className="absolute inset-0 rounded-full border-2 border-transparent"
                    style={{
                      background: 'linear-gradient(45deg, transparent, rgba(255,215,0,0.8), transparent, rgba(255,140,0,0.8)) border-box',
                      animation: 'spin 4s linear infinite reverse'
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-6 text-center">
          <p className="text-gray-400 text-sm mb-3">Discover our signature dishes</p>
          <div className="flex justify-center space-x-4">
            <div className="w-1.5 h-1.5 bg-amber-400 rounded-full animate-pulse" />
            <div className="w-1.5 h-1.5 bg-orange-500 rounded-full animate-pulse" style={{animationDelay: '0.5s'}} />
            <div className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse" style={{animationDelay: '1s'}} />
          </div>
        </div>
      </div>

      {/* Custom Animations Styles */}
      <style jsx global>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        @keyframes zoom {
          0% {
            transform: scale(1);
          }
          100% {
            transform: scale(1.1);
          }
        }
      `}</style>
    </div>
  );
};

export default Hero;