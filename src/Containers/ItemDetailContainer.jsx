import React from "react";
import customfetech from "../utils/CustomFetch";
import ItemDetail from "../componets/ItemDetail";
import { comicData } from "../utils/ComicsData";
import { useState } from "react";
import { useEffect } from "react";

const ItemDetailContainer = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    customfetech(2000, comicData[2])
      .then((result) => setData(result))
      .catch((err) => console.log(err));
  });
  return <ItemDetail item={data} />;
};

export default ItemDetailContainer;
