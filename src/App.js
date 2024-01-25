import React from 'react'
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Home from "./pages/landingPage";
import Animal from './pages/animals';
import Anunciar from './pages/anunciar';
import AnunciarDescricao from './pages/anunciarDescricao';
import AnunciarFoto from './pages/anunciarFoto';

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Home/>} path="/" exact />
        <Route element={<Animal/>} path="/animais" />
        <Route element={<Anunciar/>} path="/anunciar/1" />
        <Route element={<AnunciarDescricao/>} path="/anunciar/2"/>
        <Route element={<AnunciarFoto/>} path="/anunciar/3"/>
      </Routes>
    </Router>
  );
}

export default App;

