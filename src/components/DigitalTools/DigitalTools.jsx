import React from 'react';

const DigitalTools = ({ carts ,setactiveTab }) => {
  const cartCount = carts.length
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

        {/* name of each tab group should be unique */}
        <div className="tabs tabs-box flex items-center justify-center gap-2 mt-6 bg-base-100">
          <input
            type="radio"
            name="my_tabs_1"
            className="tab btn btn-ghost rounded-full px-6 checked:bg-linear-to-r checked:from-indigo-600 checked:to-purple-600 checked:text-white"
            aria-label="Products"
            onClick={() => setactiveTab("Products")}
            defaultChecked
          />
          <input
            type="radio"
            name="my_tabs_1"
            className="tab btn btn-ghost rounded-full px-6 checked:bg-linear-to-r checked:from-indigo-600 checked:to-purple-600 checked:text-white"
            aria-label={`Cart (${cartCount})`}
            onClick={() => setactiveTab("Cart")}
          />
        </div>
      </div>
    </div>
  );
};

export default DigitalTools;