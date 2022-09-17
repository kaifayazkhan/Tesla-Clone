import React from 'react';
import Header from './Componentes/Header';
import Home from './Componentes/Home';
import Models from './Componentes/ModelS/Models';
import {
  Routes,
  Route,
} from 'react-router-dom';

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="models" element={<Models />} />
      </Routes>
    </>
  )
}

export default App