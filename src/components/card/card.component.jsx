import React from "react";
import "./card.styles.css";

export const Card = ({ id, name, email }) => {
  return (
    <div className="cards__container--card">
      <img alt="monster face" src={`https://robohash.org/${id}?set=set3`} />
      <div className="card--info">
        <h2>{name}</h2>
        <h5>{email}</h5>
      </div>
    </div>
  );
};
