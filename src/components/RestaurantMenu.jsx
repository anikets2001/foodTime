import React, { useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  const [showIndex, setShowIndex] = useState(null);

  const itemCards =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
      ?.itemCards;

  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ==
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return resInfo === null ? (
    <Shimmer />
  ) : (
    <div className="p-4">
      <div className="text-center">
        <h1 className="font-bold text-2xl">
          {resInfo.cards[2]?.card?.card?.info?.name}
        </h1>
        <p className="font-bold text-lg mt-2">
          {resInfo.cards[2]?.card?.card?.info?.cuisines?.join(", ")}
        </p>
        {categories?.map((category, index) => (
          // controlled component
          <RestaurantCategory
            data={category?.card?.card}
            key={category?.card?.card?.title}
            showItems={index == showIndex ? true : false}
            setShowIndex={()=> setShowIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
