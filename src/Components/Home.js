import React from "react";
import Navbar from "./Navbar";
import { useEffect } from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";

function Home({ cartItems, handleClick, product, getProducts }) {
  const API = "https://fakestoreapi.com/products";

  useEffect(() => {
    getProducts(API);
  }, []);
  

  const containerVariant = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { delay: 0.4, duration: 1 } },
    exit: {
      x: "-100vw",
      transition: { ease: "easeInOut" },
    },
  };

  return (
    <motion.div
      className="home"
      variants={containerVariant}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <Navbar />
      <div className="home-Products">
        <motion.h1
          initial={{ y: -250, opacity: 0 }}
          animate={{ y: -10, opacity: 1 }}
          className="header"
        >
          Products
        </motion.h1>
        <hr></hr>
        <div className="products">
          <motion.div
            className="product-card"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1.1 }}
          >
            {product.map((product) => {
              return (
                <div key={product.id}>
                  <motion.img
                    className="product-image"
                    src={product.image}
                    alt={product.title}
                    whileHover={{ scale: 1.2 }}
                  ></motion.img>
                  <h4 className="product-title">{product.title}</h4>
                  <p>{product.discription}</p>
                  <motion.button
                    onClick={handleClick(product)}
                    whileHover={{
                      scale: 1.1,
                      textShadow: "0px 0px 0px rgb(255,255,255)",
                      boxShadow: "0px 0px 0px rgb(255,255,255)",
                    }}
                  >
                    Add to Cart
                  </motion.button>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export default Home;
