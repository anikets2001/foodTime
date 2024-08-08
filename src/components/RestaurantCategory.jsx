import React from "react";

const RestaurantCategory = ({ data }) => {
  console.log(data);
  return (
    <div>
      {/* Header */}
      <div className="flex justify-between">
        <span>{data?.title}</span>
        <span>⬇️</span>
      </div>
      {/* Body */}
    </div>
  );
};

export default RestaurantCategory;
