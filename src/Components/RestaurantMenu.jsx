import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);
  

  if (resInfo === null) return (`Loading...`);

  const { name, locality, costForTwoMessage, cuisines } =
    resInfo?.data?.cards[2]?.card?.card?.info || {};
  
  const { itemCards } = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card ;

 

  return (
    <div>
      <h1>{name}</h1>
      <h2>{locality}</h2>
      <p>
        {cuisines && Array.isArray(cuisines)
          ? cuisines.join(", ")
          : "No cuisines available"}{" "}
        - {costForTwoMessage}
      </p>
      <h2>Menu</h2>
      <ul style={{ listStyle: 'none' }}>
      {itemCards && itemCards.length > 0 ? (
        itemCards.map((itemCard, index) => (
          <li key={index}>{itemCard.card.info.name} - ₹{ itemCard.card.info.price/100 || itemCard.card.info.defaultPrice/100} </li>
        ))
      ) : (
        <li>No items available</li>
      )}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
