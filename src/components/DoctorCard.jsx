import React from "react";

const DoctorCard = ({ name, img, title }) => {
  return (
    <div className="2xl:w-[18vw] xl:w-[20vw]  lg:w-[24vw] md:w-[35vw] max-sm:w-[70vw] max-sm:h-5/6   h-full  p-4 bg-slate-100 rounded-md shadow-md flex flex-col items-center ">
      <img
        src={`${img}`}
        alt=""
        className=" h-[30vh] max-sm:h-[50vh]  object-fill rounded-md  "
      />
      <div className="flex flex-col items-center h-full justify-around max-sm:justify-c pt-2">
        <h1 className="text-2xl mt-2 max-sm:mt-0 font-semibold text-slate-700">
          {" "}
          {name}
        </h1>
        <h2 className="text-md font-semibold text-slate-600">{title}</h2>
      </div>
    </div>
  );
};

export default DoctorCard;
