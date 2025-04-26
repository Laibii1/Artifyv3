import React from 'react';

export const Error404Page = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-800">404</h1>
        <p className="text-2xl text-gray-600 mb-4">Oops! The page you're looking for doesn't exist.</p>
        <p className="text-lg text-gray-500 mb-6">It might have been moved, or the URL could be incorrect.</p>
        <a
          href="/home"
          className="bg-[#008A77] text-white py-2 px-6 rounded-lg text-lg font-semibold hover:bg-[#008A77] transition"
        >
          Go Back Home
        </a>
      </div>
    </div>
  );
};


