import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/slices/cartSlice";

const Product = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <div className="border p-4 rounded-xl shadow-md">
      <h2>{product.name}</h2>
      <p>₹{product.price}</p>
      <button
        onClick={handleAddToCart}
        className="bg-blue-500 text-white px-3 py-1 rounded mt-2"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default Product;

