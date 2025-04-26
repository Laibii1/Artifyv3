import { useState } from "react";
import './navbar.css';
import { motion, AnimatePresence } from "framer-motion";
import { SignIn } from "./Signin";
import { Register } from "./Register";

export const UserDropdown = () => {
  const [showDropdown, setShowDropdown] = useState(true); // Controls dropdown visibility
  const [activeComponent, setActiveComponent] = useState(null); // "signin" or "register"

  const handleClick = (type) => {
    setShowDropdown(false);          // Close dropdown
    setActiveComponent(type);        // Open desired popup
  };

  return (
    <>
      {/* Dropdown Menu */}
      <AnimatePresence>
        {showDropdown && (
          <motion.div
            initial={{ y: "-10%", opacity: 0 }}
            animate={{ y: 4, opacity: 1 }}
            exit={{ y: "-10%", opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed top-30 right-15 w-[150px] h-auto rounded-[20px] bg-black text-white p-5 shadow-lg z-50"
          >
            <ul className="space-y-4 text-lg">
              <li>
                <button
                  onClick={() => handleClick("register")}
                  className="block font-outfit font-bold text-white transition-transform hover:translate-x-5.5 duration-300 hover:scale-110 hover:[text-shadow:0px_0px_10px_rgba(255,255,255,0.8)]"
                >
                  Register
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleClick("signin")}
                  className="block font-outfit font-bold text-white transition-transform hover:translate-x-5.5 duration-300 hover:scale-110 hover:[text-shadow:0px_0px_10px_rgba(255,255,255,0.8)]"
                >
                  Login
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Show Auth Popups */}
      {activeComponent === "signin" && <SignIn />}
      {activeComponent === "register" && <Register />}
    </>
  );
};
