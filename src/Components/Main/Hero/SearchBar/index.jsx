import React, { useContext, useState } from "react";
import CardsContext from "../../../../context/CardsContext";
import "./SearchBar.css";

const SearchBar = () => {
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
  );
};

export default SearchBar;
