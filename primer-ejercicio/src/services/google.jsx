import { useState } from "react";

// export const useGetData = () => {
//   const [data, setData] = useState(null);

//   const getData = async () => {
//     const response = await fetch("https://wp.growproexperience.com/wp-json/wp/v2/social");
//     const data = await response.json();
//     setData(data);
//   };
//   return { data, getData };
// };


  
export const fetchData = async () => {
  const response = await fetch("https://wp.growproexperience.com/wp-json/wp/v2/social");
  const data = await response.json();
  return data;
};

  
  

// no es necesario el estado
// probar retrun solo data