import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";
import { NavLink } from "react-router-dom";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log("carItems:", cartItems);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className="flex justify-center pt-4">
      <div className="w-2/5 h-[400px]">
        <div>
          <p className="text-center font-bold text-2xl">Cart</p>
          {cartItems.length === 0 ? (
            <div className="h-[calc(100vh-200px)] flex justify-center items-center">
              <div className="flex justify-center items-center flex-col	">
                <h1 className="font-bold text-2xl text-center">
                  Cart is empty please add some items go to
                </h1>
                <NavLink to={"/"} className='font-extrabold'>Home</NavLink>
              </div>
            </div>
          ) : (
            <>
              <ItemList items={cartItems} />
              <div className="flex justify-end">
                <button
                  className="bg-blue-400 py-2 px-4 text-white border rounded-md"
                  onClick={handleClearCart}
                >
                  clear cart
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
