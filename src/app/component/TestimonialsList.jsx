import React from 'react'
import testimonials from '../data/testimonials'

export default function TestimonialsList() {
  return (
    <div className="my-10 flex flex-col items-center justify-center gap-10">
      <h1 className="text-3xl font-bold text-center">Témoignages de nos clients</h1>
      <div className="flex flex-wrap gap-10 justify-center">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="bg-white shadow-lg rounded-lg p-6 max-w-sm">
            <p className="text-gray-700">{testimonial.text}</p>
            <p className="mt-4 font-semibold">{testimonial.name}</p>
          </div>
        ))}
      </div>
      
    </div>
  )
}
