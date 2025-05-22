"use client";

import { useState } from "react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How does NeuraType AI work?",
      answer: "NeuraType AI uses advanced machine learning models trained on high-quality writing samples to understand context and generate relevant suggestions. It learns from your writing style over time to provide more personalized suggestions. The AI engine processes your text in real-time and offers improvements for grammar, style, and content."
    },
    {
      question: "Is my content secure and private?",
      answer: "Absolutely! We take data security very seriously. All your content is encrypted end-to-end and we never store your text without explicit permission. Your data is never used to train our models without consent, and you can delete your data anytime. We comply with GDPR, CCPA, and other privacy regulations."
    },
    {
      question: "Can I use NeuraType AI in multiple languages?",
      answer: "Yes! The Free plan supports English only, while the Pro plan supports 15 languages including Spanish, French, German, Portuguese, Italian, Dutch, Russian, Japanese, and Chinese. The Enterprise plan supports over 30 languages with the same high quality across all of them."
    },
    {
      question: "How does the pricing work?",
      answer: "Our pricing is subscription-based with both monthly and annual billing options. The Free plan is always free with limited features, the Pro plan is designed for individual professionals, and the Enterprise plan is tailored for teams with collaborative features. Annual billing gives you a 20% discount compared to monthly billing."
    },
    {
      question: "Does NeuraType AI integrate with other tools?",
      answer: "Yes! NeuraType AI integrates with Microsoft Word, Google Docs, Gmail, Outlook, Slack, and most major browsers through our extensions. The Enterprise plan includes API access for custom integrations with your existing workflow tools. We're constantly adding new integrations based on user feedback."
    },
    {
      question: "What makes NeuraType AI different from other writing assistants?",
      answer: "NeuraType AI stands out with its ability to learn your unique writing style, exceptionally fast response time (typically under 500ms), focus on preserving your authentic voice, extensive template library, and comprehensive multilingual support. Our AI is also trained specifically on high-quality professional content relevant to business communication."
    },
    {
      question: "Can I cancel my subscription anytime?",
      answer: "Yes, you can cancel your subscription at any time. If you cancel, you'll still have access to your plan until the end of your current billing period. We don't offer refunds for partial billing periods, but we do offer a 7-day free trial of the Pro plan so you can make sure it's right for you before committing."
    },
    {
      question: "Do you offer customer support?",
      answer: "Yes! All plans include access to our help center and community forum. The Pro plan includes email support with a 24-hour response time. Enterprise customers receive priority support with a dedicated account manager and 24/7 email and chat support with a 2-hour response time for critical issues."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-white dark:bg-black" id="faq">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold mb-2 block">FAQ</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Everything you need to know about NeuraType AI and how it can help you write better.
          </p>
        </div>

        <div className="max-w-4xl mx-auto divide-y divide-gray-200 dark:divide-gray-800">
          {faqs.map((faq, index) => (
            <div key={index} className="py-6">
              <button
                onClick={() => toggleFAQ(index)}
                className="flex w-full justify-between items-center text-left focus:outline-none"
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <h3 className="text-xl font-bold">{faq.question}</h3>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-6 w-6 transition-transform ${openIndex === index ? 'transform rotate-180' : ''}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div
                id={`faq-answer-${index}`}
                className={`mt-2 transition-all duration-300 ease-in-out overflow-hidden ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="text-gray-700 dark:text-gray-300">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="mb-4">Still have questions?</p>
          <a href="#" className="btn-secondary">
            Contact Support
          </a>
        </div>
      </div>
    </section>
  );
}
