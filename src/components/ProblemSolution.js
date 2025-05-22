import Image from "next/image";

export default function ProblemSolution() {
  const problems = [
    {
      title: "Writer's Block",
      description: "Staring at a blank page, unable to find the right words or ideas to express yourself.",
      icon: "🔒"
    },
    {
      title: "Grammar Mistakes",
      description: "Embarrassing errors that undermine your credibility in professional communications.",
      icon: "❌"
    },
    {
      title: "Inconsistent Tone",
      description: "Struggling to maintain a consistent voice across different types of content.",
      icon: "📊"
    }
  ];

  const solutions = [
    {
      title: "AI-Powered Suggestions",
      description: "Get instant ideas, sentence completions, and rewrite options as you type.",
      icon: "💡"
    },
    {
      title: "Perfect Grammar",
      description: "Automated checking that catches even subtle errors and offers improvements.",
      icon: "✅"
    },
    {
      title: "Style Adaptation",
      description: "AI that learns your writing style and adapts to match your unique voice.",
      icon: "🎯"
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-black" id="problem-solution">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Transform Your Writing</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            From frustrating struggles to flowing creativity in seconds
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
          {/* Problems Column */}
          <div className="w-full lg:w-1/2">
            <div className="p-8 rounded-xl bg-red-50 dark:bg-red-900/10 mb-6">
              <h3 className="text-2xl font-bold mb-2 text-red-600 dark:text-red-400">The Problem</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Writing well is hard. You face numerous challenges that slow you down and reduce your impact.
              </p>
            </div>

            <div className="space-y-6">
              {problems.map((problem, index) => (
                <div key={index} className="flex items-start gap-4 p-6 rounded-lg border border-red-100 dark:border-red-900/30">
                  <div className="text-3xl">{problem.icon}</div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">{problem.title}</h4>
                    <p className="text-gray-700 dark:text-gray-300">{problem.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Arrow divider for mobile */}
          <div className="lg:hidden flex justify-center my-8">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-primary" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z" clipRule="evenodd" />
            </svg>
          </div>

          {/* Arrow divider for desktop */}
          <div className="hidden lg:flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-primary" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          </div>

          {/* Solutions Column */}
          <div className="w-full lg:w-1/2">
            <div className="p-8 rounded-xl bg-green-50 dark:bg-green-900/10 mb-6">
              <h3 className="text-2xl font-bold mb-2 text-green-600 dark:text-green-400">The Solution</h3>
              <p className="text-gray-700 dark:text-gray-300">
                NeuraType AI eliminates these pain points with advanced technology that works for you in real-time.
              </p>
            </div>

            <div className="space-y-6">
              {solutions.map((solution, index) => (
                <div key={index} className="flex items-start gap-4 p-6 rounded-lg border border-green-100 dark:border-green-900/30">
                  <div className="text-3xl">{solution.icon}</div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">{solution.title}</h4>
                    <p className="text-gray-700 dark:text-gray-300">{solution.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
