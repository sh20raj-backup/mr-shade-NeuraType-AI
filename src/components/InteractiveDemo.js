"use client";

import { useState, useEffect } from "react";

export default function InteractiveDemo() {
  const [inputText, setInputText] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedSuggestion, setSelectedSuggestion] = useState(null);

  const placeholderText = "Try typing something like 'I wanted to reach out regarding the project...' and see AI suggestions appear in real-time.";

  const exampleSuggestions = [
    "I wanted to reach out regarding the project deadline. Could we schedule a quick call to discuss the timeline?",
    "I wanted to reach out regarding the project proposal. I've reviewed the documents and have some feedback to share.",
    "I wanted to reach out regarding the project status. Let me know when you're available for an update meeting."
  ];

  useEffect(() => {
    if (inputText.length > 10) {
      setLoading(true);
      // Simulate API call delay
      const timer = setTimeout(() => {
        setSuggestions(exampleSuggestions);
        setLoading(false);
      }, 600);
      return () => clearTimeout(timer);
    } else {
      setSuggestions([]);
      setSelectedSuggestion(null);
    }
  }, [inputText]);

  const handleSuggestionClick = (suggestion) => {
    setInputText(suggestion);
    setSelectedSuggestion(suggestion);
  };

  return (
    <section className="py-20 bg-secondary/30 dark:bg-gray-900/50" id="demo">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold mb-2 block">TRY IT NOW</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience NeuraType AI</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Type in the box below to see how our AI can enhance your writing in real-time.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="glassmorphic p-6">
            {/* Demo text editor interface */}
            <div className="mb-4 flex items-center gap-2">
              <div className="h-3 w-3 bg-red-500 rounded-full"></div>
              <div className="h-3 w-3 bg-yellow-500 rounded-full"></div>
              <div className="h-3 w-3 bg-green-500 rounded-full"></div>
              <div className="ml-auto text-sm text-gray-500 dark:text-gray-400">NeuraType AI Demo</div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg p-4 mb-6 min-h-[200px] border border-gray-200 dark:border-gray-700">
              <textarea
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                className="w-full h-[150px] bg-transparent outline-none resize-none"
                placeholder={placeholderText}
              ></textarea>
              
              {loading && (
                <div className="flex items-center gap-2 mt-4">
                  <div className="animate-pulse bg-primary/20 h-2 w-2 rounded-full"></div>
                  <div className="animate-pulse bg-primary/40 h-2 w-2 rounded-full" style={{animationDelay: "200ms"}}></div>
                  <div className="animate-pulse bg-primary/60 h-2 w-2 rounded-full" style={{animationDelay: "400ms"}}></div>
                  <span className="text-sm text-gray-500">NeuraType AI is thinking...</span>
                </div>
              )}
            </div>

            {suggestions.length > 0 && (
              <div className="mt-6">
                <h3 className="text-lg font-medium mb-3">AI Suggestions:</h3>
                <div className="space-y-2">
                  {suggestions.map((suggestion, index) => (
                    <div 
                      key={index}
                      onClick={() => handleSuggestionClick(suggestion)}
                      className={`p-3 rounded-md cursor-pointer transition-all ${
                        selectedSuggestion === suggestion 
                          ? 'bg-primary text-white' 
                          : 'bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700'
                      }`}
                    >
                      {suggestion}
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="mt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
              <div className="text-sm text-gray-500 dark:text-gray-400">
                This is a simplified demo. The full version has more advanced features.
              </div>
              <a href="#pricing" className="btn-primary whitespace-nowrap">
                Try Full Version
              </a>
            </div>
          </div>
        </div>

        {/* Features Highlight */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-primary text-2xl font-bold">500ms</div>
            <p>Response Time</p>
          </div>
          <div>
            <div className="text-primary text-2xl font-bold">99%</div>
            <p>Grammar Accuracy</p>
          </div>
          <div>
            <div className="text-primary text-2xl font-bold">15+</div>
            <p>Language Support</p>
          </div>
          <div>
            <div className="text-primary text-2xl font-bold">100%</div>
            <p>Private & Secure</p>
          </div>
        </div>
      </div>
    </section>
  );
}
