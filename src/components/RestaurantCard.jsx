import React from "react";
import { CARD_IMAGE_BASE_URL } from "../utils/constants";

const RestaurantCard = ({
  restaurantName,
  cuisine,
  star,
  priceForTwo,
  locality,
  imageId,
}) => {
  return (
    <div className="restaurant-card">
      <img height={200} width={230} src={CARD_IMAGE_BASE_URL + imageId} alt="food" />
      <h3 className="res-name">{restaurantName}</h3>
      <div className="cuisines-wrapper">
        <p className="cuisine">{cuisine.join(', ')}</p>
        <p>{star}🌟</p>
      </div>
      <div className="card-footer">
        <p className="locality">{locality}</p>
        <p>{priceForTwo}</p>
      </div>
    </div>
  );
};

export default RestaurantCard;
