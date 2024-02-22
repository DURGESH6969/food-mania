import { useEffect, useState } from "react";
import { MENU_API } from "./constants";

const useRestaurantMenu = (resId) => {

  const [resInfo, setResInfo] = useState(null);

  useEffect( () => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(MENU_API + resId + "&catalog_qa=undefined")
      if (!response.ok) throw new Error("Unable to fetch data , bad response encountered.")
      const data = await response.json();
      setResInfo(data);
    } catch (error) {
      console.log("Error encountered while fetching data", error);
    }
  }
  return resInfo;
};

export default useRestaurantMenu;
