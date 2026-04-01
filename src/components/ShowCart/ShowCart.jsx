import React from 'react';
import Card from '../Card/Card'

const ShowCart = ({ carts, setcarts }) => {
  
  const totalPrice = carts.reduce((sum, item) => sum + item.price, 0);
  const handlepayment = ()=>{
    setcarts([])
  }
  const handleDelet = (item)=>{
    const filteredArray = carts.filter(crt => crt.id !== item.id)
    setcarts(filteredArray)
  }
  return (
    <div className="bg-base-200 min-h-screen flex items-start justify-center pt-16">
      <div className="bg-base-100 w-full max-w-2xl rounded-xl p-6 border border-base-300">
        {/* Title */}
        <h2 className="text-lg font-semibold text-base-content mb-4">
          Your Cart
        </h2>

        {/* Items */}
        <div className="space-y-3">
          {carts.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between bg-base-200 rounded-lg p-4"
            >
              <div className="flex items-center gap-3">
                {/* Icon */}
                <div className="w-10 h-10 rounded-full bg-base-100 flex items-center justify-center text-lg">
                  {item.icon}
                </div>

                {/* Info */}
                <div>
                  <p className="font-medium text-base-content">{item.name}</p>
                  <p className="text-sm text-base-content/60">${item.price}</p>
                </div>
              </div>

              {/* Remove */}
              <button onClick={()=>handleDelet(item)} className="text-red-500 text-sm hover:underline">
                Remove
              </button>
            </div>
          ))}
        </div>

        {/* Total */}
        <div className="flex items-center justify-between mt-6">
          <span className="text-sm text-base-content/60">Total:</span>
          <span className="font-semibold text-base-content">${totalPrice}</span>
        </div>

        {/* Checkout Button */}
        <button
          onClick={handlepayment}
          className="btn w-full mt-4 text-white border-0 bg-linear-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 rounded-full"
        >
          Proceed To Checkout
        </button>
      </div>
    </div>
  );
};

export default ShowCart;