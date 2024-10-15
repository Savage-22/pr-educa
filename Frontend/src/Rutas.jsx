import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import HomeG from './viewGuest/HomeG'
import DatoAlumno from './viewUser/viewAlumno/DatoAlumno';
import NotaAlumno from './viewUser/viewAlumno/NotaAlumno';
import TareaAlumno from './viewUser/viewAlumno/TareaAlumno';
import LibretaAlumno from './viewUser/viewAlumno/LibretaAlumno';

export default function Rutas() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomeG />} />
                <Route path="/user/alumno/dpersonal/:id" element={<DatoAlumno />} />
                <Route path="/user/alumno/notas/:id" element={<NotaAlumno />} />
                <Route path="/user/alumno/tarea/:id" element={<TareaAlumno />} />
                <Route path="/user/alumno/libreta/:id" element={<LibretaAlumno />} />
            </Routes>
        </Router>
    )
}
