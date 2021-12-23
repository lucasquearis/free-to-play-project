import React from "react";
import Header from "../Components/Header";
import Main from "../Components/Main";
import Footer from "../Components/Footer";
import CardsDisplay from "../Components/CardsDisplay";
const Home = () => {
  return (
    <div className="body-container">
      <Header />
      <Main />
      <CardsDisplay />
      <Footer />
    </div>
  );
};

export default Home;
