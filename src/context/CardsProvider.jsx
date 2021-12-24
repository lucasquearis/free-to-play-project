import React, { useState, useEffect } from "react";
import { fetchByPopularity } from "../data/fetchByPopularity";
import PropTypes from "prop-types";
import CardsContext from "./CardsContext";

const CardsProvider = ({ children }) => {
  const [resultApi, setResultApi] = useState([]);
  const [inputFilter, setInputFilter] = useState("");
  const [filteredByName, setFilteredByName] = useState([]);
  const [filteredByFilters, setFilteredByFilters] = useState(filteredByName);
  const [offset, setOffSet] = useState(0);
  const [platformInput, setPlatformInput] = useState("All of them");
  const [genreInput, setGenreInput] = useState("All of them");

  useEffect(() => {
    const resolveApi = async () => {
      const data = await fetchByPopularity();
      setResultApi(data);
    };
    resolveApi();
  }, []);

  useEffect(() => {
    const cloneApi = [...resultApi];
    const filteredResult = cloneApi.filter((game) =>
      game.title.toLowerCase().includes(inputFilter.toLowerCase())
    );
    setFilteredByName(filteredResult);
    setFilteredByFilters(filteredResult);
  }, [inputFilter, resultApi]);

  useEffect(() => {
    const cloneFilteredResults = [...filteredByName];
    const filteredResult = cloneFilteredResults
      .filter((game) => {
        if (platformInput !== "All of them") {
          return game.platform === platformInput;
        }
        return true;
      })
      .filter((game) => {
        if (genreInput !== "All of them") {
          return game.genre === genreInput;
        }
        return true;
      });
    setFilteredByFilters(filteredResult);
  }, [platformInput, genreInput]);
  const context = {
    resultApi,
    inputFilter,
    setInputFilter,
    filteredByName,
    offset,
    setOffSet,
    setPlatformInput,
    setGenreInput,
    platformInput,
    genreInput,
    filteredByFilters,
  };
  return (
    <CardsContext.Provider value={context}>{children}</CardsContext.Provider>
  );
};

CardsProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default CardsProvider;
