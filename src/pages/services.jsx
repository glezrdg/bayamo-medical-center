import React from "react";

import ServiceCard from "../components/ServiceCard";

const Services = () => {
  return (
    <div
      id="services"
      className="h-[100vh]  flex flex-col items-center justify-center relative bg-stone-100"
    >
      <div className="absolute top-0 bottom-0 -z-10 2xl:-right-[14vw] xl:-right-[5vw] lg:-right-[4vw] md:-right-[5vw] 2xl:-left-[14vw] xl:-left-[5vw] lg:-left-[4vw] md:-left-[5vw]   max-sm:-left-5 max-sm:-right-5 bg-stone-100 lg:flex md:flex max-sm:flex xl:flex "></div>

      <div className="h-48 w-full flex flex-col items-center justify-center  text-center">
        <h1 className="2xl:text-6xl xl:text-6xl lg:text-6xl md:text-5xl max-sm:text-3xl font-bold ">
          Our <span className="text-indigo-800 underline">consulting</span>{" "}
          specialities.
        </h1>
        <p className=" 2xl:text-xl xl:text-xl lg:text-xl md:text-lg text-slate-700 mt-5">
          "All the services under the same roof”
        </p>
      </div>
      <div className="w-full 2xl:h-1/2 xl:h-1/2 lg:h-2/3 md:h-4/5 max-sm:h-full md:place-items-center max-sm:place-items-center  grid 2xl:grid-cols-5 2xl:grid-rows-2 xl:grid-cols-5 xl:grid-rows-2 lg:grid-cols-3 lg:grid-rows-4 md:grid-cols-2 md:grid-rows-5   max-sm:grid-cols-2 max-sm:grid-rows-5">
        <ServiceCard icon="./24-7.png" service="24-7 Service" />
        <ServiceCard icon="./diagnosis.png" service="Specialities" />
        <ServiceCard icon="./house.png" service="House Visit" />
        <ServiceCard icon="./lab.png" service="Labs" />
        <ServiceCard icon="./physical-therapy.png" service="Physical Therapy" />
        <ServiceCard icon="./primary-doctor.png" service="Primary Medicine" />
        <ServiceCard icon="./prp.png" service="Platelet Rich Plasma" />
        <ServiceCard icon="./surgery.png" service="Cosmetic, Minor Surgery" />
        <ServiceCard icon="./x-ray.png" service="X-Ray" />
        <ServiceCard
          icon="./electrocardiogram.png"
          service="Electrocardiogram"
        />
      </div>
    </div>
  );
};

// } else {
//   if (position < item.position && position > positions[i + 1].position) {
//     if (i === 0) answer = positions[0];
//     answer = positions[i - 1];
//     return;
//   }
// }

export default Services;
