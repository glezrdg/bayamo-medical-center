import { carouselInsurance } from "../utils/carouselInsurance";
import { Carousel } from "primereact/carousel";
import { useState } from "react";

//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";

//core
import "primereact/resources/primereact.min.css";

//icons
import "primeicons/primeicons.css";

const Insurances = () => {
  const [insurances, setInsurances] = useState(carouselInsurance);
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

  const insuranceTemplate = (insurances) => {
    return (
      <div className="">
        <img
          src={insurances.img}
          alt=""
          className="w-80 h-auto  aspect-[3/2] object-contain m-auto"
        />
        ;
      </div>
    );
  };

  return (
    <div className="h-[75vh] w-full flex flex-col items-center justify-center">
      <div className="h-48 w-1/2  text-center">
        <h1 className="text-6xl font-bold ">
          We're <span className="text-indigo-800 underline">always</span>{" "}
          thinking of you.
        </h1>
        <p className=" text-xl text-slate-700 mt-5">
          Here are some of the many we accept.
        </p>
      </div>
      <Carousel
        className="w-full"
        value={insurances}
        numVisible={3}
        numScroll={3}
        responsiveOptions={responsiveOptions}
        itemTemplate={insuranceTemplate}
        circular
        autoplayInterval={4000}
      />
    </div>
  );
};

export default Insurances;
