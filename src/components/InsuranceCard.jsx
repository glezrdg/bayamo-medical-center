import React from "react";

const InsuranceCard = ({ img }) => {
  return (
    <img
      src={img}
      alt=""
      className=" h-[18vh] max-sm:h-[12vh] md:h-[14vh] xl:h-[17vh]  aspect-[3/2] object-contain m-auto"
    />
  );
};

export default InsuranceCard;
