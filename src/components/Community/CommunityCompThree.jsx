
import React, { useState } from 'react';
import './CommunityComp.css';

export const CommunityCompThree = () => {
  // State to control the visibility of the form
  const [showForm, setShowForm] = useState(false);

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
        <button
          onClick={() => setShowForm(true)} // Toggle form visibility
          className="mb-5 sm:mb-5 mt-15 bg-[#008A77] text-2xl text-white py-2 px-10 rounded-2xl font-bold font-outfit hover:bg-black transition hover:scale-105 inline-block text-center"
        >
          Mint Your NFT Now
        </button>
      </div>

      {/* Popup Form */}
      {showForm && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <div className="bg-[#1a1a1a] max-w-5xl w-full mx-4 md:mx-auto rounded-2xl shadow-2xl border border-gray-700 p-6 md:p-10 transition-all duration-300 transform hover:scale-105 relative">
            {/* Close Button */}
            <button
              className="absolute top-4 right-6 text-white text-2xl font-bold hover:text-red-500"
              onClick={() => setShowForm(false)}
            >
              ×
            </button>

            <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-6">
              Mint Your NFT
            </h2>

            <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Left Section */}
              <div className="bg-black/70 text-white p-6 rounded-xl flex items-center justify-center backdrop-blur-sm border border-gray-600">
                <p className="text-center text-lg font-medium">
                  Upload your image in <br />
                  <span className="text-orange-400">png, jpg, and pdf</span> format
                </p>
              </div>

              {/* Right Section */}
              <div className="space-y-4 text-white">
                <div>
                  <label className="block mb-1 text-sm font-semibold">Your Name</label>
                  <input
                    type="text"
                    placeholder="e.g. John Doe"
                    className="w-full p-3 rounded-lg bg-white text-black placeholder-gray-500"
                  />
                </div>
                <div>
                  <label className="block mb-1 text-sm font-semibold">NFT Collection Name</label>
                  <input
                    type="text"
                    placeholder="e.g. CryptoPunks"
                    className="w-full p-3 rounded-lg bg-white text-black placeholder-gray-500"
                  />
                </div>
                <div>
                  <label className="block mb-1 text-sm font-semibold">Amount</label>
                  <input
                    type="number"
                    placeholder="e.g. 1"
                    className="w-full p-3 rounded-lg bg-white text-black placeholder-gray-500"
                  />
                </div>
                <div>
                  <label className="block mb-1 text-sm font-semibold">Description</label>
                  <textarea
                    rows="3"
                    placeholder="Describe your NFT..."
                    className="w-full p-3 rounded-lg bg-white text-black placeholder-gray-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 mt-2 text-lg font-bold text-white bg-[#e65100] rounded-lg transition-all duration-300 transform hover:scale-110 hover:bg-[#cc4600]"
                >
                  MINT MY NFT
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
