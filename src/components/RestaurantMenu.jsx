import React, { useEffect, useState } from "react";
import { RES_MENU_BASE_URL } from "../utils/constants";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  console.log("resInfo:",resInfo)
  // fetch restaurant menu from the api
  useEffect(() => {
    fetchMenu();
  }, []);

  // async function to fetch menu from the api
  const fetchMenu = async () => {
    try {
      const data = await fetch(RES_MENU_BASE_URL);
      const json = await data.json();
      const info = json?.data?.cards[2]?.card?.card?.info;
      setResInfo(info);
    } catch (error) {
      console.error(error);
    }
  };

  return resInfo === null ? (
    <Shimmer />
  ) : (
    <div className="res-menu-container">
      <div className="res-info-container">
        <div className="name-wrapper">
          <p>{resInfo?.name}</p>
          <p>{resInfo.cuisines.join(', ')}</p>
        </div>
        <div className="price-container">
          <p>{resInfo?.costForTwoMessage}</p>
          <p>{resInfo?.locality}</p>
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
