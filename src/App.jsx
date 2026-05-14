import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Cube from './pages/Cube';
import About from './pages/About';
import CFOP from './pages/CubeAlg/cfop';
import ROUX from './pages/CubeAlg/roux';
import Lin from './pages/CubeAlg/lin';
import Footer from './components/Footer';

export default function App() {
  return (
    <Router basename="/memo/">
      <Navbar />
      <Routes>
        <Route path="/" element={<Cube />} />
        <Route path="/about" element={<About />} />
        <Route path="/CubeAlg/cfop" element={<CFOP />} />
        <Route path="/CubeAlg/roux" element={<ROUX />} />
        <Route path="/CubeAlg/lin" element={<Lin />} />
      </Routes>
      <Footer />
    </Router>
    
  );
}