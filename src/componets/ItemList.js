import React from "react";


const ItemList = ({ item }) => {
  return (
    <section className="comicContainer">
      <img className="img" src={item.img}></img>
      <h1 className="infoContainer">{item.tittle}</h1>
    </section>
  );
};

export default ItemList;
