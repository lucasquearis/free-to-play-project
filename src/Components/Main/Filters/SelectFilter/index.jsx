import React, { useContext } from "react";
import CardsContext from "../../../../context/CardsContext";
import PropTypes from "prop-types";

const SelectFilter = ({ name, inputValue, options, nameLabel }) => {
  const { setPlatformInput, setGenreInput, setOffSet } =
    useContext(CardsContext);

  const handleChange = ({ name, value }) => {
    switch (name) {
      case "platform":
        setPlatformInput(value);
        setOffSet(0);
        break;
      case "genre":
        setGenreInput(value);
        setOffSet(0);
        break;
    }
  };

  return (
    <label>
      {nameLabel}
      <select
        name={name}
        onChange={({ target }) => handleChange(target)}
        className="form-select"
        value={inputValue}
      >
        <option>All of them</option>
        {options.sort().map((game, index) => (
          <option key={index}>{game}</option>
        ))}
      </select>
    </label>
  );
};

SelectFilter.propTypes = {
  name: PropTypes.string,
  inputValue: PropTypes.string,
  options: PropTypes.array,
  nameLabel: PropTypes.string,
}.isRequired;

export default SelectFilter;
