import React from "react";

const menuItems = [
  { id: 1, name: "Pizza", price: 10 },
  { id: 2, name: "Burger", price: 8 },
  { id: 3, name: "Pasta", price: 12 },
];

const Menu = ({ addToCart }) => {
  return (
    <div>
      <h2>Menu</h2>
      <ul>
        {menuItems.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price}
            <button onClick={() => addToCart(item)}>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
