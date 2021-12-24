import React from "react";
import "./Hero.css";
import SearchBar from "./SearchBar";

const Hero = () => {
  return (
    <article className="main-hero">
      <p className="text-hero">Find your free games</p>
      <SearchBar />
    </article>
  );
};

export default Hero;
