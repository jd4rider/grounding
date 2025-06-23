import { useEffect, useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
//import Carousel from 'react-bootstrap/Carousel';
//import Image from 'react-bootstrap/Image';
//import Card from 'react-bootstrap/Card';
//import Button from 'react-bootstrap/Button';
import BoxBreathingVisual from './components/BoxBreathingVisual';
import NavbarJF from './components/Navbar';
import './App.css'
import GroundingSteps from './components/GroundingSteps';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <>
    <Router>
      <NavbarJF />
      <Routes>
        <Route path="/" element={<GroundingSteps />} />
        <Route path="/box-breathing" element={<BoxBreathingVisual />} />
      </Routes>
    </Router>
    </>
  );
}

export default App
