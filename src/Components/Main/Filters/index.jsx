import React, { useState, useContext, useEffect } from "react";
import CardsContext from "../../../context/CardsContext";
import "./Filters.css";

const Filters = () => {
  const {
    filteredByName,
    setGenreInput,
    setPlatformInput,
    genreInput,
    platformInput,
  } = useContext(CardsContext);

  const [platformOptions, setPlatformOptions] = useState([]);
  const [genreOptions, setGenreOptions] = useState([]);

  const handleChange = ({ name, value }) => {
    switch (name) {
      case "platform":
        setPlatformInput(value);
        break;
      case "genre":
        setGenreInput(value);
        break;
    }
  };

  useEffect(() => {
    const optionsFormat = () => {
      let optionsPlatform = [];
      let optionsGenre = [];
      filteredByName.forEach((game) => {
        if (!optionsPlatform.includes(game.platform))
          optionsPlatform.push(game.platform);
      });
      filteredByName.forEach((game) => {
        if (!optionsGenre.includes(game.genre)) optionsGenre.push(game.genre);
      });
      setPlatformOptions(optionsPlatform);
      setGenreOptions(optionsGenre);
    };
    optionsFormat();
  }, [filteredByName]);

  // console.log(genreInput, platformInput, genreOptions);

  return (
    <article className="main-filters">
      <label>
        Platform
        <select
          name="platform"
          onChange={({ target }) => handleChange(target)}
          className="form-select"
          value={platformInput}
        >
          <option>All of them</option>
          {platformOptions.map((game, index) => (
            <option key={index}>{game}</option>
          ))}
        </select>
      </label>
      <label>
        Genre
        <select
          name="genre"
          onChange={({ target }) => handleChange(target)}
          className="form-select"
          value={genreInput}
        >
          <option>All of them</option>
          {genreOptions.map((game, index) => (
            <option key={index}>{game}</option>
          ))}
        </select>
      </label>
    </article>
  );
};

export default Filters;
