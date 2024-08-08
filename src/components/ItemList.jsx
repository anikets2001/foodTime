import React from "react";

const ItemList = ({ items }) => {
  console.log("items:", items);
  return (
    <div>
      {items.map((item) => (
        <div key={item?.card?.info?.id}>
          <div className="mt-2 text-left border-t-2">
            <p>{item?.card?.info?.name}</p>
            <p>₹{item?.card?.info?.price / 10}</p>
            <p>{item?.card?.info?.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
