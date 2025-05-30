import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './component/Header';
import Hero from './component/Hero';
import TodaySpl from './component/TodaySpl';
import Menu from './component/Menu';
import Story from './component/Story';
import Contact from './component/contact';
import Cart from './component/Cart';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        {/* Define your route paths */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <TodaySpl />
              <Menu />
              <Story />
              <Contact />
            </>
          }
        />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
};

export default App;