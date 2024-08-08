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
    <div className="p-2 shadow-md rounded-md w-[300px] min-h-[470px]">
      <img
        height={280}
        width={"100%"}
        src={CARD_IMAGE_BASE_URL + imageId}
        alt="food"
        className="rounded-md"
      />
      <div>
        <h3 className="font-semibold text-lg ">{restaurantName}</h3>
        <div className="flex items-center justify-between mt-2">
          <p className="break-all w-[200px]">{cuisine.join(", ")}</p>
          <p>{star}🌟</p>
        </div>
        <div className="flex items-center justify-between mt-2 self-end">
          <p className="">{locality}</p>
          <p>{priceForTwo}</p>
        </div>
      </div>
    </div>
  );
};

export const withPromotedLabel = (RestaurantCard) => {    //higher order function (take another component as input and return an component as output)
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white m-2 p-2 rounded-md">Promoted</label>
        <RestaurantCard {...props}/>
      </div>
    );
  };
};

export default RestaurantCard;
