"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function CTAFooter() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, we would send this to an API
    if (email) {
      setSubscribed(true);
      setEmail("");
      // Reset the subscribed state after a few seconds
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-secondary/50 to-primary/10 dark:from-gray-900 dark:to-gray-900">
      {/* CTA Section */}
      <div className="container mx-auto px-4 py-20" id="cta">
        <div className="max-w-5xl mx-auto text-center glassmorphic p-8 sm:p-12 shadow-xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Writing?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of professionals using NeuraType AI to create better content in less time.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a href="#" className="btn-primary">
              Try for Free
            </a>
            <a href="#" className="btn-secondary flex items-center justify-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
              </svg>
              Watch Demo
            </a>
          </div>

          {/* Newsletter Signup */}
          <div className="max-w-md mx-auto">
            <h3 className="text-xl font-bold mb-4">Stay Updated</h3>
            <p className="mb-4">Subscribe to our newsletter for the latest updates and tips.</p>
            
            {subscribed ? (
              <div className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 p-3 rounded">
                Thanks for subscribing! We'll be in touch soon.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-grow px-4 py-2 rounded-full border focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-800 dark:border-gray-700"
                  required
                />
                <button type="submit" className="btn-primary whitespace-nowrap">
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Footer Content */}
      <div className="border-t border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Logo and description */}
            <div className="col-span-1 md:col-span-1">
              <Link href="/" className="flex items-center mb-4">
                <Image 
                  src="/neuratype-logo.svg" 
                  alt="NeuraType AI Logo" 
                  width={180} 
                  height={40} 
                  className="h-8 w-auto"
                />
              </Link>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Your smartest writing assistant, built for the future.
              </p>
              <div className="flex space-x-4">
                <a href="#" aria-label="Twitter" className="text-gray-500 hover:text-primary">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" aria-label="LinkedIn" className="text-gray-500 hover:text-primary">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
                <a href="#" aria-label="Facebook" className="text-gray-500 hover:text-primary">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Product</h3>
              <ul className="space-y-2">
                <li><a href="#features" className="text-gray-600 dark:text-gray-400 hover:text-primary">Features</a></li>
                <li><a href="#pricing" className="text-gray-600 dark:text-gray-400 hover:text-primary">Pricing</a></li>
                <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary">Integrations</a></li>
                <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary">Roadmap</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary">Blog</a></li>
                <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary">Help Center</a></li>
                <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary">Community</a></li>
                <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary">API Documentation</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary">About Us</a></li>
                <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary">Careers</a></li>
                <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary">Terms of Service</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-200 dark:border-gray-800 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center">
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              © {currentYear} NeuraType AI. All rights reserved.
            </p>
            <div className="mt-4 sm:mt-0">
              <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary text-sm mr-4">Privacy Policy</a>
              <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary text-sm">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
