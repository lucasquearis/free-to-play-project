import React from 'react';
import App from './App';
import { render } from 'react-dom'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Game from './Pages/Game';

const rootElement = document.getElementById("root");
render(
<React.StrictMode>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/:id" element={<Game />} />
    </Routes>
  </BrowserRouter>
</React.StrictMode>, rootElement)
