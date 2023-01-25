import React from "react";
import "./Layout.css";

const Layout = ({ children }) => {
  return (
    <div>
      <header className="flex  h-[15vh] w-full justify-evenly items-center">
        <img
          className="  w-56  h-20"
          src="../../Logo approved.png"
          alt="Bayamo Medical Center"
        />

        <ul className="nav flex">
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
        <button className="bg-indigo-800  px-4  py-3 text-white rounded-3xl hover:scale-110 transition-all">
          Escribenos
        </button>
      </header>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
