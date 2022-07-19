import React, { useState } from "react";
import ItemList from "../componets/ItemList";
import { comicData } from "../utils/ComicsData";
import { useEffect } from "react";
import { comicData } from "../utils/ComicsData";

const ItemListContainer = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    customfetech(2000, comicData)
      .then((result) => setData(result))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="main">
      <ItemList item={data} />
    </div>
  );
};

export default ItemListContainer;
