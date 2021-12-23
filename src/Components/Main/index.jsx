import React from "react";
import Hero from "./Hero";
import "./Main.css";

const Main = () => {
  return (
    <main className="main-body">
      <Hero />
      <article className="main-filters">
        <h1>Eu sou o Filters</h1>
      </article>
    </main>
  );
};

export default Main;
