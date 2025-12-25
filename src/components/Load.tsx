import React from 'react';

const Load = () => {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-white">
      {/* Logo */}
      <img
        src="https://i.ibb.co/WvjsSPMn/Ganga-seeds-logo.png"
        alt="Ganga Seeds Logo"
        className="h-20 w-auto md:h-24 lg:h-32 mb-8"
      />

      {/* Loading Dots */}
      <div className="flex gap-2">
        <span className="w-3 h-3 bg-green-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
        <span className="w-3 h-3 bg-green-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
        <span className="w-3 h-3 bg-green-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
      </div>
    </div>
  );
};

export default Load;