import React from 'react';
import { Switch, Route } from 'react-router-dom'

import './App.css';
import NavBar from './NavBar'
import ArtGallery from './ArtGallery'
import CSS from './components/CSS';
import SVG from './components/SVG';



function App() {
  return (
    <div className="App">
      <NavBar />
      <ArtGallery />
    </div>
  );
}

export default App;
