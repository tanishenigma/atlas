import React from "react";

const AppleBasket = (props) => {
  return (
    <div className="flex flex-col gap-y-10 bg-amber-950 p-20 rounded-b-3xl border-t-4 border-amber-100/50 shadow-lg">
      <div className="bg-amber-800/20 p-10 rounded-3xl">
        <span className="text-5xl font-bold">{props.count}</span>
        <h1 className="font-bold mt-5">🍎</h1>
      </div>
      <p className="text-xl mb-5 font-black bg-amber-800 p-2 rounded-2xl">
        BASKET - {props.basket}
      </p>
    </div>
  );
};

export default AppleBasket;
