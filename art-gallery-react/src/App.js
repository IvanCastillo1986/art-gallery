import React from 'react';
import { Routes, Route } from 'react-router-dom'

import './styles/App.scss';
import NavBar from './layout/navBar/NavBar'
import Home from './pages/home/Home';
import CSS from './pages/css/CSS';
import SVG from './pages/svg/SVG';



function App() {
  return (
    <div className="App">
      <NavBar />

      <main>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="css" element={<CSS/>} />
        <Route path="svg" element={<SVG/>} />
      </Routes>
      </main>
      
    </div>
  );
}

export default App;
