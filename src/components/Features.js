import Image from "next/image";

export default function Features() {
  const features = [
    {
      title: "Real-time Smart Text Suggestions",
      description: "Get intelligent text completions and suggestions as you type to speed up your writing process.",
      icon: "/icon-text-suggestions.svg",
    },
    {
      title: "Personalized Tone & Style Detection",
      description: "Our AI adapts to your unique writing style and ensures consistency across all your content.",
      icon: "/icon-personalized-tone.svg",
    },
    {
      title: "Ready-made Templates",
      description: "Access templates for emails, blogs, social media posts, and more for quick content creation.",
      icon: "/icon-templates.svg",
    },
    {
      title: "Multilingual Support",
      description: "Write and translate content in multiple languages with native-speaker quality and nuance.",
      icon: "/icon-multilingual.svg",
    },
    {
      title: "Built-in SEO Optimization",
      description: "Automatically optimize your content for search engines to enhance visibility and reach.",
      icon: "/icon-seo.svg",
    },
    {
      title: "Voice-to-text & Chat Interface",
      description: "Speak your thoughts or chat with our AI to get the perfect content without typing.",
      icon: "/icon-voice-chat.svg",
    },
  ];

  return (
    <section className="py-20 bg-secondary/30 dark:bg-gray-900/50" id="features">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold mb-2 block">POWERFUL FEATURES</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Everything You Need in One Tool</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            NeuraType AI combines cutting-edge AI technology with intuitive design to transform your writing experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="glassmorphic p-6 transition-all hover:scale-105 hover:shadow-xl"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="bg-primary/10 dark:bg-primary/20 p-3 rounded-lg inline-block mb-4">
                <Image 
                  src={feature.icon} 
                  alt={feature.title} 
                  width={32} 
                  height={32} 
                  className="h-8 w-8"
                />
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-700 dark:text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a href="#" className="btn-primary">
            Explore All Features
          </a>
        </div>
      </div>
    </section>
  );
}
