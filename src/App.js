import React from 'react'
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Home from "./pages/landingPage/landingPage";
import LostAnimals from './pages/lostAnimals/lostAnimals';
import Anunciar from './pages/anunciar/anunciar';
import AnunciarDescricao from './pages/anunciar/anunciarDescricao';
import AnunciarFoto from './pages/anunciar/anunciarFoto';

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Home/>} path="/" exact />
        <Route element={<LostAnimals/>} path="/animais" />
        <Route element={<Anunciar/>} path="/anunciar/1" />
        <Route element={<AnunciarDescricao/>} path="/anunciar/2"/>
        <Route element={<AnunciarFoto/>} path="/anunciar/3"/>
      </Routes>
    </Router>
  );
}

export default App;

