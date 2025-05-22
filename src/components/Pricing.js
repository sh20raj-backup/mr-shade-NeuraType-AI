"use client";

import { useState } from "react";

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(true);

  const plans = [
    {
      name: "Free",
      description: "Perfect for trying out NeuraType AI",
      monthlyPrice: 0,
      annualPrice: 0,
      features: [
        { name: "500 AI-assisted words per month", included: true },
        { name: "Basic text suggestions", included: true },
        { name: "Grammar & spelling corrections", included: true },
        { name: "1 writing style profile", included: true },
        { name: "Standard templates", included: true },
        { name: "Advanced tone customization", included: false },
        { name: "SEO optimization", included: false },
        { name: "Multilingual support", included: false },
        { name: "Priority support", included: false },
      ],
      cta: "Start for Free",
      highlight: false,
      ctaColor: "bg-gray-200 hover:bg-gray-300 text-gray-800"
    },
    {
      name: "Pro",
      description: "For professionals and serious writers",
      monthlyPrice: 19,
      annualPrice: 15,
      features: [
        { name: "Unlimited AI-assisted words", included: true },
        { name: "Advanced text suggestions", included: true },
        { name: "Grammar & spelling corrections", included: true },
        { name: "5 writing style profiles", included: true },
        { name: "All templates", included: true },
        { name: "Advanced tone customization", included: true },
        { name: "SEO optimization", included: true },
        { name: "Multilingual support (15 languages)", included: true },
        { name: "Priority support", included: false },
      ],
      cta: "Get Started",
      highlight: true,
      ctaColor: "bg-primary hover:bg-primary/90 text-white"
    },
    {
      name: "Enterprise",
      description: "For teams and businesses",
      monthlyPrice: 49,
      annualPrice: 39,
      features: [
        { name: "Unlimited AI-assisted words", included: true },
        { name: "Advanced text suggestions", included: true },
        { name: "Grammar & spelling corrections", included: true },
        { name: "Unlimited writing style profiles", included: true },
        { name: "All templates + custom templates", included: true },
        { name: "Advanced tone customization", included: true },
        { name: "SEO optimization", included: true },
        { name: "Multilingual support (30+ languages)", included: true },
        { name: "Priority support 24/7", included: true },
      ],
      cta: "Contact Sales",
      highlight: false,
      ctaColor: "bg-gray-200 hover:bg-gray-300 text-gray-800"
    }
  ];

  return (
    <section className="py-20 bg-secondary/30 dark:bg-gray-900/50" id="pricing">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold mb-2 block">PRICING</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Choose Your Plan</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Flexible options for individuals and teams of all sizes. All plans include core features.
          </p>
          
          {/* Billing toggle */}
          <div className="flex items-center justify-center mt-8">
            <span className={`mr-3 ${!isAnnual ? 'font-semibold' : ''}`}>Monthly</span>
            <button 
              onClick={() => setIsAnnual(!isAnnual)} 
              className={`relative inline-flex h-6 w-12 items-center rounded-full transition-colors ${isAnnual ? 'bg-primary' : 'bg-gray-300 dark:bg-gray-700'}`}
              aria-label={`Switch to ${isAnnual ? 'monthly' : 'annual'} billing`}
            >
              <span 
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${isAnnual ? 'translate-x-7' : 'translate-x-1'}`} 
              />
            </button>
            <span className={`ml-3 ${isAnnual ? 'font-semibold' : ''}`}>
              Annual <span className="text-primary font-semibold">Save 20%</span>
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`glassmorphic p-6 flex flex-col relative ${
                plan.highlight ? 'border-primary border-2 shadow-xl shadow-primary/20' : ''
              }`}
            >
              {plan.highlight && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </div>
              )}
              
              <div className="mb-6">
                <h3 className="text-2xl font-bold">{plan.name}</h3>
                <p className="text-gray-600 dark:text-gray-400 mt-1">{plan.description}</p>
              </div>
              
              <div className="mb-6">
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold">
                    ${isAnnual ? plan.annualPrice : plan.monthlyPrice}
                  </span>
                  <span className="text-gray-600 dark:text-gray-400 ml-2">
                    /month{isAnnual ? ' (billed annually)' : ''}
                  </span>
                </div>
              </div>
              
              <div className="space-y-3 mb-8 flex-grow">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center">
                    {feature.included ? (
                      <svg className="h-5 w-5 text-accent mr-2 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    ) : (
                      <svg className="h-5 w-5 text-gray-400 mr-2 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                      </svg>
                    )}
                    <span className={feature.included ? '' : 'text-gray-500'}>
                      {feature.name}
                    </span>
                  </div>
                ))}
              </div>
              
              <a 
                href="#" 
                className={`py-3 px-6 rounded-full font-medium text-center ${plan.ctaColor}`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        {/* FAQ shortcut */}
        <div className="text-center mt-16">
          <p className="mb-2">Have questions about our plans?</p>
          <a href="#faq" className="text-primary font-medium hover:underline">Check out our FAQ section</a>
        </div>
      </div>
    </section>
  );
}
