'use client';
import { useRouter } from "next/navigation";

import Image from "next/image";

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

export default function Home() {

const router = useRouter();
  return (
    <section>
      {/* hero section */}
<div className="relative bg-gradient-to-r from-purple-600 to-blue-600 h-screen text-white overflow-hidden">
  <div className="absolute inset-0">
    <img src="https://images.unsplash.com/photo-1522252234503-e356532cafd5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw2fHxjb2RlfGVufDB8MHx8fDE2OTQwOTg0MTZ8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Background Image" className="object-cover object-center w-full h-full" />
    <div className="absolute inset-0 bg-black opacity-50"></div>
  </div>
  
  <div className="relative z-10 flex flex-col justify-center items-center h-full text-center">
    <h1 className="text-5xl font-bold leading-tight mb-4">Besoin d&apos;une solution Digital ?</h1>
    <p className="text-lg text-gray-300 mb-8">Decouvrez sunu Entreprise votre entreprise IT.</p>
    <a href="#" className="bg-slate-900 text-white hover:bg-slate-500 py-2 px-6 rounded-full text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">Voir Nos Services</a>
  </div>
</div>
    {/* fin hero section */}

    {/* lister les services */}
    <div className="container mx-auto py-10">
      <h2 className="text-3xl font-bold text-center mb-8">Nos Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Services.map((service) => (
          <div
            key={service.slug}
            className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105"
            onClick={() => router.push(`/service/${service.slug}`)}
          >
            <Image
              src={service.image}
              alt={service.title}
              width={500}
              height={300}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-700">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    {/* fin liste des services */}

    {/* fin section contact */}

    {/* fin section témoignages */}
   
    {/* fin section partenaires */}
  
    {/* fin section réalisations */}
   
    {/* fin section blog */}

    {/* fin section FAQ */}

    {/* fin section réseaux sociaux */}
   
    {/* fin section newsletter */}

    </section>
  );
}
