import React from "react";
import { Outlet } from "react-router-dom";
import Categorias from "../components/Categorias";
export default function Layout() {
  return (
    <>
      <div className="relative w-full h-screen overflow-hidden">
        {/* Fondo gris base */}
        <div className="absolute inset-0 bg-[#d6d6d6] z-0" />
        <div
          className="absolute -top-1/4 -left-1/4 w-[750px] h-[480px] bg-[#d6d6d6] z-10"
          style={{ borderRadius: "60%" }}
        ></div>
        {/* Curva beige con clip-path */}
        <div
          className="absolute -top-1/4 -left-1/4 w-[130%] h-[150%] bg-[#eac693] z-0"
          style={{
            clipPath: "ellipse(75% 100% at 0% 0%)",
          }}
        />

        {/* Contenido principal */}
        <div className="relative z-10 w-full h-full p-10 flex flex-col justify-end items-center">
          <div className="h-[95%]  w-full">
            <Outlet />
          </div>
          <Categorias />
        </div>
      </div>
    </>
  );
}
