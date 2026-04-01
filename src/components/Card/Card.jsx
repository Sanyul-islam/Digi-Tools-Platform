import React, { use } from 'react';
import CardBtn from './CardBtn';

const Card = ({ Apipromise, carts, setcarts }) => {
  const cardApi = use(Apipromise);
  
  return (
    <div className="container w-10/12  grid grid-cols-1 md:grid-cols-3 mx-auto my-4 p-4 gap-4">
      {cardApi.map((card) => (
        <CardBtn
          key={card.id}
          card={card}
          carts={carts}
          setcarts={setcarts}
        ></CardBtn>
      ))}
    </div>
  );
};

export default Card;