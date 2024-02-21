import React from "react";
import { useState,useEffect } from "react";
import Card from "./Card";

const Body = () => {


  const [listOfRestaurants, setListOfRestraunt] = useState([]);
  const [filterRestaurant, setFilterRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");


  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.57687&lng=	88.35047&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();
    console.log(json);

    setListOfRestraunt(json?.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
    setFilterRestaurant(json?.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
  }



  function renderBestRestaurant() {
    const filteredList = listOfRestaurants.filter(
      (res) => res.info.avgRating > 4.4
    );
    setFilterRestaurant(filteredList);
  }

  function resetRestaurantList() {
    setFilterRestaurant(listOfRestaurants);
  }

  const handleSearch = () => {
    const filteredRestaurant = listOfRestaurants.filter((res) =>
      res.info.name.toLowerCase().includes(searchText.toLowerCase().trim())
    );
    setFilterRestaurant(filteredRestaurant);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

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

        {filterRestaurant.map((restaurant) => (
          <Card key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};
export default Body;
