import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import Profil from './pages/profil/Profil';

const App = () => {
  // Home path redirecting to profile, waiting for full app development 
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Profil />} />
        <Route path="/profil" element={<Profil />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;