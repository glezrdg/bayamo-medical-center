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
          className="w-80 h-auto  aspect-[3/2] object-contain"
        />
        ;
      </div>
    );
  };

  return (
    <div className="h-[75vh] w-full bg-slate-100 flex items-center justify-center">
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
