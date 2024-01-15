import React from 'react'
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Home from "./pages/landingPage/landingPage";
import LostAnimals from './pages/lostAnimals/lostAnimals';

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Home/>} path="/" exact />
        <Route element={<LostAnimals/>} path="/animais" />
      </Routes>
    </Router>
  );
}

export default App;

