import React, { useState } from 'react';

const CardBtn = ({ card, carts, setcarts }) => {
  const [isbuy, setisbuy] = useState(false);
  const Handleisbuy = () => {
    setisbuy(true);
    setcarts([...carts,card])
  };

  return (
    <div
      key={card.id}
      className="card-body w-full bg-base-100 shadow-md border border-base-200 rounded-md"
    >
      <div className="flex justify-between items-start">
        <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-base-200 text-xl">
          {card.icon}
        </div>

        {card.tag === "Popular" && (
          <span className="badge badge-primary badge-outline">{card.tag}</span>
        )}

        {card.tag === "Best Seller" && (
          <span className="badge badge-warning badge-outline">{card.tag}</span>
        )}

        {card.tag === "New" && (
          <span className="badge badge-success badge-outline">{card.tag}</span>
        )}
      </div>

      <h2 className="card-title text-lg font-semibold">{card.name}</h2>

      <p className="text-sm text-base-content/70">{card.description}</p>

      <div className="text-2xl font-bold">
        ${card.price}
        <span className="text-sm font-normal text-base-content/60">
          {" "}
          / {card.period}
        </span>
      </div>

      <ul className="space-y-2 text-sm">
        <li className="flex items-center gap-2">
          <span className="text-success">✔</span> {card.features[0]}
        </li>
        <li className="flex items-center gap-2">
          <span className="text-success">✔</span> {card.features[1]}
        </li>
        <li className="flex items-center gap-2">
          <span className="text-success">✔</span> {card.features[2]}
        </li>
      </ul>

      <div className="card-actions mt-4">
        <button
          onClick={Handleisbuy}
          className="btn w-full rounded-full text-white border-0 bg-linear-to-r from-indigo-500 to-purple-500 hover:from-purple-600 hover:to-indigo-600"
        >
          {isbuy ? "Added To Chart" : "Buy Now"}
        </button>
      </div>
    </div>
  );
};

export default CardBtn;