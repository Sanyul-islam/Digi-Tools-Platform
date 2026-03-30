import React from 'react';

const RatingSection = () => {
    return (
      <div className="container mx-auto mt-12">
        <div className="flex text-center text-white py-8 px-6 bg-linear-to-r from-[#4F39F6] to-[#9514FA]">
          <div className="flex-1 relative">
            <h2 className="text-3xl font-bold">50K+</h2>
            <p className="text-sm mt-1 opacity-90">Active Users</p>
            <div className="absolute right-0 top-1/2 -translate-y-1/2 h-10 w-px bg-white/40"></div>
          </div>

          <div className="flex-1 relative">
            <h2 className="text-3xl font-bold">200+</h2>
            <p className="text-sm mt-1 opacity-90">Premium Tools</p>
            <div className="absolute right-0 top-1/2 -translate-y-1/2 h-10 w-px bg-white/40"></div>
          </div>

          <div className="flex-1">
            <h2 className="text-3xl font-bold">4.9</h2>
            <p className="text-sm mt-1 opacity-90">Rating</p>
          </div>
        </div>
      </div>
    );
};

export default RatingSection;