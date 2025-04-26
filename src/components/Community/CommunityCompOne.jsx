import './CommunityComp.css';

export const CommunityCompOne = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Responsive Background Image */}
      <img
        src="/Communitybg2.png"
        alt="Background Wave"
        className="absolute top-0 left-0 w-full h-full object-cover z-0
                   sm:h-[90%] md:h-full lg:h-full"
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 py-12 md:py-24">
        {/* Light Bulb Left */}
        <img
          src="/bulb.png"
          alt="Idea"
          className="absolute top-5 left-5 sm:left-10 md:left-16 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-15 lg:h-15"
        />

        <h1 className="mt-10 sm:mt-10 md:mt-20 lg:-mt-10 text-2xl font-outfit md:text-4xl font-bold text-black mb-4">
          Welcome to the Artify Cloth Community
        </h1>
        <p className="text-black max-w-2xl font-outfit text-sm md:text-base mb-6">
          A creative hub for artists to showcase, collaborate, and bring fabric designs to life!
        </p>

        {/* Join Now Button */}
        <a
          href="https://artify-platform.mn.co/spaces/19108320/feed"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#008A77] text-white px-10 py-2 rounded-2xl font-semibold font-outfit hover:bg-black transition hover:scale-105"
        >
          Join Now
        </a>

        {/* Light Bulb Right */}
        <img
          src="/bulb.png"
          alt="Idea"
          className="absolute top-20 right-5 sm:right-10 md:right-16 lg:right-25 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-15 lg:h-15"
        />

        {/* People Illustration */}
        <img
          src="/CommunityGroupv1.png"
          alt="Community Group"
          className="mt-12 w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl z-20"
        />
      </div>
    </div>
  );
};
