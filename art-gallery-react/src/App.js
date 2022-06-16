import React, { useEffect, useState } from 'react';
import { Routes, Route, useRoutes } from 'react-router-dom'

import './styles/App.scss';
import NavBar from './layout/navBar/NavBar'
import Home from './pages/home/Home';
import CSS from './pages/css/CSS';
import CSSIntro from './pages/css/components/CSSIntro'
import Pokedex from './images/css_art/pokedex/Pokedex';
import CSSPlaceholder from './pages/css/components/CSSPlaceholder'
import SVG from './pages/svg/SVG';
import Canvas from './pages/canvas/Canvas';
import NotFound from './pages/not-found/NotFound'




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
        <Route index
          element={<Home about={'Our site focuses on bringing electronic art to viewers.'}/>} 
        />
        <Route path="css/*" element={<CSS/>} />
        <Route path="svg" element={<SVG/>} />
        <Route path="canvas/*" element={<Canvas />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      </main>
      
    </div>
  );
}

export default App;

// Leaving off the "/" from the beginning of paths is what tells React Router to make the path relative

// Use the <Outlet> component within the child routes to tell them where in the parent Route it should
// render the nested child Route 
// (only if you're declaring it outside of the child component itself, such as in the App parent component)
// If the app's location matches the nested Route's path, this Outlet component will render the Route's 
// element. 
// Otherwise, the Outlet component will render null.

