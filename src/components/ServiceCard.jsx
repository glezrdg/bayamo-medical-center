import React from "react";

const ServiceCard = ({ icon, service }) => {
  return (
    <div className=" bg-gray-50 w-5/6  h-5/6 flex flex-col items-center justify-evenly rounded-md shadow-md  hover:scale-105 transition-all ">
      <img
        src={`${icon}`}
        alt=""
        className=" 2xl:h-[8vh] xl:h-[8vh] lg:h-[6vh] md:h-[5vh] max-sm:h-[5vh]"
      />
      <h1 className="2xl:text-lg xl:text-lg lg:text-lg md:text-md max-sm:text-sm font-semibold text-white-800  ">
        {service}
      </h1>
    </div>
  );
};

export default ServiceCard;
