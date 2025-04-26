import React, { useState } from "react";
import { FaHeart } from "react-icons/fa";
import "./DiscountSection.css";
import { Link } from "react-router-dom";

const ProductShowcase = ({ product, isLarge }) => {
  const [liked, setLiked] = useState(false);

  return (
    <div
      className={`relative ${isLarge ? 
        "row-span-2 h-[620px] w-30%"  : "h-[300px] w-30%"} bg-white shadow-lg rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105`}
    >
      {/* Product Image */}
      <img src={product.image} alt={product.title} className="w-full h-full object-cover" />

      {/* Heart Button */}
      <button
        onClick={() => setLiked(!liked)}
        className="absolute top-3 right-3 bg-black text-white p-2 rounded-full transition-all"
      >
        <FaHeart size={18} color={liked ? "#D7521D" : "white"} />
      </button>

      {/* Product Button */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
        <Link to='/product' className="bg-[#D7521D] font-bold font-outfit text-white px-5 py-2 rounded-lg transition-all duration-300 hover:bg-[#000000] hover:scale-105">
          See Product
        </Link>
      </div>
    </div>
  );
};

export const DiscountProductCard = () => {
  const products = [
    { id: 0, image: "/product1.png", title: "Floral Shirt", isLarge: false },
    { id: 1, image: "/product2.png", title: "Embroidery Art", isLarge: false },
    { id: 2, image: "/product6.png", title: "Tote Bag", isLarge: false },
    { id: 3, image: "/product3.png", title: "Decorative Shirt", isLarge: false },
    { id: 4, image: "/product4.png", title: "Decorative Shirt", isLarge: false },
    { id: 5, image: "/product5.png", title: "Tote Bag", isLarge: true },
  ];

  return (
    <div className=" px-6 mt-30">

      {/* Grid Layout */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-4 mr-2 ml-2">
       <div className="mb-6 text-center">
         <h2 className="text-xl font-outfit font-bold">Global spotlight product of our market</h2>
         <h3 className="text-3xl font-outfit font-bold">30% Off on the new arrival product.</h3>
       </div>

        <ProductShowcase product={products[0]}  />
        <ProductShowcase product={products[1]} />
        <ProductShowcase product={products[2]} isLarge/>
        <ProductShowcase product={products[3]}  />
        <ProductShowcase product={products[4]}  />
        <ProductShowcase product={products[5]}  />
      </div>
    </div>
  );
};
