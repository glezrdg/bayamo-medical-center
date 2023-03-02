import React from "react";
import "./Layout.css";

// icon
import { AiOutlineMail } from "react-icons/ai";

const Layout = ({ children }) => {
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
        <button className="bg-indigo-800 flex items-center  px-5 py-4 text-white rounded-full border border-red-200 hover:scale-110 transition-all text-xl shadow-lg">
          Escribenos <AiOutlineMail className="ml-3" />
        </button>
      </header>
      <main className="px-20 py-20">{children}</main>
    </div>
  );
};

export default Layout;
