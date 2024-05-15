import React, { useState } from "react";
import Item from "./components/Item";
import Cart from "./components/Cart";
import AddItemList from "./components/AddItemList";

const App = () => {
  const [items, setItems] = useState([
    { id: 1, name: "Item 1", price: 1000 },
    { id: 2, name: "Item 2", price: 1500 },
    { id: 3, name: "Item 3", price: 2000 },
  ]);

  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const addItemToList = (item) => {
    item.id = Math.random();
    setItems([...items, item]);
  };

  return (
    <div className="container mx-auto">
      <div className=" pt-5 pb-1 bg-slate-200">
        <h1 className="text-3xl font-bold mb-8 text-center tracking-wide ">
          Welcome to the Shopping Cart
        </h1>
      </div>
      <div className="mt-8 w-1/2 mx-auto justify-center">
        <AddItemList addItemToList={addItemToList} />{" "}
      </div>
      <h3 className="text-xl font-bold my-8 text-center">Items</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {items.map((item) => (
          <Item key={item.id} item={item} addToCart={addToCart} />
        ))}
      </div>

      <div className="my-8 mx-12">
        <Cart cart={cart} />
      </div>
    </div>
  );
};

export default App;
