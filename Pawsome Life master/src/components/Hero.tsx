import React from 'react';
import pets from './pets.png';

const Hero = () => {
  return (
    <div className="bg-[#b6f1c4] py-24 md:py-40">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <div className="max-w-lg mb-8 md:mb-0">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-[#173a13]">Adopt Us</h1>
          <h1 className="text-4xl md:text-5xl mb-4 text-[#173a13]">Find Your Perfect Companion!</h1>
          <p className="text-lg md:text-xl mb-8 text-[#173a13]">
            Discover joy, love, and endless cuddles with your new furry friend from Pawsome Life...
          </p>
          
          {/* Custom Adoption Button */}
          <button
            className="group/button relative inline-flex items-center justify-center overflow-hidden rounded-md bg-[#1a5736] /30 backdrop-blur-lg px-6 py-2 text-base font-semibold text-white transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-xl hover:shadow-[#010a05]/50 border border-white/20"
          >
            <span className="text-lg">Start Adopting</span>
            <div
              className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-13deg)_translateX(-100%)] group-hover/button:duration-1000 group-hover/button:[transform:skew(-13deg)_translateX(100%)]"
            >
              <div className="relative h-full w-10 bg-white/30"></div>
            </div>
          </button>
        </div>

        <div className="w-full md:w-1/2 max-w-md transform scale-150">
          <img src={pets} alt="Happy pets" className="rounded-lg w-full" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
