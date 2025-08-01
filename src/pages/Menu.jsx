import React from "react";
import { menu1, menu2, menu3, menu4 } from "../assets/img";
import { Swiper, SwiperSlide } from "swiper/react";

// Importa estilos de Swiper
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Importa módulos
import { Pagination, Navigation } from "swiper/modules";
import { useState } from "react";

export default function Menu() {
  const [isActive, setIsActive] = useState(0);
  const dataPrueba = [
    {
      nombre: "Ensalada Gourmet de Camarón con Aguacate",
      url_imagen: menu1,
      chef: "Valentina Ruiz",
      tipo_platillo: "Ensalada",
      descripcion:
        "Una ensalada fresca y visualmente atractiva que combina vegetales crujientes, aguacate cremoso, camarones jugosos con aderezo de mostaza y sésamo, acompañados de pimientos asados y hojas verdes, todo servido en un elegante tazón negro.",
      ingredientes: [
        "Camarones salteados",
        "Aderezo de mostaza",
        "Espinacas baby",
        "Aguacate en rebanadas",
        "Pimientos asados",
        "Hongos caramelizados",
        "Semillas de sésamo negras",
        "Aceite de oliva",
        "Sal marina",
      ],
    },
    {
      nombre: "Risotto de Hongos Silvestres",
      url_imagen: menu2,
      chef: "Marco Bianchi",
      tipo_platillo: "Plato fuerte",
      descripcion:
        "Arroz cremoso cocinado lentamente con caldo de vegetales y vino blanco, acompañado de hongos porcini y champiñones salteados, finalizado con parmesano rallado y un toque de trufa.",
      ingredientes: [
        "Arroz arborio",
        "Hongos porcini",
        "Champiñones",
        "Vino blanco",
        "Caldo de vegetales",
        "Queso parmesano",
        "Mantequilla",
        "Aceite de oliva",
      ],
    },
    {
      nombre: "Tarta de Frutas Tropicales",
      url_imagen: menu3,
      chef: "Lucía Hernández",
      tipo_platillo: "Postre",
      descripcion:
        "Base de masa quebrada rellena de crema pastelera de vainilla, coronada con frutas tropicales frescas como mango, kiwi, fresas y maracuyá, barnizada con un ligero toque de miel.",
      ingredientes: [
        "Masa quebrada",
        "Crema pastelera",
        "Mango",
        "Kiwi",
        "Fresas",
        "Maracuyá",
        "Miel",
        "Menta fresca",
      ],
    },
    {
      nombre: "Ceviche Peruano Clásico",
      url_imagen: menu4,
      chef: "Diego Quispe",
      tipo_platillo: "Entrada",
      descripcion:
        "Fresco ceviche elaborado con pescado blanco marinado en jugo de limón, acompañado de cebolla morada, ají limo, cilantro y servido con camote y choclo peruano.",
      ingredientes: [
        "Pescado blanco fresco",
        "Jugo de limón",
        "Cebolla morada",
        "Ají limo",
        "Cilantro fresco",
        "Camote cocido",
        "Choclo peruano",
        "Sal marina",
      ],
    },
    {
      nombre: "Ramen Japonés de Cerdo Tonkotsu",
      url_imagen: "mnt/data/ramen_tonkotsu.png",
      chef: "Haruto Tanaka",
      tipo_platillo: "Sopa",
      descripcion:
        "Caldo concentrado de huesos de cerdo cocido por horas, servido con fideos frescos, huevo marinado, panceta chashu, cebollín y alga nori.",
      ingredientes: [
        "Caldo tonkotsu",
        "Fideos ramen",
        "Panceta chashu",
        "Huevo marinado",
        "Cebollín",
        "Alga nori",
        "Jengibre encurtido",
        "Aceite de ajo",
      ],
    },
    {
      nombre: "Ramen Japonés de Cerdo Tonkotsu",
      url_imagen: "mnt/data/ramen_tonkotsu.png",
      chef: "Haruto Tanaka",
      tipo_platillo: "Sopa",
      descripcion:
        "Caldo concentrado de huesos de cerdo cocido por horas, servido con fideos frescos, huevo marinado, panceta chashu, cebollín y alga nori.",
      ingredientes: [
        "Caldo tonkotsu",
        "Fideos ramen",
        "Panceta chashu",
        "Huevo marinado",
        "Cebollín",
        "Alga nori",
        "Jengibre encurtido",
        "Aceite de ajo",
      ],
    },
    {
      nombre: "Ramen Japonés de Cerdo Tonkotsu",
      url_imagen: "mnt/data/ramen_tonkotsu.png",
      chef: "Haruto Tanaka",
      tipo_platillo: "Sopa",
      descripcion:
        "Caldo concentrado de huesos de cerdo cocido por horas, servido con fideos frescos, huevo marinado, panceta chashu, cebollín y alga nori.",
      ingredientes: [
        "Caldo tonkotsu",
        "Fideos ramen",
        "Panceta chashu",
        "Huevo marinado",
        "Cebollín",
        "Alga nori",
        "Jengibre encurtido",
        "Aceite de ajo",
      ],
    },
    {
      nombre: "Ramen Japonés de Cerdo Tonkotsu",
      url_imagen: "mnt/data/ramen_tonkotsu.png",
      chef: "Haruto Tanaka",
      tipo_platillo: "Sopa",
      descripcion:
        "Caldo concentrado de huesos de cerdo cocido por horas, servido con fideos frescos, huevo marinado, panceta chashu, cebollín y alga nori.",
      ingredientes: [
        "Caldo tonkotsu",
        "Fideos ramen",
        "Panceta chashu",
        "Huevo marinado",
        "Cebollín",
        "Alga nori",
        "Jengibre encurtido",
        "Aceite de ajo",
      ],
    },
  ];

  const onChangeActive = (index) => {
    setIsActive(index);
    console.log(index);
  };

  return (
    <>
      <div className="w-full h-full flex">
        <div className="w-3/4 h-full flex flex-col gap-6 ">
          <div className="h-1/2 flex gap-10 items-center justify-center ">
            <img
              src={menu1}
              className="w-1/3"
              style={{ filter: "drop-shadow(1px 1px 10px black)" }}
            />
            <div>
              <h1 className="text-lg text-gray-600">#1 Most loved dish</h1>
              <p className="text-7xl font-light">
                Vegan <h1 className="font-bold">Salad</h1>
              </p>
            </div>
          </div>
          <div className="h-1/2 w-full  flex justify-center items-center">
            {/* Slider */}
            <Swiper
              slidesPerView={4}
              spaceBetween={5}
              centeredSlides={false}
              navigation
              modules={[Navigation, Pagination]}
              className=" !pl-24 rounded-lg"
            >
              <div className="">
                {dataPrueba.map((plato, index) => (
                  <SwiperSlide key={index} className=" ">
                    <button
                      onClick={() => onChangeActive(index)}
                      className={`w-32 h-48  p-4 flex flex-col gap-2 items-center justify-center ${
                        isActive == index
                          ? "bg-gray-100 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-70 shadow-md rounded-3xl border border-white"
                          : null
                      }`}
                    >
                      <img
                        src={plato.url_imagen}
                        alt={plato.nombre}
                        className=" h-[55%] object-fill	"
                        style={{ filter: "drop-shadow(1px 1px 2px black)" }}
                      />
                      <p className="text-sm h-[45%] font-bold text-center">
                        {plato.nombre}
                      </p>
                    </button>
                  </SwiperSlide>
                ))}
              </div>
            </Swiper>
          </div>
        </div>
        <div className="w-1/4 h-full flex flex-col justify-between py-10 px-4">
          <div className="w-full flex justify-center gap-12">
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#000000"
              >
                <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" />
              </svg>
            </button>
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#000000"
              >
                <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
              </svg>
            </button>
          </div>

          <div className="h-4/5 bg-gray-100 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-70 shadow-md rounded-3xl border border-white p-8">
            <div className="flex justify-between">
              <button className="font-thin">
                <h1>Overview</h1>
              </button>
              <button className="font-thin text-gray-400">
                <h1>Ingredients</h1>
              </button>
            </div>
            <div className="flex flex-col gap-3 justify-between">
              <div class="flex flex-col justify-end  relative rounded-xl  py-2 w-[45px] h-24 ">
                <h1 class="text-gray-500 absolute font-bold text-3xl top-1/2 -translate-y-2/3 right-[-20px]">
                  5.0
                </h1>
                <div className="bg-orange-400 h-[80%] rounded-xl flex items-end justify-center pb-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="18px"
                    viewBox="0 0 24 24"
                    width="18px"
                    fill="#000000"
                  >
                    <path
                      d="M12 17.27L18.18 21 16.54 13.97 
                        22 9.24l-7.19-.62L12 2 
                        9.19 8.62 2 9.24 
                        7.46 13.97 5.82 21z"
                    />
                  </svg>
                </div>
              </div>
              <div>
                <div>
                  <h1 className="text-xl">Gordon Ramsay</h1>
                  <p>British chef</p>
                </div>
                <div className="mt-3">
                  <h6 className="text-gray-500 font-thin text-xs">
                    If you want to become a great chef you have to work with
                    great chefs. And that's exactly what I did.
                  </h6>
                </div>
              </div>
              <div className="mt-3 flex w-full justify-between">
                <button className="flex items-center justify-center gap-2 p-2 bg-gray-300 rounded-xl text-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="15px"
                    viewBox="0 -960 960 960"
                    width="15px"
                    fill="#000000"
                  >
                    <path d="M720-120H280v-520l280-280 50 50q7 7 11.5 19t4.5 23v14l-44 174h258q32 0 56 24t24 56v80q0 7-2 15t-4 15L794-168q-9 20-30 34t-44 14Zm-360-80h360l120-280v-80H480l54-220-174 174v406Zm0-406v406-406Zm-80-34v80H160v360h120v80H80v-520h200Z" />
                  </svg>{" "}
                  54 Likes
                </button>
                <button className="bg-gray-300 p-2 rounded-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="15px"
                    viewBox="0 -960 960 960"
                    width="15px"
                    fill="#ffffff"
                  >
                    <path d="M240-840h440v520L400-40l-50-50q-7-7-11.5-19t-4.5-23v-14l44-174H120q-32 0-56-24t-24-56v-80q0-7 2-15t4-15l120-282q9-20 30-34t44-14Zm360 80H240L120-480v80h360l-54 220 174-174v-406Zm0 406v-406 406Zm80 34v-80h120v-360H680v-80h200v520H680Z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
