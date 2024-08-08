import React from "react";
import { MdOutlineExpandMore } from "react-icons/md";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data }) => {
  return (
    <div className="mt-6 w-[60%] m-auto">
      {/* Header */}
      <div className="flex justify-between items-center	  py-2">
        <div className="flex justify-between items-center font-bold text-lg">
          <p>{data?.title}</p>
          <p className="ml-2">({data?.itemCards?.length})</p>
        </div>
        <span>
          <MdOutlineExpandMore className="text-2xl" />
        </span>
      </div>
      {/* Body */}
      <ItemList items={data?.itemCards}/>
    </div>
  );
};

export default RestaurantCategory;
