import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { NextUIProvider } from '@nextui-org/react';
import Home from './Pages/Home';
import Login from './Pages/Login';
import NavBar from './Components/NavBar';

function App() {
  return (
    <NextUIProvider>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Login" element={<Login />} />
      </Routes>
    </NextUIProvider>
  );
}

export default App;
