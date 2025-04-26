import { useState, useEffect, useRef } from "react";
import React from "react";
import "./navbar.css";
import { motion } from "framer-motion";

export const SearchBar = () => {
  const [searchValue, setSearchValue] = useState("");
  const [isOpen, setIsOpen] = useState(true);
  const searchRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    isOpen && (
      <div ref={searchRef} className="flex justify-center items-start w-full absolute tracking-wide top-8 lg:top-12 md:top-8 sm:top-8">
        <motion.div
          initial={{ x: "10%" }}
          animate={{ x: 4 }}
          exit={{ x: "10%" }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="bg-white p-5 h-[50px] sm:h-[50px] md:h-[70px] lg:h-[80px] w-2.5/3 sm:w-2/3 md:w-2/3 lg:w-2/3 max-w-3xl sm:mr-2"
        >
          {/* Search Bar */}
          <input
            type="text"
            placeholder="Search..."
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            className="w-full px-4 py-2 text-lg h-[40px] sm:h-[45px] font-outfit md:h-[50px] lg:h-[50px] bg-black placeholder:text-white text-white border border-white-300 rounded-full focus:outline-none focus:ring-2 focus:ring-white-500"
          />
        </motion.div>
      </div>
    )
  );
};
