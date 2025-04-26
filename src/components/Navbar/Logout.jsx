import './navbar.css';
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export const Logout = () => {
  const [showLogout, setShowLogout] = useState(true);

  const handleCancel = () => {
    setShowLogout(false);
  };

  return (
    <AnimatePresence>
      {showLogout && (
        <motion.div
          initial={{ y: "-10%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "-10%", opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed top-3/5 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-2 bg-white text-black p-5 shadow-lg z-50 rounded-xl overflow-hidden w-[80%] max-w-[500px] h-[200px]"
        >
          <h2 className="text-2xl font-outfit font-bold mb-4 text-center">Log Out?</h2>
          <p className="text-gray-600 mb-6 text-center">Are you sure you want to leave?</p>
          <div className="flex justify-center space-x-6">
            <button
              onClick={handleCancel}
              className="px-6 py-3 bg-gray-200 font-outfit font-semibold text-black rounded-xl transition-all duration-300 hover:bg-[#D7521D] hover:text-white"
            >
              Cancel
            </button>
            <a
              href="/home"
              className="px-6 font-outfit font-bold py-3 bg-black text-white rounded-xl transition-all duration-300 hover:bg-[#D7521D] hover:scale-105"
            >
              Log out
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
