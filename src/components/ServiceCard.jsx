import React from "react";

const ServiceCard = ({ icon, service }) => {
  return (
    <div className="bg-slate-200 w-5/6  h-5/6 flex flex-col items-center justify-evenly rounded-md shadow-md  hover:scale-105 transition-all ">
      <img src={`${icon}`} alt="" className=" w-16  h-16" />
      <h1 className="text-lg font-semibold text-slate-800  ">{service}</h1>
    </div>
  );
};

export default ServiceCard;
