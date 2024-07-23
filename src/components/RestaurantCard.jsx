import React from "react";
import { LOGO_URL } from "../utils/constants";

const RestaurantCard = () => {
  return (
    <div className="restaurant-card">
      <img
        height={200}
        width={230}
        src={LOGO_URL}
        alt="food"
      />
      <h3 className="res-name">name</h3>
      <div className="cuisines-wrapper">
        <p className="cuisine">burgers, vegetarian</p>
        <p>3.6🌟</p>
      </div>
      <div className="card-footer">
        <p className="locality">sector 38</p>
        <p>500 for two</p>
      </div>
    </div>
  );
};

export default RestaurantCard;
