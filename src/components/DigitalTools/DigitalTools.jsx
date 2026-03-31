import React from 'react';

const DigitalTools = () => {
  return (
    <div className="bg-base-100 flex items-start justify-center pt-16">
      <div className="rounded-xl p-10 text-center max-w-3xl w-full">
        <h1 className="text-3xl md:text-4xl font-bold text-base-content">
          Premium Digital Tools
        </h1>

        <p className="text-base-content/70 mt-3 max-w-xl mx-auto">
          Choose from our curated collection of premium digital products
          designed to boost your productivity and creativity.
        </p>

        <div className="flex items-center justify-center gap-2 mt-6">
          <button className="btn btn-primary rounded-full px-6 bg-linear-to-r from-indigo-600 to-purple-600">
            Products
          </button>
          <button className="btn btn-primary rounded-full px-6">
            Cart (2)
          </button>
        </div>
      </div>
    </div>
  );
};

export default DigitalTools;