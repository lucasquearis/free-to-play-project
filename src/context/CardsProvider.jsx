import React, { useState, useEffect } from "react";
import { fetchByPopularity } from "../data/fetchByPopularity";
import PropTypes from "prop-types";
import CardsContext from "./CardsContext";

const CardsProvider = ({ children }) => {
  const [resultApi, setResultApi] = useState([]);
  useEffect(() => {
    const resolveApi = async () => {
      const data = await fetchByPopularity();
      setResultApi(data);
    };
    resolveApi();
  }, []);

  const context = {
    resultApi,
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
