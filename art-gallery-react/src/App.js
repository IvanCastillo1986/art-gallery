import React, { useEffect, useState } from 'react';
import { Routes, Route, useRoutes } from 'react-router-dom'

import './styles/App.scss';
import NavBar from './layout/navBar/NavBar'
import Home from './pages/home/Home';
import CSS from './pages/css/CSS';
import CSSList from './components/CSSList'
import Pokedex from './images/css_art/pokedex/Pokedex';
import CSSPlaceholder from './components/CSSPlaceholder'
import SVG from './pages/svg/SVG';




function App() {

  // Get this cool useRoutes() object working! 
  // Then swap out for <Routes> and <Route> components

  // let routes = [
  //   {
  //     path: "/",
  //     element: <NavBar />,
  //     children: [
  //       { index: true, element: <Home /> },
  //       {
  //         path: "/courses",
  //         element: <Courses />,
  //         children: [
  //           { index: true, element: <CoursesIndex /> },
  //           { path: "/courses/:id", element: <Course /> },
  //         ],
  //       },
  //       // { path: "*", element: <NoMatch /> },
  //     ],
  //   },
  // ];

  
  return (
    <div className="App">
      <NavBar />

      <main>
      <Routes>
        <Route path="/" element={<Home message="This is a message" />} />
        <Route path="css" element={<CSS/>} >
          <Route path="list" element={<CSSList />} />
          <Route path="pokedex" element={<Pokedex />} />
          <Route path="placeholder" element={<CSSPlaceholder />} />
        </Route>
        <Route path="svg" element={<SVG/>} />
      </Routes>
      </main>
      
    </div>
  );
}

export default App;
