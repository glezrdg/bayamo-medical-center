import React from "react";

import ServiceCard from "../components/ServiceCard";

const Services = () => {
  return (
    <div className="h-[100vh]  flex flex-col items-center justify-center mt-5 relative">
      <div className="absolute top-0 bottom-0 -right-20 -z-10 -left-20 bg-stone-100 "></div>

      <div className="h-48 w-1/2  text-center">
        <h1 className="text-6xl font-bold ">
          Our <span className="text-indigo-800 underline">consulting</span>{" "}
          specialities.
        </h1>
        <p className=" text-xl text-slate-700 mt-5">
          "All the services under the same roof”
        </p>
      </div>
      <div className="w-5/6 h-1/2 grid grid-cols-5 grid-rows-2">
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

export default Services;
