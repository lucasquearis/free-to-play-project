import React, { useState, useContext, useEffect } from "react";
import CardsContext from "../../../context/CardsContext";
import "./Filters.css";
import SelectFilter from "./SelectFilter";

const Filters = () => {
  const { filteredByName, genreInput, platformInput } =
    useContext(CardsContext);

  const [platformOptions, setPlatformOptions] = useState([]);
  const [genreOptions, setGenreOptions] = useState([]);

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

  return (
    <article className="main-filters">
      <SelectFilter
        name="platform"
        inputValue={platformInput}
        options={platformOptions}
        nameLabel="Platform"
      />
      <SelectFilter
        name="genre"
        inputValue={genreInput}
        options={genreOptions}
        nameLabel="Genre"
      />
    </article>
  );
};

export default Filters;
