'use client';
import { useRouter } from "next/navigation";
import Services from "./component/Service";
import TestimonialsList from "./component/TestimonialsList";
import PartenaireList from "./component/PartenaireList";

import Image from "next/image";


export default function Home() {

const router = useRouter();
  return (
    <section>
      {/* hero section */}
<div className="relative bg-gradient-to-r from-purple-600 to-blue-600 h-screen text-white overflow-hidden">
  <div className="absolute inset-0">
    <img src="https://images.unsplash.com/photo-1522252234503-e356532cafd5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw2fHxjb2RlfGVufDB8MHx8fDE2OTQwOTg0MTZ8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Background Image"  className="object-cover object-center w-full h-full" />
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
    <Services/>
    {/* fin liste des services */}

  {/* debut section temoignages */}
    <TestimonialsList/>
    {/* fin section témoignages */}
{/* 
   debut section partenaires */}
   <PartenaireList/>
    {/* fin section partenaires */}
  
    {/* fin section réalisations */}
   
    {/* fin section blog */}

    {/* fin section FAQ */}

    {/* fin section réseaux sociaux */}

      {/* fin section contact */}
   
    {/* fin section newsletter */}

    </section>
  );
}
