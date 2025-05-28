
import './AristWorkSection.css';
import { Link } from 'react-router-dom';
import { ProductCompOne } from '../Product/ProductCompOne';

export const ArtistWork = () => {
  const artworks = [
    { id: 1, src: "/artistwork2.jpeg", alt: "Floral Painting" },
    { id: 2, src: "/artistwork1.jpeg", alt: "Butterfly Painting" },
    { id: 3, src: "/artistwork3.jpeg", alt: "Abstract Painting" },
  ];

  return (
    <div className="py-3 text-center lg:py-10 md:py-8 sm:py-7">
      <div className="relative w-full flex items-center justify-center my-4 mt-25">
        <div className="w-full h-[3px] bg-[#D7521D]"></div>
        <span className="mx-2 w-[600px] text-black-600 font-bold font-outfit text-[20px] lg:text-3xl md:text-3xl sm:text-2xl">
          Our Artist Work
        </span>
        <div className="w-full h-[3px] bg-[#D7521D]"></div>
      </div>

      <p className="text-black-600 font-outfit text-[12px] lg:text-[15px] md:text-[15px] sm:text-1xl">
        Iconic Artistry, Functional Design: Where Every Piece Tells a Story
      </p>

      <div className="mt-8 lg:flex md:flex sm:flex justify-center gap-6 ml-4 mr-4 flex-wrap">
        {artworks.map((art) => (
          <div
            key={art.id}
            className="w-full h-86 mb-8 overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105
            lg:w-80 lg:h-96 md:w-80 md:h-96 sm:w-70 sm:h-86 relative"
          >
            <img
              src={art.src}
              alt={art.alt}
              className="w-full h-full object-cover"
            />

            {art.id === 1 && (
              <Link
                to="/product"
                className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black text-white text-sm px-4 py-2 rounded-lg font-semibold transition-transform duration-300 hover:scale-110"
              >
                See the Product
              </Link>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
