// src/Pages/NotFound.js
import React from 'react';
import notFoundImage from '../All Images_Playette/All Images_Playette/Crewneck/03.png'; 

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen -mt-4 text-gray-300">
      <img src={notFoundImage} alt="Page Not Found" className="w-1/2 md:w-1/4" /> 
      <h1 className="text-6xl font-bold mt-4">404</h1>
      <p className="mt-2 text-xl">Page Not Found</p>
      <a href="/" className="mt-3 text-blue-400 hover:underline">
        Go Back to Home
      </a>
    </div>
  );
};

export default NotFound;
