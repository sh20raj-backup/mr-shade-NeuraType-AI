import Image from "next/image";

export default function UseCases() {
  const useCases = [
    {
      title: "Content Creators",
      description: "Create engaging blog posts, articles, and social media content that resonates with your audience.",
      icon: "📝",
      color: "bg-blue-500"
    },
    {
      title: "Marketing Teams",
      description: "Craft persuasive copy for campaigns, emails, and ads that drive conversions and engagement.",
      icon: "📢",
      color: "bg-purple-500"
    },
    {
      title: "Founders & Startups",
      description: "Build compelling pitches, investor updates, and business plans that get results.",
      icon: "🚀",
      color: "bg-orange-500"
    },
    {
      title: "College Students",
      description: "Write clear, well-structured essays and research papers with proper citations and formatting.",
      icon: "🎓",
      color: "bg-green-500"
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-black" id="use-cases">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold mb-2 block">WHO IT'S FOR</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Perfect For Everyone Who Writes</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            NeuraType AI adapts to your specific needs, whether you're a professional writer, marketer, student, or business owner.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {useCases.map((useCase, index) => (
            <div 
              key={index} 
              className="glassmorphic p-6 border-t-4 transition-all hover:transform hover:-translate-y-2"
              style={{ borderColor: useCase.color.replace("bg-", "var(--") + ")" }}
            >
              <div className="text-4xl mb-4">{useCase.icon}</div>
              <h3 className="text-xl font-bold mb-3">{useCase.title}</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">{useCase.description}</p>
              <a href="#" className="text-primary font-medium flex items-center gap-1 hover:underline">
                Learn more
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col md:flex-row gap-6 justify-center items-center bg-gradient-to-r from-primary/10 to-accent/10 p-8 rounded-2xl">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold mb-2">Ready to transform your writing?</h3>
            <p className="text-gray-700 dark:text-gray-300">Join thousands of satisfied users across different industries.</p>
          </div>
          <a href="#pricing" className="btn-primary whitespace-nowrap">Get Started Today</a>
        </div>
      </div>
    </section>
  );
}
