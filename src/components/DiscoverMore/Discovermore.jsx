import "./Discovermore.css";
import { FaHeart } from "react-icons/fa";
import { useState } from "react";

export const DiscoverMore = () => {
  const artworks = [
    { id: 1, src: "/Discovermore1.png", alt: "Floral Painting" },
    { id: 2, src: "/Discovermore2.png", alt: "Butterfly Painting" },
    { id: 3, src: "/Discovermore3.png", alt: "Abstract Painting" },
    { id: 4, src: "/Discovermore4.jpeg", alt: "Abstract Painting" },
  ];

  return (
    <div className=" text-center mt-30">
      <div className="relative w-full flex items-center justify-center my-4 mt-25">
        <span className="mx-2 w-[600px] text-black-600 font-bold font-outfit text-[20px] lg:text-3xl md:text-3xl sm:text-2xl">
          Discover More
        </span>
      </div>

      <div className="mt-8 lg:flex md:flex sm:flex justify-center gap-6 ml-4 mr-4">
        {artworks.map((art) => (
          <ArtworkCard key={art.id} art={art} />
        ))}
      </div>
    </div>
  );
};

const ArtworkCard = ({ art }) => {
  const [liked, setLiked] = useState(false);

  return (
    <div
      className="relative w-full h-86 mb-8 overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 
      lg:w-80 lg:h-96 md:w-80 md:h-96 sm:w-70 sm:h-86"
    >
      {/* Image */}
      <img src={art.src} alt={art.alt} className="w-full h-full object-cover" />

      {/* Heart Button */}
      <button
        onClick={() => setLiked(!liked)}
        className="absolute top-3 right-3 bg-black text-white p-2 rounded-full transition-all"
      >
        <FaHeart size={18} color={liked ? "#D7521D" : "white"} />
      </button>
    </div>
  );
};
