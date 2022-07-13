import React, { useState } from "react";
import ItemList from "../componets/ItemList";
import { comicData } from "../utils/ComicsData";


const ItemListContainer = () => {

  let is_ok = true;
  const [data, setData] = useState([])

let getData = (time) => {
    return new Promise((resolve, reject) => {
        if (is_ok) {
            setTimeout(() => {
                resolve(comicData)
            }, time);
        } else {
            reject("Error")
        }
    });
}

getData(0)
    .then(datos => {setData(datos)})
    .catch(err => console.log(err))

  return (
    <div className="main">
      {data.map((i, index) => (
        <ItemList 
        key={index} 
        image={i.img} 
        tittle={i.hero} />
      ))}
    </div>
  );
};

export default ItemListContainer;
