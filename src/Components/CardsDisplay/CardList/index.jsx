import React, { useContext } from "react";
import { Link } from "react-router-dom";
import CardsContext from "../../../context/CardsContext";
import "./CardList.css";

const LIMIT = 6;

const Cardlist = () => {
  const { filteredByFilters, offset } = useContext(CardsContext);

  return (
    <ul className="cards-list">
      {filteredByFilters.map((item, index) => {
        if (index >= offset && index < offset + LIMIT) {
          return (
            <li className="card-container" key={index}>
              <h1>{item.title}</h1>
              <img
                className="card-image"
                alt={item.title}
                src={item.thumbnail}
              />
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
  );
};

export default Cardlist;
