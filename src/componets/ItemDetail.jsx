import React from "react";

const ItemDetail = ({ dato }) => {
  return (
    <div className="card">
      <h1>{dato.tittle}</h1>
      <img src={dato.img} alt="image" />
    </div>
  );
};

export default ItemDetail;
