import React, { useContext } from "react";
import CardsContext from "../../context/CardsContext";
import "./CardsDisplay.css";
import Pagination from "./Pagination/Pagination";
import Cardlist from "./CardList";
import NotFoundGame from "./NotFoundGame";

const LIMIT = 6;

const CardsDisplay = () => {
  const { filteredByFilters, offset, setOffSet } = useContext(CardsContext);
  return (
    (filteredByFilters.length >= 1 && (
      <>
        <div className="display-cards-body">
          <Cardlist />
        </div>
        <Pagination
          limit={LIMIT}
          total={filteredByFilters.length}
          offset={offset}
          setOffSet={setOffSet}
        />
      </>
    )) || (
      <div>
        <NotFoundGame />
        <Pagination
          limit={LIMIT}
          total={filteredByFilters.length}
          offset={offset}
          setOffSet={setOffSet}
        />
      </div>
    )
  );
};

export default CardsDisplay;
