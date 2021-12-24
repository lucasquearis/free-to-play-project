import React from "react";
import Filters from "./Filters";
import Hero from "./Hero";
import "./Main.css";

const Main = () => {
  return (
    <main className="main-body">
      <Hero />
      <Filters />
    </main>
  );
};

export default Main;
