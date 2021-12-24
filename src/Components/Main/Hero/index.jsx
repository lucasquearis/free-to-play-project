import React, { useState, useContext } from "react";
import CardsContext from "../../../context/CardsContext";
import "./Hero.css";

const Hero = () => {
  const { setInputFilter, setOffSet } = useContext(CardsContext);
  const [inputState, setInputState] = useState("");

  const handleChange = ({ value }) => {
    setInputState(value);
  };

  const handleClick = (event) => {
    event.preventDefault();
    setOffSet(0);
    setInputFilter(inputState);
  };

  return (
    <article className="main-hero">
      <p className="text-hero">Find your free games</p>
      <form className="input-group mb-3">
        <label htmlFor="">
          <input
            onChange={({ target }) => handleChange(target)}
            value={inputState}
            placeholder="Look for a game..."
            className="form-control"
          ></input>
        </label>
        <label htmlFor="">
          <button
            onClick={(event) => handleClick(event)}
            className="btn btn-secondary"
          >
            Procurar
          </button>
        </label>
      </form>
    </article>
  );
};

export default Hero;
