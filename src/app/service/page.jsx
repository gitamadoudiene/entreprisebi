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

export default function Service() {
  const router = useRouter();

  return (
    <div>
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
    </div>
  )
}
