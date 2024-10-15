import React from 'react'
import { Link } from "react-router-dom";

import logo from '../../assets/img/logo.jpeg';

export default function HeaderAl() {
    return (
        <aside className="w-1/6 bg-[#0cb7f2] p-4 flex flex-col h-screen">
            <img src={logo} alt="" className='max-w-full max-h-16 my-4 mx-auto' />
            <ul className="space-y-4">
                <li >
                    <Link to="/user/alumno/dpersonal/:id"
                    className="text-white hover:bg-[#3467a1] p-2 rounded-lg cursor-pointer block"
                    >
                        Datos Personales</Link>
                </li>
                <li >
                    <Link to="/user/alumno/notas/:id"
                    className="text-white hover:bg-[#3467a1] p-2 rounded-lg cursor-pointer block"
                    >
                        Historial de Notas</Link>
                </li>
                <li >
                    <Link to="/user/alumno/tarea/:id"
                    className="text-white hover:bg-[#3467a1] p-2 rounded-lg cursor-pointer block"
                    >
                        Tareas</Link>
                </li>
                <li >
                    <Link 
                        to="/user/alumno/libreta/:id" 
                        className="text-white hover:bg-[#3467a1] p-2 rounded-lg cursor-pointer block"
                    >
                        Libreta</Link>
                </li>
            </ul>
            <button className='text-white hover:bg-[#3467a1] p-2 rounded-lg cursor-pointer mt-auto'>Cerrar Sesion</button>
        </aside>
    )
}
