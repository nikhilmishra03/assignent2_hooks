import React, { useState } from "react";

const AddItemList = ({ addItemToList }) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !price) return;
    const newItem = { name, price: parseFloat(price) };
    addItemToList(newItem);
    setName("");
    setPrice("");
  };

  return (
    <div className=" bg-emerald-100 border border-gray-200 max-w-3xl rounded-md overflow-hidden shadow-md">
      <form onSubmit={handleSubmit} className="p-4">
        <h2 className="text-xl font-semibold text-slate-500 text-center mb-2">
          Add Items to List
        </h2>
        <div className="mb-4">
          <label className="block font-bold mb-2 text-slate-600">Name</label>
          <input
            type="text"
            placeholder="Enter Item Name"
            className="border border-gray-300 rounded-md px-3 py-2 w-full"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block font-bold mb-2 text-slate-500">Price</label>
          <input
            type="number"
            placeholder="Enter Item Price"
            className="border border-gray-300 rounded-md px-3 py-2 w-full"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 "
        >
          Add Item
        </button>
      </form>
    </div>
  );
};

export default AddItemList;
