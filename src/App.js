import React from 'react';
import CardsProvider from './context/CardsProvider';
import Home from './Pages/Home';

function App() {
  return (
    <CardsProvider>
      <Home />
    </CardsProvider>
  );
}

export default App;
