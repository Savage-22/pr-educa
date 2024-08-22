import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import HomeG from './viewGuest/HomeG'

export default function Rutas() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomeG />} />
            </Routes>
        </Router>
    )
}
