import React from "react";

import { carouselServices } from "../utils/carouselServices";
import { Carousel } from "primereact/carousel";
import { useState } from "react";

//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";

//core
import "primereact/resources/primereact.min.css";

//icons
import "primeicons/primeicons.css";

const Services = () => {
  const [services, setServices] = useState(carouselServices);

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
  const servicesTemplate = (services) => {
    return (
      <div className="bg-slate-200 w-5/6  h-5/6 p-5 flex flex-col items-center justify-evenly rounded-md shadow-md  hover:scale-105 transition-all ">
        <img src={`${services.iconSrc}`} alt="" className=" w-16  h-16" />
        <h1 className="text-lg font-semibold text-slate-800  ">
          {services.title}
        </h1>
      </div>
    );
  };

  return (
    <div className="h-[75vh] flex flex-col items-center justify-end ">
      <div className="h-48 w-1/2  text-center ">
        <h1 className="text-6xl font-bold ">
          Our <span className="text-indigo-800 underline">consulting</span>{" "}
          specialities.
        </h1>
        <p className=" text-xl text-slate-700 mt-5">
          "All the services under the same roof”
        </p>
      </div>

      <Carousel
        value={services}
        numVisible={5}
        numScroll={3}
        responsiveOptions={responsiveOptions}
        itemTemplate={servicesTemplate}
      />
    </div>
  );
};

export default Services;
