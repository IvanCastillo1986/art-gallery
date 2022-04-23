import React from 'react';
import { Routes, Route } from 'react-router-dom'

import './App.css';
import NavBar from './NavBar'
import Home from './components/Home';
import CSS from './components/CSS';
import SVG from './components/SVG';



function App() {
  return (
    <div className="App">
      <NavBar />

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="css" element={<CSS/>} />
        <Route path="svg" element={<SVG/>} />
      </Routes>
      
    </div>
  );
}

export default App;
