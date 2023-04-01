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
      className="h-[100vh] w-full flex justify-center items-center relative"
    >
      <div className="absolute top-0 bottom-0 -right-20 -z-10 -left-20  bg-stone-100"></div>
      <div className=" w-2/3 h-[45vh]  flex text-slate-800">
        <div className="w-1/2 h-full ml-5 mt-5">
          <h1 className="text-6xl font-bold text-black">
            Behind our{" "}
            <span className="text-indigo-800 underline ">history</span>
          </h1>
          <h2 className="text-3xl  mt-5">Bayamo Medical Center</h2>
          <p className="w-5/6 text-xl mt-5 ">
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
        <div className="h-full  w-1/2 flex flex-col justify-center items-center ">
          <h1 className="text-2xl mb-3">In case you haven't come yet...</h1>
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
