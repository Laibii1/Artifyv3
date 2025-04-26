import './CommunityComp.css';

export const CommunityCompThree = () => {
  return (
    <div className="bg-[#D7521D] px-6 flex flex-col md:flex-row items-center mt-20 justify-between w-full max-h-full">
      <div className="flex mt-10">
        <img 
          alt="Illustration of diverse people holding hands" 
          className="w-full h-auto px-5" 
          src="/CommunityComp3Img.png" 
          style={{ height: '300px', width: 'auto' }} 
        />
      </div>
      <div className="text-center md:text-center px-5 md:ml-6 mt-6 md:mt-0">
        <h1 className="text-white text-2xl md:text-3xl font-outfit font-bold">
          Create Your Own NFT
        </h1>
        <p className="text-white mt-2 font-outfit">
          Turn your unique ideas into digital collectibles effortlessly. Start minting your custom NFTs today!
        </p>
        <a
        href="https://opensea.io/"
        target="_blank"
        rel="noopener noreferrer"
        className="mb-5 sm:mb-5  mt-15 bg-[#008A77] text-2xl text-white py-2 px-10 rounded-2xl font-bold font-outfit hover:bg-black transition hover:scale-105 inline-block text-center"
        >
        Mint Your NFT Now
       </a>
      </div>
    </div>
  );
};
