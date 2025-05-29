import React, { useState } from 'react';
import { ShoppingCartIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const TasteHaven = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed w-full z-50 backdrop-blur-md bg-white/10 shadow-lg border-b border-white/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo + Brand Name */}
          <div className="flex-shrink-0 flex items-center space-x-2">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqCTj50hQ-KQYmLb4-VVodeF0fBIMYZPnnAA&s"
              alt="TasteHaven Logo"
              className="w-10 h-10 rounded-full object-cover"
            />
            <h2 className="text-md font-bold text-orange-500">TasteHaven</h2>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block border-2 border-white/30 rounded-full px-4 py-1 backdrop-blur-sm bg-white/10">
            <nav className="flex space-x-4 lg:space-x-8">
              <a href="#" className="text-black hover:text-amber-300 px-3 py-2 text-sm font-medium transition-colors duration-200">
                Home
              </a>
              <a href="#menu" className="text-black hover:text-amber-300 px-3 py-2 text-sm font-medium transition-colors duration-200">
                Our Menu
              </a>
              <a href="#specials" className="text-black hover:text-amber-300 px-3 py-2 text-sm font-medium transition-colors duration-200">
                Today's Specials
              </a>
              <a href="#about" className="text-black hover:text-amber-300 px-3 py-2 text-sm font-medium transition-colors duration-200">
                Our Story
              </a>
              <a href="#contact" className="text-black hover:text-amber-300 px-3 py-2 text-sm font-medium transition-colors duration-200">
                Contact
              </a>
            </nav>
          </div>

          {/* Cart + Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            {/* Cart Button */}
<button className="flex items-center space-x-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-4 py-2 rounded-full shadow-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-400">
  <ShoppingCartIcon className="h-5 w-5" aria-hidden="true" />
  <span className="text-sm font-medium">(0)</span>
</button>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-amber-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-300"
              >
                <span className="sr-only">Open main menu</span>
                {mobileMenuOpen ? (
                  <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden ${mobileMenuOpen ? 'block' : 'hidden'} backdrop-blur-md bg-white/10 rounded-lg mt-2 shadow-xl`}>
          <div className="pt-2 pb-3 space-y-1">
            <a href="#" className="block px-3 py-2 text-base font-medium text-white hover:text-amber-300 hover:bg-white/20">
              Home
            </a>
            <a href="#menu" className="block px-3 py-2 text-base font-medium text-white hover:text-amber-300 hover:bg-white/20">
              Our Menu
            </a>
            <a href="#specials" className="block px-3 py-2 text-base font-medium text-white hover:text-amber-300 hover:bg-white/20">
              Today's Specials
            </a>
            <a href="#about" className="block px-3 py-2 text-base font-medium text-white hover:text-amber-300 hover:bg-white/20">
              Our Story
            </a>
            <a href="#contact" className="block px-3 py-2 text-base font-medium text-white hover:text-amber-300 hover:bg-white/20">
              Contact
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default TasteHaven;