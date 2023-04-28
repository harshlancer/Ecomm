import React from "react";
import Navbar from "./Navbar";

function Cart({ cartItems, empty }) {
  return (
    <div>
      <Navbar />
      <h1>Your Cart</h1>
      <button onClick={empty}>Empty Cart</button>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              <div>{item.image} </div>
              <div>{item.title}</div>
              <div>
                Price: ${item.price} - Quantity: {item.quantity}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Cart;
