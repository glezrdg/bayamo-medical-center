import React from "react";
import "./Layout.css";
import { RxHamburgerMenu } from "react-icons/rx";

import { useRef } from "react";

// icon
import { AiOutlineMail } from "react-icons/ai";
import { BsFillArrowUpCircleFill } from "react-icons/bs";

import { BsFillArrowDownCircleFill } from "react-icons/bs";

const Layout = ({ children }) => {
  const [position, setPosition] = [];

  const menu = useRef(null);
  const openNav = () => {
    const element = menu.current;
    element.style.height = "100%";
    element.style.opacity = "1";
  };
  const closeNav = () => {
    const element = menu.current;
    element.style.height = "0";
    element.style.opacity = "0";
  };

  const positions = [
    {
      position: 0,
      path: "#home",
    },
    {
      position: 1014,
      path: "#services",
    },
    {
      position: 1987.609375,
      path: "#doctors",
    },
    {
      position: 2960.609375,
      path: "#history",
    },
    {
      position: 3933.609375,
      path: "#insurances",
    },
    {
      position: 4906.609375,
      path: "#contact_us",
    },
  ];

  const ScrollToScreen = (type) => {
    let position = window.scrollY + 80;
    let answer = positions[1];
    // console.log(current, "curr");
    positions.forEach((item, i) => {
      if (type === "down") {
        if (position > item.position && position < positions[i + 1].position) {
          answer = positions[i + 1];
          return;
        }
      } else {
        if (position < item.position && position > positions[i - 1].position) {
          if (i === 0) answer = positions[0];
          answer = positions[i - 2];
          return;
        } else {
          if (position > item.position) {
            console.log("se cumple");
            answer = positions[i - 1];
          }
        }
      }
    });
    window.scrollTo(80, answer.position);
    console.log(answer.position);
  };
  return (
    <div className="fonts">
      <header
        id="home"
        className="flex px-[14vw] 2xl:px-[14vw] xl:px-[5vw]  lg:px-[4vw] md:px-[5vw]  max-sm:px-10   h-[14vh] max-sm:h-[10vh]  w-full justify-between items-center  border-b"
      >
        <div
          className="overlay-menu flex items-center justify-center text-2xl font-bold text-white"
          ref={menu}
        >
          <a href="javascript:void(0)" class="closebtn" onClick={closeNav}>
            &times;
          </a>
          <div class="flex flex-col justify-evenly items-center h-1/2">
            <a
              href="#home"
              className="hover:text-yellow-300 transition-all "
              onClick={closeNav}
            >
              Home
            </a>
            <a
              href="#services"
              onClick={closeNav}
              className="hover:text-yellow-300 transition-all "
            >
              Services
            </a>
            <a
              href="#doctors"
              onClick={closeNav}
              className="hover:text-yellow-300 transition-all "
            >
              Doctors
            </a>
            <a
              href="#history"
              className="hover:text-yellow-300 transition-all "
              onClick={closeNav}
            >
              History
            </a>
            <a
              href="#insurances"
              className="hover:text-yellow-300 transition-all "
              onClick={closeNav}
            >
              Insurances
            </a>
            <a
              href="#contact_us"
              className="hover:text-yellow-300 transition-all "
              onClick={closeNav}
            >
              Contact Us
            </a>
          </div>
        </div>

        <img
          className="xl:h-3/5 lg:h-1/2 md:h-2/5 max-sm:h-1/2"
          src="../../Logo approved.png"
          alt="Bayamo Medical Center"
        />
        <div
          onClick={openNav}
          className="max-sm:flex xl:hidden md:hidden lg:hidden bg-indigo-800 p-3 shadow-lg  rounded-full text-white"
        >
          <RxHamburgerMenu className="text-4xl max-sm:text-2xl hover:scale-110 transition-all" />
        </div>

        <ul className="nav flex w-2/5 max-sm:hidden  justify-between  2xl:text-2xl xl:text-xl lg:text-xl md:text-lg max-sm:text-md ">
          <li className={`hover:text-red-600 hover:scale-105  transition-all `}>
            <a href="#home">Home</a>
          </li>
          <li className="hover:text-red-600 hover:scale-105  transition-all">
            <a href="#services">Services</a>
          </li>
          <li className="hover:text-red-600 hover:scale-105   transition-all">
            <a href="#doctors">Doctors</a>
          </li>
          <li className="hover:text-red-600 hover:scale-105 transition-all">
            <a href="#history">History</a>
          </li>
        </ul>
        <a
          href="#contact_us"
          className=" bg-transparent text-transparent flex items-center px-[2vw] py-[2vh]   2xl:text-2xl xl:text-lg lg:text-xs md:text-xs max-sm:hidden    "
        >
          Send us a message!
          <AiOutlineMail className="ml-3" />
        </a>
        <a
          href="#contact_us"
          className="bg-indigo-800  flex items-center fixed z-50 xl:right-[10vw] lg:right-10 md:right-1 max-sm:right-1 px-[2vw] py-[2vh] 2xl:text-2xl xl:text-lg lg:text-lg md:text-md max-sm:hidden  text-black rounded-full   hover:scale-105 transition-all  shadow-lg 2xl:bg-red-200 xl:bg-green-200 lg:bg-yellow-200 md:bg-blue-200 max-sm:bg-purple-200 "
        >
          Send us a message!
          <AiOutlineMail className="ml-3" />
        </a>
      </header>
      <main className=" 2xl:px-[14vw] xl:px-[5vw]  lg:px-[4vw] md:px-[5vw]  max-sm:px-10  py-[10vh] relative overflow-hidden">
        <div className="fixed  w-[5vw] h-[15vh] md:hidden lg:hidden max-sm:hidden xl:flex  flex flex-col justify-between items-center top-[50%] right-0 z-50 cursor-pointer">
          <div onClick={() => ScrollToScreen("up")} className="">
            <BsFillArrowUpCircleFill className=" text-6xl text-indigo-800 hover:scale-110 hover:bg-red-500 rounded-full m-0 p-0 transition-all" />
          </div>
          <div onClick={() => ScrollToScreen("down")}>
            <BsFillArrowDownCircleFill className="text-6xl text-indigo-800 hover:scale-110 hover:bg-red-500 rounded-full m-0 p-0 transition-all" />
          </div>
        </div>
        {children}
      </main>
    </div>
  );
};

export default Layout;
