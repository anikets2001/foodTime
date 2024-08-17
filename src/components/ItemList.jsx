import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import { CARD_IMAGE_BASE_URL } from "../utils/constants";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    // dispatch an action to add item into the cart
    dispatch(addItem(item));
  };

  return (
    <div>
      {items.map((item) => (
        <div key={item?.card?.info?.id}>
          <div className="mt-2 text-left border-t-2 flex items-center space-x-4">
            <div>
              <img
                src={CARD_IMAGE_BASE_URL + item?.card?.info?.imageId}
                width={70}
                height={70}
                alt="item-image"
              />
              <button
                className="py-1 px-3 bg-white shadow-md rounded-md relative bottom-5 w-[100%] border text-blue-800 font-semibold"
                onClick={() => handleAddItem(item?.card?.info?.name)}
              >
                + Add
              </button>
            </div>
            <div>
              <p>
                {item?.card?.info?.name ?? item}
              </p>
              <p>
                ₹
                {item?.card?.info?.price / 100 ??
                  item?.card?.info?.defaultPrice / 100}
              </p>
              <p>{item?.card?.info?.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
