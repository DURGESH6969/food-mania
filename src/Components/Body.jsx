import React from "react";
import { useState,useEffect } from "react";
import Card from "./Card";
import { Link } from "react-router-dom";
import useBodyData from "../utils/useBodyData";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";
import OfflinePage from "./OfflinePage";


const Body = () => {

  const {
    listOfRestaurants,
    filterRestaurant,
    searchText,
    setSearchText,
    handleSearch,
    handleKeyDown,
    renderBestRestaurant,
    resetRestaurantList,
  } = useBodyData();

  const onlineStatus = useOnlineStatus();

  if(onlineStatus===false) return (<OfflinePage/>)

  if (listOfRestaurants.length === 0) return (<Shimmer></Shimmer>);

  return (
    <div className="body">
      <div className="flex-wrap flex gap-2 bg-green-100 shadow-lg mt-4 rounded-lg">
        <div className="search h-[48px] px-2 my-3 py-2 flex gap-6">
          <input
            type="text"
            className="border-solid border border-gray-700 p-1 mx-1 rounded-md "
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <button className="search-btn border-cyan-600 border-2 rounded-full px-4 py-1 self-center hover:bg-cyan-400 hover:shadow-lg hover:scale-105"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
        <button onClick={renderBestRestaurant} className="border-cyan-600 border-2 rounded-full px-4 py-1 self-center m-4 hover:bg-cyan-400 hover:shadow-lg hover:scale-105">Top Rated Restaurant </button>
        <button onClick={resetRestaurantList} className="border-cyan-600 border-2 rounded-full px-4 py-1 self-center hover:bg-cyan-400 hover:shadow-lg hover:scale-105">Reset</button>
      </div>
      <div className="restaurant-container flex justify-center flex-wrap">
        {/* Restaurant Card Component */}

        {filterRestaurant.map((restaurant) => (

          <Link  key={restaurant.info.id} style={{textDecoration:'none'}}
          to={"/restaurants/"+restaurant.info.id}>
            <Card resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Body;
