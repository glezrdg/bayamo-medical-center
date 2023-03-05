import React from "react";
import "./Layout.css";
import { useState } from "react";

// icon
import { AiOutlineMail } from "react-icons/ai";

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
    <div>
      <header className="flex  h-[14vh] w-full justify-evenly items-center  border-b">
        <img
          className="  w-56  h-20"
          src="../../Logo approved.png"
          alt="Bayamo Medical Center"
        />

        <ul className="nav flex text-2xl   ">
          <li className="active">
            <a href="#">Inicio</a>
          </li>
          <li>
            <a href="#">Servicios</a>
          </li>
          <li>
            <a href="#">Doctores</a>
          </li>
          <li>
            <a href="#">Historia</a>
          </li>
        </ul>
        <a
          href="#contact_us"
          className="bg-indigo-800 flex items-center  px-5 py-4 text-white rounded-full border border-red-200 hover:scale-110 transition-all text-xl shadow-lg"
        >
          Escribenos <AiOutlineMail className="ml-3" />
        </a>
      </header>
      <main className="px-20 pt-20 relative">
        <div className="fixed p-4 w-20 h-20 bg-green-400 flex flex-col top-[50%] right-0 cursor-pointer">
          <a onClick={() => ScrollToScreen("up")} className="text-xl bg-red-50">
            Up
          </a>
          <a onClick={() => ScrollToScreen("down")} className="text-xl">
            Down
          </a>
        </div>
        {children}
      </main>
    </div>
  );
};

export default Layout;
