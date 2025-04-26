import './AboutUsComp.css';
import { Link } from "react-router-dom";

export const AboutUsCompFour = () => {
  return (
    <div className="flex items-center justify-center mt-25 bg-white">
      <div className="max-w-5xl min-h-70 mx-auto bg-black rounded-3xl shadow-md overflow-hidden">
        <div className="grid md:grid-cols-2">
          {/* Image Column */}
          <div className="md:flex-shrink-0">
            <img
              className="w-full h-full object-cover"
              src="/AboutUs9.jpeg"
              alt="A vibrant and colorful painting of a busy city street with people walking."
            />
          </div>
          
          {/* Content Column */}
          <div className="p-8 flex flex-col justify-center items-center text-center">
            <div className="uppercase tracking-wide font-outfit text-white text-2xl font-semibold">
              Join Our Artists' Community
            </div>
            <p className="mt-5 text-white font-outfit font-extralight">
              Become a part of a vibrant and inspiring community of artists and creators! Share your art, learn from peers, and discover opportunities to grow and succeed in your artistic journey. Join us and be a part of a movement that celebrates creativity and empowers artists to thrive!
            </p>
            <div className="mt-4">
              <Link to='/community'
                className="inline-block font-bold px-6 bg-[#D7521D] text-white py-2 mt-5  rounded-full mb-8 font-outfit transition-all duration-300 hover:bg-[#D7521D] hover:scale-105"
              >
                Explore more
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
