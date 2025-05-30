import React from 'react';


import Contact from "./contact";

const Cart = () => {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-6 py-10">Your Cart</h1>
        <div className="bg-white p-6 rounded-lg shadow">
          {/* Cart content goes here */}
        </div>
        <Contact />
      </div>
    </div>
  );
};

export default Cart;