import React from 'react';
import Header from './Componentes/Header';
import Home from './Componentes/Home';
import Models from './Componentes/ModelS/Models';
import Model3 from './Componentes/Model3/Model3';
import ModelX from './Componentes/ModelX/ModelX';
import ModelY from './Componentes/ModelY/ModelY';
import SolarRoof from './Componentes/SolarRoof/SolarRoof';
import SolarPanels from './Componentes/SolarPanels/SolarPanels';
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
        <Route path="model3" element={<Model3 />} />
        <Route path="modelX" element={<ModelX />} />
        <Route path="modelY" element={<ModelY />} />
        <Route path="solarRoof" element={<SolarRoof />} />
        <Route path="solarPanels" element={<SolarPanels />} />
      </Routes>
    </>
  )
}

export default App