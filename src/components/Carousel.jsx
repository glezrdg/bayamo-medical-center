import { useState, useEffect } from "react";

import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";

const Carousel = ({ items }) => {
  const [numItemsToShow, setNumItemsToShow] = useState(3);
  const [responsiveNumber, setResponsiveNumber] = useState(100);
  const [currentIndex, setCurrentIndex] = useState(0);

  const numItems = items.length;
  const numPages = Math.ceil(numItems / numItemsToShow);
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  const handleNextClick = () => {
    setCurrentIndex((currentIndex + 1) % numPages);
  };

  const handlePrevClick = () => {
    setCurrentIndex(currentIndex === 0 ? numPages - 1 : currentIndex - 1);
  };
  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    console.log(windowSize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  useEffect(() => {
    if (windowSize.width < 500) {
      setNumItemsToShow(1);
      setResponsiveNumber(570);
    } else if (windowSize.width < 769) {
      setNumItemsToShow(2);
      setResponsiveNumber(300);
    } else if (windowSize.width < 1025) {
      setNumItemsToShow(3);
      setResponsiveNumber(200);
    } else if (windowSize.width < 1441) {
      setNumItemsToShow(3);
      setResponsiveNumber(195);
    } else {
      setNumItemsToShow(3);
      setResponsiveNumber(195);
    }
  }, [windowSize]);

  return (
    <div className="2xl:w-[80%] xl:w-[75%] lg:w-[83%] md:w-[82%] max-sm:w-[85%] relative h-1/2  ">
      <button
        className="absolute top-[40%] -left-20 max-sm:-left-10 z-50"
        onClick={handlePrevClick}
      >
        <BsFillArrowLeftCircleFill className="text-5xl max-sm:text-4xl text-indigo-800  hover:scale-110 hover:bg-red-500 rounded-full m-0 p-0 transition-all" />
      </button>
      <div className="overflow-hidden w-full h-full ">
        <div className="relative ">
          <div
            className="flex transition-transform duration-300 ease-in-out "
            style={{
              transform: `translateX(-${
                currentIndex * (responsiveNumber / numPages)
              }%)`,
            }}
          >
            {items.map((item, index) => (
              <div key={index} className="  mr-4">
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
      <button
        className="absolute top-[40%] -right-20 max-sm:-right-10    "
        onClick={handleNextClick}
      >
        <BsFillArrowRightCircleFill className="text-5xl max-sm:text-4xl text-indigo-800 hover:scale-110 hover:bg-red-500 rounded-full m-0 p-0 transition-all" />
      </button>
    </div>
  );
};

export default Carousel;
