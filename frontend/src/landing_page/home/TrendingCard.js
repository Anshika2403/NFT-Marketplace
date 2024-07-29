import React from "react";
import "./TrendingCard.css";

function TrendingCard({ main, blocka, blockb, type, disp, username }) {
  return (
    <div className="mt-5">
      <img src={main} className="main"></img>
      <div className="row mt-3">
        <div className="col-4">
          <img src={blocka} className="blocka"></img>
        </div>
        <div className="col-4">
          <img src={blockb} className="blockb"></img>
        </div>
        <div className="col-4 fw-bold blockc">
          <span>1025+</span>
        </div>
      </div>
      <div className="mt-4">
        <h4>{type}</h4>
        <div className="mt-3 d-flex use">
          <img src={disp}></img>
          <h6>{username}</h6>
        </div>
      </div>
    </div>
  );
}

export default TrendingCard;
