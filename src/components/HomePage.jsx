import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { CARD_LIST_BASE_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const HomePage = () => {
  const onlineStatus = useOnlineStatus();
  const [restaurantsList, setRestaurantsList] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchKey, setSearchKey] = useState("");

  useEffect(() => {
    fetchRestaurants();
  }, []);

  const fetchRestaurants = async () => {
    try {
      const data = await fetch(CARD_LIST_BASE_URL);
      const json = await data.json();
      const restaurants =
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;

      setRestaurantsList(restaurants);
      setFilteredRestaurant(restaurants);
    } catch (error) {
      console.error(error);
    }
  };

  const handleTopRes = () => {
    const topRes = restaurantsList.filter((item) => item?.info?.avgRating > 4);
    setFilteredRestaurant(topRes);
  };

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchKey(value);

    const filteredData = restaurantsList.filter((item) =>
      item?.info?.name.toLowerCase().includes(value.toLowerCase())
    );

    setFilteredRestaurant(filteredData);
  };

  return onlineStatus ? (
    <div className="body">
      <div className="filter">
        <button className="filter-btn" onClick={handleTopRes}>
          Top Rated Restaurants
        </button>
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchKey}
            onChange={handleSearch}
          />
        </div>
      </div>
      {restaurantsList?.length > 0 ? (
        <div className="restaurant-container">
          {filteredRestaurant.map((card) => (
            <Link key={card?.info?.id} to={"/restaurants/" + card?.info?.id}>
              <RestaurantCard
                restaurantName={card?.info?.name}
                cuisine={card?.info?.cuisines}
                star={card?.info?.avgRating}
                priceForTwo={card?.info?.costForTwo}
                locality={card?.info?.locality}
                imageId={card?.info?.cloudinaryImageId}
              />
            </Link>
          ))}
        </div>
      ) : (
        <Shimmer />
      )}
    </div>
  ) : (
    <h1>Looks like you are offline, please check your internet connection</h1>
  );
};

export default HomePage;
