import React, { useContext, useState } from "react";
import CardsContext from "../../context/CardsContext";
import "./CardsDisplay.css";
import Pagination from "./Pagination";

const LIMIT = 6;

const CardsDisplay = () => {
  const [offset, setOfSet] = useState(0);
  const { resultApi } = useContext(CardsContext);
  return (
    <div className="display-cards-body">
      <ul className="cards-list">
        {resultApi.map((item, index) => {
          if (index >= offset && index < offset + LIMIT) {
            return (
              <li className="card-container" key={index}>
                <h1>{item.title}</h1>
                <img alt={item.title} src={item.thumbnail} />
                <p>Gênero: {item.genre}</p>
                <p>Plataforma: {item.platform}</p>
              </li>
            );
          }
        })}
      </ul>
      <Pagination
        limit={LIMIT}
        total={resultApi.length}
        offset={offset}
        setOfSet={setOfSet}
      />
    </div>
  );
};

export default CardsDisplay;
