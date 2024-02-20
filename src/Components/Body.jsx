import React from "react";
import { useState } from "react";
import Card from "./Card";
import { restaurantList } from "../utils/mockData";
const Body = () => {
  
  const [listOfRestaurants, setListOfRestraunt] = useState(restaurantList);
  const [filterRestaurant, setFilterRestaurant] = useState(restaurantList);
  const [searchText, setSearchText] = useState("");

  function renderBestRestaurant() {
    const filteredList = listOfRestaurants.filter(
      (res) => res.info.avgRating > 4.4
    );
    setFilterRestaurant(filteredList);
  }

  function resetRestaurantList() {
    setFilterRestaurant(restaurantList);
  }

  const handleSearch = () => {
    const filteredRestaurant = restaurantList.filter((res) =>
      res.info.name.toLowerCase().includes(searchText.toLowerCase().trim())
    );
    setFilterRestaurant(filteredRestaurant);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  if (listOfRestaurants.length === 0) return <h1>Loading...</h1>;

  return (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            onChange={(e) => setSearchText(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <button
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

        {filterRestaurant.map((restaurant, index) => (
          <Card key={index} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};
export default Body;
