import './AristWorkSection.css';


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
        <span className="mx-2 w-[600px] text-black-600 font-bold font-outfit text-[20px]  lg:text-3xl md:text-3xl sm:text-2xl ">Our Artist Work</span>
        <div className="w-full h-[3px] bg-[#D7521D]"></div>
      </div>
      <p className="text-black-600 font-outfit lg:text-black-600 md:text-black-600 sm:text-black-600 text-[12px] lg:text-[15px] md:text-[15px]  sm:text-1xl">
        Iconic Artistry, Functional Design: Where Every Piece Tells a Story
      </p>

      <div className="mt-8 lg:flex md:flex sm:flex  justify-center gap-6 ml-4 mr-4">
        {artworks.map((art) => (
          <div 
            key={art.id} 
            className="w-full h-86 mb-8 overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105
            lg:w-80 lg:h-96 md:w-80 md:h-96 sm:w-70 sm:h-86"
          >
            <img 
              src={art.src} 
              alt={art.alt} 
              className="w-full h-full object-cover" 
            />
          </div>
        ))}
      </div>
    </div>

  );
};

