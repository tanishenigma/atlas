import React from "react";

const Card = (props) => {
  const { title, price, brand } = props;
  return (
    <div className="flex flex-col gap-y-1.5 bg-white text-black p-12 border-2 border-black shadow-lg"></div>
  );
};

export default Card;
