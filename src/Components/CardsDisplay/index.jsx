import React, { useContext } from "react";
import { Link } from "react-router-dom";
import CardsContext from "../../context/CardsContext";
import "./CardsDisplay.css";
import Pagination from "./Pagination";

const LIMIT = 6;

const CardsDisplay = () => {
  const { filteredByFilters, offset, setOffSet } = useContext(CardsContext);
  console.log(filteredByFilters);
  return (
    (filteredByFilters.length >= 1 && (
      <div className="display-cards-body">
        <ul className="cards-list">
          {filteredByFilters.map((item, index) => {
            if (index >= offset && index < offset + LIMIT) {
              return (
                <li className="card-container" key={index}>
                  <h1>{item.title}</h1>
                  <img alt={item.title} src={item.thumbnail} />
                  <p>Gender: {item.genre}</p>
                  <p>Platform: {item.platform}</p>
                  <Link to={`/${item.id}`}>
                    <button className="btn btn-info">More Infos</button>
                  </Link>
                </li>
              );
            }
          })}
        </ul>
        <Pagination
          limit={LIMIT}
          total={filteredByFilters.length}
          offset={offset}
          setOffSet={setOffSet}
        />
      </div>
    )) || (
      <h1>
        Desculpe, não consegui achar esse jogo, que tal tentar mais uma vez?
      </h1>
    )
  );
};

export default CardsDisplay;
