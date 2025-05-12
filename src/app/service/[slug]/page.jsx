import React from 'react'
import Image from 'next/image';

const Services = [
  {
    title: "Développement Web",
    image:"/nov.jpg",
    description: "Nous créons des sites web modernes et responsives pour répondre à vos besoins.",
    slug: "dev-web",
  },
  {
    title: "Marketing Digital",
    image:"/nov.jpg",
    description: "Boostez votre visibilité en ligne avec nos stratégies de marketing digital.",
    slug: "strat-marketing",

  },
  {
    title: "Consultation IT",
    image:"/nov.jpg",
    description: "Bénéficiez de conseils d'experts pour optimiser votre infrastructure IT.",
    slug: "consult-it",
  },
];

export default function ServiceDetails({params}) {
    const service = Services.find(s => s.slug === params.slug);

    if (!service) {
        return <div>Service non trouvé</div>
    }
  return (
    <div>
      <h1 className='font-bold text-2xl '> {service.title}</h1>
        <div className='flex flex-col md:flex-row gap-4'>
            <div className='w-full md:w-1/2'>
                <Image src={service.image} alt={service.title} width={500} height={300} className="w-full h-48 object-cover" />
            </div>
            <div className='w-full md:w-1/2'>
                <p>{service.description}</p>
            </div>
    </div>
    </div>
  )
}
