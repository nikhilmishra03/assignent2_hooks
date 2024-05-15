import React from "react";

const Item = ({ item, addToCart }) => {
  return (
    <div className=" border-indigo-400 border rounded-md overflow-hidden shadow-md hover:shadow-lg ">
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-2">{item.name}</h2>
        <p className="text-gray-600">₹{item.price}</p>
      </div>

      <button
        className="text-white font-semibold bg-blue-500 w-full py-2 hover:bg-blue-600 transition-colors duration-300"
        onClick={() => addToCart(item)}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default Item;
