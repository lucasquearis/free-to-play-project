import React from "react";
import "./Loading.css";
import loadingImage from "../../images/Loading/loading.webp";

const Loading = () => {
  return (
    <div className="loading-body">
      <img src={loadingImage} alt="loading"></img>
    </div>
  );
};

export default Loading;
