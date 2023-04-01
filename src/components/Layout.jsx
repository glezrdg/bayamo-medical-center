import React from "react";
import "./Layout.css";
import { useState } from "react";

// icon
import { AiOutlineMail } from "react-icons/ai";
import { BsFillArrowUpCircleFill } from "react-icons/bs";

import { BsFillArrowDownCircleFill } from "react-icons/bs";

const Layout = ({ children }) => {
  const [position, setPosition] = [];

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
        className="flex  h-[14vh] w-full justify-evenly items-center  border-b"
      >
        <img
          className="  w-56  h-20"
          src="../../Logo approved.png"
          alt="Bayamo Medical Center"
        />

        <ul className="nav flex text-2xl   ">
          <li className="active">
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#doctors">Doctors</a>
          </li>
          <li>
            <a href="#history">History</a>
          </li>
        </ul>
        <a
          href="#contact_us"
          className=" bg-transparent text-transparent flex items-center   px-5 py-4    "
        >
          Send us a message!
          <AiOutlineMail className="ml-3" />
        </a>
        <a
          href="#contact_us"
          className="bg-indigo-800 flex items-center fixed z-50 right-[10vw] px-5 py-4 text-white rounded-full   hover:scale-110 transition-all text-xl shadow-lg"
        >
          Send us a message!
          <AiOutlineMail className="ml-3" />
        </a>
      </header>
      <main className="px-20 pt-20 relative">
        <div className="fondo   bg-orange-100 "></div>

        <div className="fixed  w-[5vw] h-[15vh]  flex flex-col justify-between items-center top-[50%] right-0 z-50 cursor-pointer">
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
