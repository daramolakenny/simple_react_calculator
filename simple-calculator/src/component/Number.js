import React from "react";

const Number = ({number, handleButtonClick}) => {
  return (
    <button className="numbtn" onClick={() => handleButtonClick(number)}>{number}</button>
  );
};

export default Number;