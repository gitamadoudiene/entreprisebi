import React from 'react'
import partenaires from '../data/partenaires'
import Image from 'next/image'

export default function PartenaireList() {
  return (
    <div className='flex flex-wrap justify-center gap-4'>
      {partenaires.map((partenaire) => (
        <div key={partenaire.id} className="bg-white shadow-lg rounded-lg p-6 max-w-sm flex flex-col items-center">
          <Image src={partenaire.image} alt={partenaire.name} width={100} height={100} className="rounded-full mb-4" />
          <h2 className="text-xl font-semibold">{partenaire.name}</h2>
          <p className="text-gray-700">{partenaire.description}</p>
        </div>
      ))}
      
    </div>
  )
}
