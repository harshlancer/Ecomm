import React from "react";
import Navbar from "./Navbar";
import { animate, motion } from "framer-motion";
function Profile() {
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
      variants={containerVariant}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <Navbar />
      This is your profile
    </motion.div>
  );
}

export default Profile;
