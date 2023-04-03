import { carouselInsurance } from "../utils/carouselInsurance";
import { Carousel } from "primereact/carousel";
import { useState } from "react";
import InsuranceCard from "../components/InsuranceCard";

import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

const Insurances = () => {
  const [insurances, setInsurances] = useState(carouselInsurance);

  return (
    <div
      id="insurances"
      className="h-[100vh] w-full flex flex-col items-center justify-center"
    >
      <div className="h-48 w-full flex flex-col items-center justify-center  text-center">
        <h1 className="2xl:text-6xl xl:text-6xl lg:text-6xl md:text-5xl max-sm:text-3xl font-bold ">
          We're <span className="text-indigo-800 underline">always</span>{" "}
          thinking of you.
        </h1>
        <p className="  2xl:text-xl xl:text-xl lg:text-xl md:text-lg text-slate-700 mt-5">
          Here are some of the many we accept.
        </p>
      </div>
      <div className="w-full grid max-sm:grid-cols-2 max-sm:grid-rows-3 max-sm:gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-14   ">
        {insurances.map((insurance) => {
          return <InsuranceCard key={insurance.id} img={insurance.img} />;
        })}
      </div>
    </div>
  );
};

export default Insurances;
