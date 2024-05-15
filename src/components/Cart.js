import React from "react";

const Cart = ({ cart }) => {
  const totalCount = cart.length;
  const totalSum = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="border border-gray-300 rounded-md p-4 bg-slate-100">
      <h2 className="text-lg font-semibold mb-4 text-center">
        Your Cart({totalCount})
      </h2>
      {totalCount === 0 ? (
        <p className="text-center">Your cart is empty</p>
      ) : (
        <>
          <ul>
            {cart.map((item, index) => (
              <li
                key={index}
                className="flex justify-between items-center mb-2"
              >
                <span>{item.name}</span>
                <span className="font-semibold">₹{item.price}</span>
              </li>
            ))}
          </ul>
          <div className="mt-4">
            <p className="font-semibold flex justify-between items-center">
              Total Price: <span>₹{totalSum}</span>
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
