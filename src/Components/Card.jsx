import React from "react";
import {CDN_URL} from "../utils/constants";

const Card = (props) => {
  const { resData } = props;

  const { name, cuisines, avgRatingString, sla, cloudinaryImageId } = resData?.info || {};

  const star = String.fromCharCode(10026);

  
  return (
    <div className="mt-10 p-2 w-[250px] my-4 mx-7  rounded-2xl bg-[#f4cfc7] hover:cursor-pointer hover:scale-105 hover:shadow-lg hover:bg-[#dca89b]   hover:border-2 hover:border-purple-700 ">
      <img
        className="res-logo w-full h-[200px] overflow-clip-margin-content rounded-2xl object-cover hover:text-white hover:shadow-lg hover:shadow-[#a97a6f]"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <div className=" text-gray-700 whitespace-nowrap text-ellipsis overflow-hidden  p-2 hover:text-white">
        <h3 className="text-lg font-bold ">{name} </h3>
        <h4 > <span className="text-green-600">{star}</span> {avgRatingString}  🚀{sla.deliveryTime} minutes</h4>
        <h4>{cuisines.join(", ")}</h4>       
      </div>
    </div>
  );
};

export default Card;
