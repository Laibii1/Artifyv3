import React, { useRef, useState, useEffect } from "react";
import { FaCheck, FaChevronLeft, FaChevronRight, FaHeart } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import "./ExtraArt.css";

export const ExtraArt = () => {
  
  const scrollRef = useRef(null);
  const [likedItems, setLikedItems] = useState({});
  const [isDropdownOpen, setDropdownIsOpen] = useState(false);

  // EFFECT to automatically close notification after 2 seconds
  useEffect(() => {
    let timer;
    if (isDropdownOpen) {
      timer = setTimeout(() => {
        setDropdownIsOpen(false);
      }, 1000); // 1 second
    }
    return () => clearTimeout(timer);
  }, [isDropdownOpen]);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollLeft += direction === "left" ? -scrollAmount : scrollAmount;
    }
  };

  const toggleLike = (id) => {
    setLikedItems((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const artworks = [
    { id: 1, src: "/ExtrArt1.png", alt: "Swan Painting" },
    { id: 2, src: "/ExtrArt2.png", alt: "Sunset Sketchbook" },
    { id: 3, src: "/ExtrArt3.png", alt: "Abstract Artwork" },
    { id: 4, src: "/ExtrArt1.png", alt: "Swan Painting" },
    { id: 5, src: "/ExtrArt2.png", alt: "Sunset Sketchbook" },
    { id: 6, src: "/ExtrArt3.png", alt: "Abstract Artwork" },
  ];

  return (
    <>
      <div className="py-10 px-6">
        {/* Header & Buttons */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold font-outfit">Extraordinary Creations</h2>
          <div className="flex gap-2">
            <button
              onClick={() => scroll("left")}
              className="p-2 rounded-full bg-black text-white"
            >
              <FaChevronLeft size={16} />
            </button>
            <button
              onClick={() => scroll("right")}
              className="p-2 rounded-full bg-black text-white"
            >
              <FaChevronRight size={16} />
            </button>
          </div>
        </div>

        {/* Scrollable Images */}
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto scroll-smooth no-scrollbar"
          style={{
            scrollbarWidth: "none", // Firefox
            msOverflowStyle: "none", // IE/Edge
          }}
        >
          <style>
            {`
              .no-scrollbar::-webkit-scrollbar {
                display: none;
              }
            `}
          </style>

          {artworks.map((art) => (
            <div
              key={art.id}
              className="relative w-72 flex-shrink-0 rounded-lg overflow-hidden shadow-lg"
            >
              <img
                src={art.src}
                alt={art.alt}
                className="w-full h-96 object-cover"
              />
              {/* Favorite Button */}
              <button
                onClick={() => toggleLike(art.id)}
                className="absolute top-3 right-3 p-2 bg-black text-white rounded-full"
              >
                <FaHeart size={16} color={likedItems[art.id] ? "#D7521D" : "white"} />
              </button>
              {/* Add to Cart Button */}
              <button
                onClick={() => setDropdownIsOpen(true)}
                className="absolute font-outfit font-bold bottom-4 left-1/2 transform -translate-x-1/2 bg-[#D7521D] text-white px-4 py-2 rounded-md transition-all duration-300 hover:bg-black hover:scale-105"
              >
                Add to cart
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Notification */}
      <AnimatePresence>
        {isDropdownOpen && (
          <motion.div
            initial={{ y: "-10%", opacity: 0 }}
            animate={{ y: 4, opacity: 1 }}
            exit={{ y: "-10%", opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed top-30 right-15 w-auto h-auto rounded-[20px] bg-black text-white p-5 shadow-lg z-50"
          >
            <li className="flex items-center font-outfit font-bold text-white gap-2">
              Added Successfully <FaCheck />
            </li>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
