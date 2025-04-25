import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage'; // Assuming your homepage component is here
import Reviews from './pages/Reviews';
import Contact from "./pages/Contact";  // Assuming your Reviews page component is here
import About from "./pages/About";  // Assuming your Reviews page component is here
import AdminDashboard from './admin/AdminDashboard';
import Services from './pages/Services';
import Gallery from './pages/Gallery';

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />  {/* Homepage route */}
          <Route path="/reviews" element={<Reviews />} />  {/* Reviews page route */}
          <Route path="/contact" element={<Contact />} />  {/* Reviews page route */}
          <Route path="/about" element={<About />} />  {/* Reviews page route */}
          <Route path="/admin" element={<AdminDashboard />} />  {/* Reviews page route */}
          <Route path="/services" element={<Services />} />  {/* Reviews page route */}
          <Route path="/gallery" element={<Gallery />} />  {/* Reviews page route */}
        </Routes>
      </Router>
  );
}

export default App;
