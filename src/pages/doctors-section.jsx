import React from "react";
import DoctorCard from "../components/DoctorCard";

import { carouselDoctors } from "../utils/carouselDoctors";
import { Carousel } from "primereact/carousel";
import { useState } from "react";

import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

const Doctors = () => {
  const [doctors, setDoctors] = useState(carouselDoctors);

  const responsiveOptions = [
    {
      breakpoint: "1199px",
      numVisible: 1,
      numScroll: 1,
    },
    {
      breakpoint: "991px",
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: "767px",
      numVisible: 1,
      numScroll: 1,
    },
  ];
  const doctorsTemplate = (doctors) => {
    return (
      <div className=" w-80 h-[400px] p-4 bg-slate-100 rounded-md shadow-md flex flex-col items-center hover:scale-105 transition-all m-auto">
        <img
          src={`${doctors.img}`}
          alt=""
          className="w-full h-5/6 rounded-md"
        />
        <div className="flex flex-col items-center h-full justify-around py-5">
          <h1 className="text-2xl font-semibold text-slate-700">
            {" "}
            {doctors.name}
          </h1>
          <h2 className="text-lg font-semibold text-slate-600">
            {doctors.title}
          </h2>
        </div>
      </div>
    );
  };

  return (
    <div
      id="doctors"
      className="h-[100vh] flex flex-col items-center justify-center  "
    >
      <div className="h-48 w-full  text-center">
        <h1 className="text-6xl font-bold ">
          Meet our{" "}
          <span className="text-indigo-800 underline">specialists</span>
        </h1>
        <p className=" text-xl text-slate-700 mt-5">
          The responsables to make you feel like home.
        </p>
      </div>

      <Carousel
        className="w-[82vw] "
        value={doctors}
        numVisible={4}
        numScroll={3}
        responsiveOptions={responsiveOptions}
        itemTemplate={doctorsTemplate}
        circular
      />
    </div>
  );
};

export default Doctors;
