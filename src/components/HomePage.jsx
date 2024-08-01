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
    <div className="p-4 bg-white dark:bg-gray-800">
      <div className="flex items-center space-x-4 py-2">
        <button onClick={handleTopRes} className="bg-blue-400 py-2 px-4 text-white border rounded-md">Top Rated Restaurants</button>
        <div>
          <input type="text" value={searchKey} onChange={handleSearch} className="border-solid border-black p-2 border rounded-md" placeholder="search..."/>
        </div>
      </div>
      {restaurantsList?.length > 0 ? (
        <div className="flex flex-wrap gap-4">
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
