import React from 'react';
import { BrowserRouter as Router, Routes, Route, HashRouter } from 'react-router-dom';
import { Box } from '@mui/material';
import Navbar from './components/Navbar';
import Cube from './pages/Cube';
import About from './pages/About';
import CFOP from './pages/CubeAlg/cfop';
import ROUX from './pages/CubeAlg/roux';
import Lin from './pages/CubeAlg/lin';
import Footer from './components/Footer';

export default function App() {
  return (
    <HashRouter>
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Navbar />
        <Box sx={{ flexGrow: 1 }}>
          <Routes>
            <Route path="/" element={<Cube />} />
            <Route path="/about" element={<About />} />
            <Route path="/CubeAlg/cfop" element={<CFOP />} />
            <Route path="/CubeAlg/roux" element={<ROUX />} />
            <Route path="/CubeAlg/lin" element={<Lin />} />
          </Routes>
        </Box>
        <Footer />
      </Box>
    </HashRouter>

  );
}