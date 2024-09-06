import React from 'react';
import { Link } from "react-router-dom";

export default function HeaderG() {


    return (
        <header className="flex items-center py-2 px-4 bg-[#2D9596] gap-2">
            <div className="logo">
                <a href="#home">
                    <img alt="Logo" className="h-12 block shadow-lg" />
                </a>
            </div>
            <input type="checkbox" id='check' className="hidden" />
            <label htmlFor="check" className='mostrar-menu text-3xl cursor-pointer hidden text-[#FBFBCC] transition-colors duration-400 order-1 hover:text-[#6ac2fc]'>
                &#8801;
            </label>
            <nav className="flex items-center flex-grow justify-between pl-4 fixed w-full h-screen bg-[#0071BC] right-[-100%] top-0 text-center p-12 z-50 transition-[right] duration-800 md:static md:flex md:flex-row md:items-center md:justify-between md:p-0 md:w-auto md:h-auto md:bg-transparent">
                <ul className="list-none flex flex-col gap-1 md:flex-row md:gap-4">
                    <li className="pb-3 md:pb-0">
                        <Link to="/" className="text-white no-underline font-bold transition-colors duration-300 hover:text-[#FBFBCC]">Inicio</Link>
                    </li>
                    <li className="pb-3 md:pb-0">
                        <Link to="" className="text-white no-underline font-bold transition-colors duration-300 hover:text-[#FBFBCC]">Instrucciones</Link>
                    </li>
                    <li className="pb-3 md:pb-0">
                        <Link to="" className="text-white no-underline font-bold transition-colors duration-300 hover:text-[#FBFBCC]">Noticias</Link>
                    </li>
                    <li className="pb-3 md:pb-0">
                        <Link to="" className="text-white no-underline font-bold transition-colors duration-300 hover:text-[#FBFBCC]">Reportes</Link>
                    </li>
                    <li className="pb-3 md:pb-0">
                        <Link to="" className="text-white no-underline font-bold transition-colors duration-300 hover:text-[#FBFBCC]">Formulario</Link>
                    </li>
                </ul>

                    <button className='bg-[#ECF4D6] hover:bg-[#3fadae] text-[#52d9db] hover:text-[#ECF4D6]'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-bell">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M10 5a2 2 0 1 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" />
                            <path d="M9 17v1a3 3 0 0 0 6 0v-1" />
                        </svg>
                    </button>

                <div className="flex flex-col items-center mt-8 md:flex-row md:mt-0">
                    <div className="bg-[#ECF4D6] p-2 pl-5 rounded-lg flex items-center space-x-10">
                        <img src={Imagen} alt="User" className="h-12 w-12 rounded-full" />
                        <div>
                            <h1 className="text-lg font-semibold"></h1>
                            <h3 className="text-sm">Usuario</h3>
                            <button className="text-red-600 hover:text-red-800 text-sm">Cerrar sesión</button>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}
