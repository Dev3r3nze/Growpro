import { useState } from "react";

export const useGetData = () => {
  const [data, setData] = useState(null);

  const getData = async () => {
    const response = await fetch("https://wp.growproexperience.com/wp-json/wp/v2/social");
    const data = await response.json();
    setData(data);
  };
  return { data, getData };
};


//Top ventas tapa oferta
//AboutUs no tiene misma altura 