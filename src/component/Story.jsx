import React from 'react'

const Story = () => {
  return (
    <div className="bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 py-8 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Left side - Photo */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-xl transform hover:scale-105 transition-transform duration-500">
              <img 
                src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Restaurant Founder in Kitchen"
                className="w-full h-72 object-cover" // reduced from h-96
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-orange-200 rounded-full opacity-50 blur-xl"></div>
            <div className="absolute -bottom-6 -right-6 w-20 h-20 bg-yellow-200 rounded-full opacity-30 blur-xl"></div>
          </div>

          {/* Right side - Story Content */}
          <div className="space-y-5">
            <div className="space-y-1">
              <h2 className="text-3xl font-bold text-gray-800 leading-tight">
                Our Founder's
                <span className="block text-orange-600">Culinary Journey</span>
              </h2>
              <div className="w-14 h-1 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full"></div>
            </div>

            <div className="space-y-3 text-gray-700 text-sm leading-relaxed">
              <p>
                <span className="font-semibold text-orange-600">Maria Elena Rodriguez</span> began in her grandmother's kitchen in Valencia, Spain, learning that food is love made visible.
              </p>
              
              <p>
                Maria worked across many kitchens absorbing global flavors while honoring Mediterranean roots.
              </p>
              
              <p>
                In 2018, she opened our doors to blend tradition with creativity. Each dish honors her mission to serve comfort and innovation.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3 pt-4 border-t border-orange-200">
              <div className="text-center">
                <div className="text-xl font-bold text-orange-600">25+</div>
                <div className="text-xs text-gray-600">Years</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold text-orange-600">10K+</div>
                <div className="text-xs text-gray-600">Customers</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold text-orange-600">50+</div>
                <div className="text-xs text-gray-600">Dishes</div>
              </div>
            </div>

            {/* Quote */}
            <blockquote className="bg-white/70 p-4 rounded-xl border-l-4 border-orange-500 shadow-sm text-sm">
              <p className="italic text-gray-700 mb-2">
                "Every dish tells a story and creates a memory."
              </p>
              <cite className="text-orange-600 font-medium">— Maria Elena Rodriguez</cite>
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Story;