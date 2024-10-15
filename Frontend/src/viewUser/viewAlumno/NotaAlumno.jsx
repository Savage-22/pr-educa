import React from 'react'

import HeaderAl from '../../components/header/HeaderAl';

export default function NotaAlumno() {
  return (
    <div className="flex h-screen">
      <HeaderAl />
      <main className="flex-1 bg-[#def7ff] p-4">
        <p className="text-black">Aqui van las notas</p>
      </main>
    </div>
  )
}
