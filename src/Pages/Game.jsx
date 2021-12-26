import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchById } from "../data/fetchById";
import "./Game.css";

const Game = () => {
  const { id } = useParams();
  const [resultApi, setResultApi] = useState({});

  useEffect(() => {
    const resolveApi = async () => {
      const result = await fetchById(id);
      setResultApi(result);
    };
    resolveApi();
  }, []);

  return (
    (resultApi.id && (
      <div className="body-game">
        <div className="game-card">
          <h1>{resultApi.title}</h1>
          <img alt={resultApi.title} src={resultApi.thumbnail} />
          <p>Status: {resultApi.status}</p>
          <p>Gender: {resultApi.genre}</p>
          <p>Release Date: {resultApi.release_date}</p>
          <p>Developer Company: {resultApi.publisher}</p>
          <p>Description: {resultApi.description}</p>
          <a target="_blank" href={resultApi.game_url} rel="noreferrer">
            Game Site
          </a>
          {resultApi.screenshots ? (
            <div
              id="carouselExampleIndicators"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="0"
                  className="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                ></button>
              </div>
              <div className="carousel-inner">
                {resultApi.screenshots.map((image, index) => {
                  console.log(image.image);
                  return (
                    <div
                      className={
                        index === 0 ? "carousel-item active" : "carousel-item"
                      }
                      key={image.id}
                    >
                      <img
                        className="d-block w-100"
                        alt={`${resultApi.title} screenshots`}
                        src={image.image}
                      />
                    </div>
                  );
                })}
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          ) : (
            <h3>Sem Imagens Disponíveis</h3>
          )}
        </div>
        {resultApi.minimum_system_requirements ? (
          <div>
            <h2>Minimum Settings</h2>
            <p>Video Card: {resultApi.minimum_system_requirements.graphics}</p>
            <p>Ram Memory: {resultApi.minimum_system_requirements.memory}</p>
            <p>Processor: {resultApi.minimum_system_requirements.processor}</p>
            <p>Disk Space: {resultApi.minimum_system_requirements.storage}</p>
            <p>
              Operational System: {resultApi.minimum_system_requirements.os}
            </p>
          </div>
        ) : null}
      </div>
    )) || <h1>Loading...</h1>
  );
};

export default Game;
