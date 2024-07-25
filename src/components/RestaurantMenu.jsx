import React, { useEffect, useState } from "react";
import { RES_MENU_BASE_URL } from "../utils/constants";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  console.log(
    resInfo?.cards[4].groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
      ?.itemCards
  );

  // fetch restaurant menu from the api
  useEffect(() => {
    fetchMenu();
  }, []);

  // async function to fetch menu from the api
  const fetchMenu = async () => {
    try {
      const data = await fetch(RES_MENU_BASE_URL);
      const json = await data.json();
      const menu = json?.data;
      setResInfo(menu);
    } catch (error) {
      console.error(error);
    }
  };

  const itemCards =
    resInfo?.cards[4].groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
      ?.itemCards;
  console.log(itemCards);

  return resInfo === null ? (
    <Shimmer />
  ) : (
    <div className="res-menu-container">
      <div className="res-info-container">
        <div className="name-wrapper">
          <p>{resInfo.cards[2]?.card?.card?.info?.name}</p>
          <p>{resInfo.cards[2]?.card?.card?.info?.cuisines.join(", ")}</p>
        </div>
        <div className="price-container">
          <p>{resInfo.cards[2]?.card?.card?.info?.costForTwoMessage}</p>
          <p>{resInfo.cards[2]?.card?.card?.info?.locality}</p>
        </div>
      </div>
      <div className="menu-container">
        <div className="items-wrapper">
          {itemCards.map((item, index) => (
            <div className="menu-item" key={item?.card?.info?.id}>
              <p>
                {index+1}: {item?.card?.info?.name}
              </p>
              <p>Rs. {item?.card?.info?.price / 100}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
