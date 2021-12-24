import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchById } from "../data/fetchById";

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
      <div>
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
        {resultApi.screenshots ? (
          <ul>
            {resultApi.screenshots.map((image) => (
              <li key={image.id}>
                <img alt={`${resultApi.title} screenshots`} src={image.image} />
              </li>
            ))}
          </ul>
        ) : (
          <h3>Sem Imagens Disponíveis</h3>
        )}
      </div>
    )) || <h1>Loading...</h1>
  );
};

export default Game;
