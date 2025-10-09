import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, clearCart } from "../redux/slices/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const { cartItems, totalQuantity, totalPrice } = useSelector((state) => state.cart);

  return (
    <div className="p-4 border rounded-xl shadow-md">
      <h2>🛒 Cart ({totalQuantity} items)</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id} className="flex justify-between mt-2">
            <span>{item.name} (x{item.quantity})</span>
            <span>₹{item.totalPrice}</span>
            <button
              onClick={() => dispatch(removeFromCart(item.id))}
              className="text-red-500"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>

      <h3 className="mt-4 font-bold">Total: ₹{totalPrice}</h3>
      <button
        onClick={() => dispatch(clearCart())}
        className="bg-red-500 text-white px-3 py-1 rounded mt-2"
      >
        Clear Cart
      </button>
    </div>
  );
};

export default Cart;