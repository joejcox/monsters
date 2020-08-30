import React from "react";
import "./search-barr.styles.css";

export const SearchBar = ({ change }) => {
  return (
    <input
      className="monster-search"
      type="search"
      placeholder="Search monsters..."
      onChange={change}
    />
  );
};
