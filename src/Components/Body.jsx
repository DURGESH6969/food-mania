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
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <button className="search-btn"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
        <button onClick={renderBestRestaurant}>Top rated Restaurant </button>
        <button onClick={resetRestaurantList}>Reset</button>
      </div>
      <div className="restaurant-container">
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
