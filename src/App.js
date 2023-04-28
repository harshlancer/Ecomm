import React, { useState, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Profile from "./Components/Profile";
import Cart from "./Components/Cart";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";

function App() {
  const API = "https://fakestoreapi.com/products";

  const location = useLocation();
  const [cartItems, setCartItems] = useState([]);
  const handleClick = (product) => {
    setCartItems((prevState) => {
      // check if the product already exists in cartItems
      const isProductInCart = prevState.some((item) => item.id === product.id);

      // if the product is not in cartItems, add it to the array
      if (!isProductInCart) {
        return [...prevState, product];
      }

      // if the product is already in cartItems, return the previous state without modifying it
      return prevState;
    });
  };

  const [product, setProduct] = useState([]);
  useEffect(() => {
    getProducts(API);
  }, []);
  const getProducts = async (url) => {
    await axios.get(url).then((response) => {
      setProduct(response.data);
      console.log(response.data);
    });
  };

  const empty = () => {
    setCartItems([]);
  };

  return (
    <div>
      <Routes location={location} key={location.key}>
        <Route
          exact
          path="/"
          element={
            <Home
              cartItems={cartItems}
              handleClick={handleClick}
              product={product}
              getProducts={getProducts}
            />
          }
        ></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route
          path="/cart"
          element={<Cart cartItems={cartItems} empty={empty} />}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
