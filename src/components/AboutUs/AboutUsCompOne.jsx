import './AboutUsComp.css';
import AboutUsEmailSubscription from './AboutUsEmail';
import { Discount } from './Discount';

export const AboutUsCompOne = () => {
  return (
    <div className="relative bg-black text-white font-sans  flex flex-col items-center justify-center">
      {/* Main content box */}
      <div className="bg-black p-8 rounded-lg text-center flex flex-col lg:flex-row items-center justify-center lg:items-start relative z-10">
        {/* Left side - Text content */}
        <div className="lg:w-1/2 lg:pr-8 mt-25 text-center ml-5">
          <div className="relative inline-block mb-4">
          <span className="bg-[#e65100] text-white text-2xl font-outfit font-bold px-3 py-2 transform rotate-[-20deg] inline-block">
           <span className="block transform font-outfit text-2xl -rotate-[-20deg]">Who</span>
          </span>
            <span className="text-white font-bold text-2xl"> we are?</span> 
          </div>
          <h2 className="text-2xl font-bold font-outfit mb-4">Celebrating Art, Creativity, and Connection</h2>
          <p className="mb-8">
            Welcome to Artfy platform. We are a passionate community of artists and art enthusiasts dedicated to bringing creativity to life. Our mission is to connect talented artists with art lovers, making beautiful, meaningful pieces accessible to everyone while bringing different opportunities to artists to gain financial freedom.
          </p>
          <div className="flex justify-center mb-8">
            <AboutUsEmailSubscription />
          </div>
        </div>

        {/* Right side - Image */}
        <div className="lg:w-1/2 relative">
          <img
            src="/AboutUspic1.jpeg"
            alt="Abstract art of a woman's face with black and orange brush strokes"
            className="rounded-lg absolute right-20 top-0  lg:block"
            style={{ height: '520px', width: '400px' }}
          />
        </div>
      </div>
      <Discount/>

    </div>
   
  );
};
