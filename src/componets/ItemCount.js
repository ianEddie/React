import React, { useState } from "react";

const ItemCount = () => {
  // state
  const [rates, setRates] = useState(0);
  // Events
  // More
  const increase = () => {
    setRates(rates + 1);
  };
  // Less
  const less = () => {
    setRates(rates - 1);
  };

  //
  return (
    <div className="mainContainer">
      <div className="container-1">
        <button onClick={less} className="lessButton">
          -
        </button>
        {rates}
        <button onClick={increase} className="moreButton">
          +
        </button>
      </div>
      <div className="container-2">
        <button className="addButton">Add to cart</button>
      </div>
    </div>
  );
};

export default ItemCount;
