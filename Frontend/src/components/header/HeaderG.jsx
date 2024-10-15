import React from 'react';
import { Link } from "react-router-dom";

import logo from '../../assets/img/logo.jpeg';

export default function HeaderG() {
    return (
        <header className="flex items-center justify-between py-2 px-4 bg-[#0cb7f2] shadow-md">
            <div className="logo">
                <a href="#home">
                    <img src={logo} className="max-w-full max-h-20 pl-11" />
                </a>
            </div>

            <input type="checkbox" id="check" className="hidden peer" />
            <label htmlFor="check" className="text-3xl cursor-pointer text-white transition-colors duration-400 md:hidden">
                &#8801;
            </label>

            <nav className="flex flex-col items-center fixed top-0 left-0 h-screen w-2/3 bg-[#0071BC] z-40 transform -translate-x-full transition-transform duration-500 peer-checked:translate-x-0 md:static md:flex md:flex-row md:items-center md:h-auto md:w-auto md:bg-transparent md:translate-x-0">
                <ul className="list-none flex flex-col gap-4 mt-16 md:flex-row md:gap-6 md:mt-0">
                    <li>
                        <Link to="/" className="text-white no-underline font-bold transition-colors duration-300 hover:text-[#53d4ff]">Inicio</Link>
                    </li>
                    <li>
                        <Link to="/instrucciones" className="text-white no-underline font-bold transition-colors duration-300 hover:text-[#53d4ff]">Historia</Link>
                    </li>
                    <li>
                        <Link to="/noticias" className="text-white no-underline font-bold transition-colors duration-300 hover:text-[#53d4ff]">Niveles</Link>
                    </li>
                    <li>
                        <Link to="/reportes" className="text-white no-underline font-bold transition-colors duration-300 hover:text-[#53d4ff]">Servicios</Link>
                    </li>
                    <li>
                        <Link to="/formulario" className="text-white no-underline font-bold transition-colors duration-300 hover:text-[#53d4ff]">Plana Docente</Link>
                    </li>
                </ul>

                <div className="mt-6 flex flex-col gap-4 md:flex-row md:gap-2 md:ml-4 md:mt-0">
                    <Link to="/login" className="bg-white text-[#0cb7f2] font-bold py-2 px-4 rounded-full hover:text-[#def7ff] hover:bg-[#53d4ff] transition-colors duration-300">
                        Iniciar Sesión
                    </Link>
                </div>
            </nav>
        </header>
    );
}
