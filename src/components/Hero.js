"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Hero() {
  const [isTyping, setIsTyping] = useState(false);
  const [typedText, setTypedText] = useState("");
  const fullText = "Your Smartest Writing Assistant, Built for the Future.";
  
  useEffect(() => {
    let currentIndex = 0;
    setIsTyping(true);
    
    const typingInterval = setInterval(() => {
      if (currentIndex < fullText.length) {
        setTypedText(prev => prev + fullText.charAt(currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        setIsTyping(false);
        
        // Reset and start again after pause
        setTimeout(() => {
          setTypedText("");
          currentIndex = 0;
          setIsTyping(true);
        }, 3000);
      }
    }, 70);
    
    return () => clearInterval(typingInterval);
  }, []);

  return (
    <section className="relative pt-32 pb-20 overflow-hidden hero-gradient">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight animate-fade-in">
              <span className="block mb-2">NeuraType AI</span>
              <span className="gradient-text h-16 block">
                {typedText}
                {isTyping && <span className="animate-pulse">|</span>}
              </span>
            </h1>
            
            <p className="text-lg md:text-xl mb-8 text-gray-700 dark:text-gray-300 max-w-lg mx-auto lg:mx-0 animate-fade-in animate-delay-100">
              Craft perfect content in seconds with our AI-powered assistant that adapts to your tone, 
              improves grammar, and suggests ideas — all in real time.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in animate-delay-200">
              <a href="#" className="btn-primary text-center">Try for Free</a>
              <a href="#" className="btn-secondary flex items-center justify-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
                Watch Demo
              </a>
            </div>
            
            <div className="mt-8 text-sm text-gray-500 dark:text-gray-400 animate-fade-in animate-delay-300">
              Join 10,000+ professionals already using NeuraType AI
            </div>
          </div>
          
          {/* Right Content - App Preview Animation */}
          <div className="w-full lg:w-1/2 relative animate-fade-in animate-delay-100">
            <div className="glassmorphic p-6 relative">
              <div className="absolute -top-2 -left-2 bg-primary rounded-full h-4 w-4"></div>
              <div className="absolute -top-2 -right-2 bg-accent rounded-full h-4 w-4"></div>
              
              <Image 
                src="/app-screenshot.svg"
                alt="NeuraType AI in action"
                width={600}
                height={400}
                className="w-full rounded-md shadow-lg"
                priority
              />
              
              {/* Animated typing indicator */}
              <div className="absolute bottom-10 left-12 right-12 flex items-center gap-2 p-3 bg-white dark:bg-gray-800 rounded-lg shadow-md">
                <div className="flex-1 h-6 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                <div className="h-6 w-6 rounded-full bg-primary animate-pulse"></div>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 glassmorphic p-3 rotate-3 animate-bounce" style={{animationDuration: '3s'}}>
              <Image src="/icon-text-suggestions.svg" alt="Text Suggestions" width={24} height={24} />
            </div>
            
            <div className="absolute -bottom-4 -left-4 glassmorphic p-3 -rotate-3 animate-bounce" style={{animationDuration: '4s'}}>
              <Image src="/icon-personalized-tone.svg" alt="Personalized Tone" width={24} height={24} />
            </div>
          </div>
        </div>
      </div>

      {/* Wave shape divider */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 80" fill="none">
          <path fillRule="evenodd" clipRule="evenodd" 
                d="M0 48L60 53.3C120 59 240 69 360 69.3C480 69 600 59 720 48C840 37 960 27 1080 32C1200 37 1320 59 1380 69.3L1440 80V0H0V48Z" 
                fill="var(--background)" />
        </svg>
      </div>
    </section>
  );
}
