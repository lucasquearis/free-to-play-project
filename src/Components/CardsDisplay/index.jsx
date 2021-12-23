import React, { useEffect, useState } from "react";
import { fetchByPopularity } from "../../data/fetchByPopularity";
import "./CardsDisplay.css";

const CardsDisplay = () => {
  const [resultApi, setResultApi] = useState([]);
  useEffect(() => {
    const resolveApi = async () => {
      const data = await fetchByPopularity();
      setResultApi(data);
    };
    resolveApi();
  }, []);

  useEffect(() => {
    console.log(resultApi);
  }, [resultApi]);

  return (
    <div className="display-cards-body">
      <h1>Eu sou o DisplayCards</h1>
    </div>
  );
};

export default CardsDisplay;
