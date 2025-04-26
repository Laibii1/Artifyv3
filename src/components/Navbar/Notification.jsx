import { useState } from "react";
import './navbar.css';
import { motion, AnimatePresence } from "framer-motion";


export const NotificationOn = () => {

  return (
    <>
      {/* Notification On */}
      <AnimatePresence>
        
          <motion.div
            initial={{ y: "-10%", opacity: 0 }}
            animate={{ y: 4, opacity: 1 }}
            exit={{ y: "-10%", opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed text-center top-30 right-15 w-[300px] h-auto rounded-[20px] bg-black text-white p-5 shadow-lg z-50"
          >
          <h1  className="block font-rammetto font-bold text-white">
            Notification
          </h1>
          <p className="block font-outfit font-bold text-white">
            Your notification turned ON
          </p>
          </motion.div>
      
      </AnimatePresence>

   
    </>
  );
};

export const NotificationOff = () => {
  
  
    return (
      <>
       {/* Notification On */}
       <AnimatePresence>
      
       <motion.div
            initial={{ y: "-10%", opacity: 0 }}
            animate={{ y: 4, opacity: 1 }}
            exit={{ y: "-10%", opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed text-center top-30 right-15 w-[300px] h-auto rounded-[20px] bg-black text-white p-5 shadow-lg z-50"
          >
          <h1  className="block font-rammetto font-bold text-white">
            Notification
          </h1>
          <p className="block font-outfit font-bold text-white">
            Your notification turned OFF
          </p>
          </motion.div>
   
      </AnimatePresence>
      </>
    );
  };
  