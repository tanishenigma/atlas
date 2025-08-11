import { ArrowLeft, ArrowRightIcon } from "lucide-react";
import React from "react";
const rotations = {
  0: "rotate-0",
  90: "rotate-90",
  180: "rotate-180",
  270: "rotate-270",
};
const Button = (props) => {
  return (
    <div onClick={props.onClick} className="inline-block m-20">
      <ArrowRightIcon
        title={props.title}
        className={`bg-amber-800 rounded-full w-20 h-20 ${
          rotations[props.rotate]
        }`}
      />
    </div>
  );
};

export default Button;
