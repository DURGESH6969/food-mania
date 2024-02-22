import { useEffect,useState } from "react";

const useBodyData = () => {
  const [listOfRestaurants, setListOfRestraunt] = useState([]);
  const [filterRestaurant, setFilterRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.57687&lng=88.35047&page_type=DESKTOP_WEB_LISTING");
      if (!data.ok) throw new Error("error in fetching data");
      const json = await data.json();
      console.log(json);

      setListOfRestraunt(json?.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
      setFilterRestaurant(json?.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);

    } catch (error) {
      console.log(error);
    }
  };
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

  const renderBestRestaurant = () => {
    const filteredList = listOfRestaurants.filter(
      (res) => res.info.avgRating > 4.4
    );
    setFilterRestaurant(filteredList);
  };

  const resetRestaurantList = () => {
    setFilterRestaurant(listOfRestaurants);
  };

  return {
    listOfRestaurants,
    filterRestaurant,
    searchText,
    setSearchText,
    handleSearch,
    handleKeyDown,
    renderBestRestaurant,
    resetRestaurantList,
  };

};

export default useBodyData;