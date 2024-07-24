import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from './Shimmer'
import { CARD_LIST_BASE_URL } from "../utils/constants";

const HomePage = () => {
  const [restaurantsList, setRestaurantsList] = useState([]);

  useEffect(() => {
    fetchRestaurants();
  }, []);

  const fetchRestaurants = async () => {
    try {
      const baseUrl = await fetch(CARD_LIST_BASE_URL);
      const json = await baseUrl.json();
      const data =
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;

      setRestaurantsList(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="body">
      <div className="filter">
        <button className="filter-btn">Top Rated Restaurants</button>
        <div className="search">
          <input type="text" className="search-box" value={""} />
          <button className="search-btn">Search</button>
        </div>
      </div>
      {restaurantsList.length > 0 ? (
        <div className="restaurant-container">
          {restaurantsList.map((card) => (
            <RestaurantCard
              key={card?.info?.id}
              restaurantName={card?.info?.name}
              cuisine={card?.info?.cuisines}
              star={card?.info?.avgRating}
              priceForTwo={card?.info?.costForTwo}
              locality={card?.info?.locality}
              imageId={card?.info?.cloudinaryImageId}
            />
          ))}
        </div>
      ) : (
        <Shimmer />
      )}
    </div>
  );
};

export default HomePage;
