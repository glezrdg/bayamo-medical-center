import React from "react";
import DoctorCard from "../components/DoctorCard";

import Carousel from "../components/Carousel";
import { carouselDoctors } from "../utils/carouselDoctors";

import { useState } from "react";

const Doctors = () => {
  const items = carouselDoctors.map((doctor) => {
    return (
      <DoctorCard
        key={doctor.id}
        name={doctor.name}
        title={doctor.title}
        img={doctor.img}
      />
    );
  });

  return (
    <div
      id="doctors"
      className="h-[100vh] flex flex-col items-center justify-center  "
    >
      <div className="h-48 w-full  text-center">
        <h1 className="2xl:text-6xl xl:text-6xl lg:text-6xl md:text-5xl max-sm:text-3xl font-bold ">
          Meet our{" "}
          <span className="text-indigo-800 underline">specialists</span>
        </h1>
        <p className=" 2xl:text-xl xl:text-xl lg:text-xl md:text-lg text-slate-700 mt-5">
          The best team to make you feel like home.
        </p>
      </div>
      <Carousel items={items} />
    </div>
  );
};

export default Doctors;
