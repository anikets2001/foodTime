import React from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestrauntMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

  const itemCards =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
      ?.itemCards;

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
          {itemCards?.map((item, index) => (
            <div className="menu-item" key={item?.card?.info?.id}>
              <p>
                {index + 1}: {item?.card?.info?.name}
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