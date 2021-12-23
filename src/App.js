import React from 'react';
import Header from './Components/Header';
import Main from './Components/Main';
import Footer from './Components/Footer'
import CardsDisplay from './Components/CardsDisplay';
import CardsProvider from './context/CardsProvider';

function App() {
  return (
    <CardsProvider>
      <div className="body-container">
        <Header />
        <Main />
        <CardsDisplay />
        <Footer />
      </div>
    </CardsProvider>
  );
}

export default App;
