import React from "react";

const InsuranceCard = ({ img }) => {
  return (
    <img
      src={img}
      alt=""
      className="w-80 h-auto  aspect-[3/2] object-contain m-auto"
    />
  );
};

export default InsuranceCard;
