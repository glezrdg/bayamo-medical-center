import React from "react";

const DoctorCard = ({ name, img, title }) => {
  return (
    <div className=" w-80 h-[400px] p-4 bg-slate-100 rounded-md shadow-md flex flex-col items-center ">
      <img
        src={`${img}`}
        alt=""
        className="w-full h-5/6 object-fill rounded-md hover:scale-105 transition-all"
      />
      <div className="flex flex-col items-center h-full justify-around py-5">
        <h1 className="text-2xl font-semibold text-slate-700"> {name}</h1>
        <h2 className="text-lg font-semibold text-slate-600">{title}</h2>
      </div>
    </div>
  );
};

export default DoctorCard;
