import React from "react";
import ServiceCard from "../components/ServiceCard";

const Services = () => {
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
      <div className="w-5/6  h-96 grid grid-cols-5 grid-rows-2 place-items-center gap-2">
        <ServiceCard icon="./24-7.png" service="24-7 Service" />
        <ServiceCard icon="./diagnosis.png" service="Specialities" />
        <ServiceCard
          icon="./electrocardiogram.png"
          service="Electrocardiogram"
        />
        <ServiceCard icon="./house.png" service="24-7 Service" />
        <ServiceCard icon="./lab.png" service="Labs" />
        <ServiceCard icon="./physical-therapy.png" service="Physical Therapy" />
        <ServiceCard icon="./primary-doctor.png" service="Primary Medicine" />
        <ServiceCard icon="./prp.png" service="PRP Applications" />
        <ServiceCard icon="./surgery.png" service="Cosmetic Surgery" />
        <ServiceCard icon="./x-ray.png" service="X-Ray" />
      </div>
    </div>
  );
};

export default Services;
