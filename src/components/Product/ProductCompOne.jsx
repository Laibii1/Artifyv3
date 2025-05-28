import { Link } from 'react-router-dom';

export const ProductCompOne = () => {
  return (
    <div className="bg-white flex justify-center items-center mt-10 md:ml-20">
      <div className="flex flex-col md:flex-row bg-white p-4 rounded-lg w-full max-w-6xl">
        
        {/* Column 2 - Large Image */}
        <div className="flex justify-center items-center w-full md:w-3/8 md:ml-6 mt-4 md:mt-0">
          <div className="w-full h-[470px]">
            <img
              alt="Main product"
              className="w-full h-full object-cover rounded-lg"
              src="/artistwork2.jpeg"
            />
          </div>
        </div>

        {/* Column 3 - Text Content */}
        <div className="w-full md:w-3/8 md:ml-6 mt-4 md:mt-10">
          <h1 className="text-2xl font-bold">Digital Art Flower Design</h1>

          <div className="flex items-center mt-2">
            <span className="text-gray-500 line-through mr-2">PKR 1200</span>
            <span className="text-2xl font-bold text-black">PKR 1100</span>
            <span className="ml-2 bg-black text-white text-sm px-2 py-1 rounded">
              5% Discount
            </span>
          </div>

          <div className="flex items-center mt-2">
            <span className="ml-2 text-gray-500">1.2K views</span>
            <span className="ml-4 text-gray-500">800 likes</span>
          </div>

          <h2 className="text-xl font-bold mt-5">Description</h2>
          <p className="text-gray-700 text-center mt-2">
            This masterpiece is crafted with precision, featuring vibrant colors and
            intricate details that bring imagination to life. Perfect for home decor,
            office spaces, or as a thoughtful gift, this digital artwork is available
            in high-quality resolution, ensuring stunning clarity and impact.
          </p>

          <div className="flex mt-7 items-center">
            <Link to='/cart' className="bg-white text-lg font-outfit font-bold text-black border border-black px-5 py-2 rounded-2xl mr-2 md:mr-10 md:ml-15 transition-all duration-300 hover:bg-black hover:text-white hover:scale-105">
              Add to cart
            </Link>
            <Link to='/checkout' className="bg-black text-lg font-outfit font-bold text-white px-9 py-2 rounded-2xl transition-all duration-300 hover:bg-[#D7521D] hover:scale-105">
              Checkout
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

