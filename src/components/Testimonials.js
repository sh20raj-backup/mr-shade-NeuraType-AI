"use client";

import { useState } from "react";
import Image from "next/image";

export default function Testimonials() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      quote: "NeuraType AI has completely transformed our content creation process. We've reduced our writing time by 60% while producing higher quality work that connects with our audience.",
      name: "Sarah Johnson",
      position: "Content Director, TechVisionary",
      avatar: "/avatar-1.svg",
      rating: 5
    },
    {
      quote: "As a non-native English speaker, I always struggled with professional emails. Now with NeuraType AI, my communication is flawless and I feel much more confident in my daily work.",
      name: "Miguel Sanchez",
      position: "Product Manager, InnovateCorp",
      avatar: "/avatar-2.svg", 
      rating: 5
    },
    {
      quote: "My marketing team has been using NeuraType AI for 6 months and our campaign engagement has increased by 43%. The tone consistency across all channels is remarkable.",
      name: "Emily Zhang",
      position: "CMO, GrowthPath Solutions",
      avatar: "/avatar-3.svg",
      rating: 5
    }
  ];

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const renderStars = (rating) => {
    return Array(5).fill(0).map((_, i) => (
      <svg 
        key={i} 
        xmlns="http://www.w3.org/2000/svg" 
        className={`h-5 w-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`} 
        viewBox="0 0 20 20" 
        fill="currentColor"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <section className="py-20 bg-white dark:bg-black" id="testimonials">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold mb-2 block">TESTIMONIALS</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Users Say</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Join thousands of satisfied professionals who have transformed their writing with NeuraType AI.
          </p>
        </div>

        <div className="max-w-5xl mx-auto relative">
          {/* Control buttons */}
          <button 
            onClick={prevTestimonial} 
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white dark:bg-gray-800 rounded-full p-3 shadow-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            aria-label="Previous testimonial"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button 
            onClick={nextTestimonial} 
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white dark:bg-gray-800 rounded-full p-3 shadow-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            aria-label="Next testimonial"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Testimonials */}
          <div className="overflow-hidden relative">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeTestimonial * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="min-w-full px-4">
                  <div className="glassmorphic p-8 md:p-12">
                    <div className="flex justify-center mb-6">
                      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-primary">
                        <path d="M14 24H8C8 17.375 13.375 12 20 12V16C15.625 16 12 19.625 12 24V36H24V24H14ZM38 24H32C32 17.375 37.375 12 44 12V16C39.625 16 36 19.625 36 24V36H48V24H38Z" fill="currentColor"/>
                      </svg>
                    </div>

                    <p className="text-xl md:text-2xl text-center mb-8">
                      "{testimonial.quote}"
                    </p>

                    <div className="flex flex-col items-center">
                      <div className="flex items-center mb-2">
                        {renderStars(testimonial.rating)}
                      </div>
                      
                      <div className="flex items-center mb-4">
                        <div className="mr-4">
                          <Image 
                            src={testimonial.avatar} 
                            alt={testimonial.name} 
                            width={64} 
                            height={64} 
                            className="rounded-full"
                          />
                        </div>
                        <div>
                          <h4 className="font-bold text-lg">{testimonial.name}</h4>
                          <p className="text-gray-600 dark:text-gray-400">{testimonial.position}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots navigation */}
          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  activeTestimonial === index 
                    ? 'bg-primary w-8' 
                    : 'bg-gray-300 dark:bg-gray-700'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-6">Trusted by teams at</h3>
          <div className="flex flex-wrap justify-center gap-8 opacity-70">
            {['Google', 'Microsoft', 'Adobe', 'Shopify', 'Twitter'].map((company, index) => (
              <div key={index} className="text-xl font-bold tracking-tight">{company}</div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
