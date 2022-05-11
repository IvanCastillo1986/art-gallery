import React from 'react';
import { Routes, Route } from 'react-router-dom'

import './styles/App.scss';
import NavBar from './layout/navBar/NavBar'
import Home from './pages/home/Home';
import CSS from './pages/css/CSS';
import SVG from './pages/svg/SVG';
import Pokedex from './images/css_art/pokedex/Pokedex';



function App() {
  return (
    <div className="App">
      <NavBar />

      <main>
      <Routes>
        <Route path="/" element={<Home message="This is a message" />} />
        <Route path="css" element={<CSS/>} />
        <Route path="svg" element={<SVG/>} />
        <Route path="css/pokedex" element={<Pokedex />} />
      </Routes>
      </main>
      
    </div>
  );
}

export default App;
