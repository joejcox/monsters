import React from "react";
import { Card } from "../card/card.component";
import "./card-list.styles.css";

export const CardList = ({ monsters }) => {
  return (
    <div className="cards__container">
      {monsters.map(({ id, name, email }) => (
        <Card key={id} id={id} name={name} email={email} />
      ))}
    </div>
  );
};
