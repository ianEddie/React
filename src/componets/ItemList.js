import React from "react";

const ItemList = (props) => {
  return (
    <section className="comicContainer">
      
        <img className="img" src={props.image}></img>
        <h1 className="infoContainer">{props.tittle}</h1>
     
    </section>
  );
};

export default ItemList;
