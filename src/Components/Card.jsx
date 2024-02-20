import React from "react";
import {CDN_URL} from "../utils/constants";

const Card = (props) => {
  const { resData } = props;

  const { name, cuisines, avgRatingString, sla, cloudinaryImageId } = resData?.info || {};

  const star = String.fromCharCode(10026);

  
  return (
    <div className="card-container">
      <img
        className="res-logo"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <div className="card-description">
        <h3>{name}</h3>
        <h4> <span className="star">{star}</span> {avgRatingString}  🚀{sla.deliveryTime} minutes</h4>
        <h4>{cuisines.join(", ")}</h4>       
      </div>
    </div>
  );
};

export default Card;
