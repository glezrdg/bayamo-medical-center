import { Galleria } from "primereact/galleria";
import { useState } from "react";
import { galleriaTeam } from "../utils/galleriaTeam";

const History = () => {
  const [items, setItems] = useState(galleriaTeam);

  const responsiveOptions = [
    {
      breakpoint: "1024px",
      numVisible: 3,
    },
    {
      breakpoint: "768px",
      numVisible: 2,
    },
    {
      breakpoint: "560px",
      numVisible: 1,
    },
  ];

  const thumbnailTemplate = (items) => {
    return <img src={items.thumbnail} alt={items.alt} className=" h-14" />;
  };
  const itemTemplate = (items) => {
    return (
      <div className="w-full h-full ">
        <img
          src={items.img}
          alt={items.alt}
          className="w-[40vw] h-[35vh] object-cover rounded-lg"
        />
      </div>
    );
  };

  return (
    <div
      id="history"
      className="h-[100vh] w-full flex justify-center items-center relative bg-stone-100"
    >
      <div className="absolute top-0 bottom-0 -z-10 2xl:-right-[14vw] xl:-right-[5vw] lg:-right-[4vw] md:-right-[5vw] 2xl:-left-[14vw] xl:-left-[5vw] lg:-left-[4vw] md:-left-[5vw]   max-sm:-left-5 max-sm:-right-5 bg-stone-100 lg:flex md:flex max-sm:flex xl:flex "></div>

      <div className=" w-4/5 h-full justify-center items-center  flex max-sm:flex-col max-sm:w-full md:flex-col md:w-full xl:flex-row   text-slate-800">
        <div className="w-1/2 h-1/2 ml-5 mt-5 max-sm:w-full max-sm:text-center max-sm:ml-0 md:w-full md:text-center md:ml-0  xl:w-1/2 xl:text-left  ">
          <h1 className="2xl:text-6xl xl:text-6xl lg:text-6xl md:text-5xl max-sm:text-3xl font-bold ">
            Behind our{" "}
            <span className="text-indigo-800 underline ">history</span>
          </h1>
          <h2 className="2xl:text-4xl xl:text-4xl lg:text-4xl md:text-3xl max-sm:text-2xl   mt-5">
            Bayamo Medical Center
          </h2>
          <p className="w-5/6 text-xl mt-5 max-sm:text-sm max-sm:w-full  md:w-full md:text-md lg:w-full lg:px-10 xl:p-0 xl:w-5/6 ">
            "From Bayamo to Your Health - A Family Legacy of Healing. Our story
            begins in a small town in Eastern Cuba where a group of young
            aspiring healers dedicated their lives to treating people and their
            families. <br />
            <br /> Dr. Luis Del Prado with the help of his wife also followed
            his passion and became a physician, passing on his legacy to his
            children who continue to serve and care for families as doctors.
            Join us and experience the compassionate care of a family committed
            to your well-being."
          </p>
        </div>
        <div className="h-full  w-1/2 max-sm:w-full md:w-2/3 lg:w-1/2 xl:w-2/5 flex flex-col justify-center items-center ">
          <h1 className="text-2xl max-sm:text-xl mb-3">
            In case you haven't come yet...
          </h1>
          <iframe
            className="w-full h-[33vh] rounded-md shadow-lg mt-3"
            src="https://www.youtube-nocookie.com/embed/8FU77bo2lIg?controls=0"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default History;
