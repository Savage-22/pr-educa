import React from 'react'

import HeaderAl from '../../components/header/HeaderAl';


export default function DatoAlumno() {
    return (
        <div className="flex h-screen">
            <HeaderAl />
            <main className="flex-1 bg-[#def7ff] p-4">
                <p className="text-black">Aqui van los datos personales</p>
            </main>
        </div>
    )
}
