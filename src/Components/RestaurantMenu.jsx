import React from "react";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantMenuCategory from "./RestaurantMenuCategory";

const RestaurantMenu = () => {
  
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);
  

  if (resInfo === null) return (`Loading...`);

  const { name, locality, costForTwoMessage, cuisines } =
    resInfo?.data?.cards[0]?.card?.card?.info || {};

  
  const categories = resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
    (category) =>
      category.card?.["card"]?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" || category.card?.["card"]?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"
  );

  // console.log(categories);

  return (
    <div className="text-center">
      <h1 className="text-2xl font-bold my-6">{name}</h1>
      <h2 className="text-lg">{locality}</h2>
      <p className="text-xl ">
        {cuisines && Array.isArray(cuisines)
          ? cuisines.join(", ")
          : "No cuisines available"}{" "}
        - {costForTwoMessage}
      </p>
      <h2 className="text-xl font-semibold">Menu</h2>
      {
        categories.map((category,index) => (
          <RestaurantMenuCategory
            key={index}
            props={category?.card?.card} />
        ))
      }
    </div>
  );
};

export default RestaurantMenu;
