const Features = () => {
    const features = [
      { title: "Personalized Wellness", desc: "Tailored Ayurvedic solutions.", icon: "🌿" },
      { title: "Holistic Healing", desc: "Mind, body, and soul rejuvenation.", icon: "✨" },
      { title: "Focus on Prevention", desc: "Prevent issues before they arise.", icon: "🛡️" },
    ];
  
    return (
      <section className="py-16 bg-[#FFF7E2]">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-8 text-dark">Discover Ayurveda's Magic</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 bg-light rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div className="text-5xl mb-4 text-accent">{feature.icon}</div>
                <h4 className="text-2xl font-semibold mb-2 text-primary">{feature.title}</h4>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Features;
  