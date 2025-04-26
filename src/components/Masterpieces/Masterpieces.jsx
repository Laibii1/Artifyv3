 import './Masterpieces.css';
 

 export const ThreadedMasterpieces = () => {
    const images = [
      "/ThreadedMasterpieces1.jpeg",
      "/ThreadedMasterpieces2.jpeg",
      "/ThreadedMasterpieces3.jpeg",
      "/ThreadedMasterpieces4.jpeg",
    ];
  
    return (
      <div className="flex flex-col items-center justify-center text-center px-4 mt-30">
        {/* Heading */}
        <h2 className="text-2xl font-bold font-outfit md:text-3xl">Threaded Masterpieces</h2>
        <p className="text-black-600 font-semibold font-outfit mt-2">
          Where intricate threads weave unseen creativity.
        </p>
  
        {/* Circular Overlapping Images */}
        <div className="flex items-center justify-center mt-10">
          {images.map((src, index) => (
            <div
              key={index}
              className="w-28 h-28 md:w-46 md:h-46 lg:w-60 lg:h-60 rounded-full overflow-hidden shadow-lg 
              -ml-5 first:ml-0"
            >
              <img
                src={src}
                alt={`Embroidery ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
  
       
      </div>
    );
  }
  