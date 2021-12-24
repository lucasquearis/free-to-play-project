import React from "react";
import sadPenguin from "../../../images/notFoundGif/sadPenguin.gif";
import "./NotFoundGame.css";

const NotFoundGame = () => {
  return (
    <div className="not-found-game">
      <h1>
        Desculpe, não consegui achar esse jogo, que tal tentar mais uma vez?
      </h1>
      <img
        className="sad-penguin"
        alt="sad penguin"
        src={sadPenguin}
        width="480"
        height="270"
      ></img>
    </div>
  );
};

export default NotFoundGame;
