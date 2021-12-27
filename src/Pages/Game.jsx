import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchById } from "../data/fetchById";
import "./Game.css";
import Footer from "../Components/Footer";
import Loading from "../Components/Loading";

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
          <img
            className="thumbnail-game"
            alt={resultApi.title}
            src={resultApi.thumbnail}
          />
          <p>Status: {resultApi.status}</p>
          <p>Gender: {resultApi.genre}</p>
          <p>Release Date: {resultApi.release_date}</p>
          <p>Developer Company: {resultApi.publisher}</p>
          <p className="description-game">
            Description: {resultApi.description}
          </p>
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
                {resultApi.screenshots.map((_game, index) => {
                  return (
                    <button
                      key={index}
                      type="button"
                      data-bs-target="#carouselExampleIndicators"
                      data-bs-slide-to={index}
                      className={index === 0 ? "active" : null}
                      aria-current={index === 0 ? "true" : null}
                      aria-label={`Slide ${index + 1}`}
                    ></button>
                  );
                })}
              </div>
              <div className="carousel-inner">
                {resultApi.screenshots.map((game, index) => {
                  return (
                    <div
                      key={index}
                      className={
                        index === 0 ? "carousel-item active" : "carousel-item"
                      }
                    >
                      <a target="_blank" href={game.image} rel="noreferrer">
                        <img
                          src={game.image}
                          className="d-block w-100"
                          alt={`screenshot ${game.image}`}
                        />
                      </a>
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
          <div className="game-settings">
            <h1>Minimum Settings</h1>
            <p>Video Card: {resultApi.minimum_system_requirements.graphics}</p>
            <p>Ram Memory: {resultApi.minimum_system_requirements.memory}</p>
            <p>Processor: {resultApi.minimum_system_requirements.processor}</p>
            <p>Disk Space: {resultApi.minimum_system_requirements.storage}</p>
            <p>
              Operational System: {resultApi.minimum_system_requirements.os}
            </p>
          </div>
        ) : null}
        <Footer />
      </div>
    )) || <Loading />
  );
};

export default Game;
