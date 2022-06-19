import React from "react";
import "./SelectButton.css";

const SelectButton = ({ children, selected, onClick }) => {
  return (
    <span
      className={selected ? "selectButton selected" : "selectButton"}
      onClick={onClick}
    >
      {children}
    </span>
  );
};

export default SelectButton;
