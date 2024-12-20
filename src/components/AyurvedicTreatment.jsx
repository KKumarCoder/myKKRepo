import React from "react";
import girl from '../assets/girl.png';
import backgroundDesign from '../assets/backgroundDesign.png';
import heartbeat from '../assets/heartbeat (1) 1.png';
import ribbon from '../assets/ribbon 1.png';
import lotus from '../assets/lotus-position 1.png';
import protection from '../assets/protection 1.png';
import ayurveda from '../assets/ayurveda 1.png';
import strong from '../assets/strong 1.png';

// Reusable Card Component
const Card = ({ icon, title, description, bgColor }) => {
  return (
    <div className="flex w-full md:w-[400px] lg:w-[500px] h-auto md:h-[140px] items-center justify-end">
      <div className={`w-[100px] md:w-[120px] h-[100px] md:h-[120px] p-4 rounded-full ${bgColor}`}>
        <img src={icon} alt="icon" className="w-full h-full object-cover" />
      </div>
      <div className="flex flex-col mx-3 space-y-2 justify-end text-right">
        <h1 className="text-lg md:text-xl lg:text-2xl font-semibold text-pretty">{title}</h1>
        <p className="text-sm md:text-[16px] lg:text-[18px] text-[#3A643B]">{description}</p>
      </div>
    </div>
  );
};

function AyurvedicTreatment() {
  const cardsData = [
    {
      icon: heartbeat,
      title: "Personalized Wellness",
      description: "Get treatments made just for you based on your individual doshas (body type).",
      bgColor: "bg-[#eaf2f3]",
    },
    {
      icon: ribbon,
      title: "Focus on Prevention",
      description: "Stop problems even before they start.",
      bgColor: "bg-[#eaf2f3]",
    },
    {
      icon: lotus,
      title: "Mind-Body Connection",
      description: "Keep your mind and body in sync for a happy life.",
      bgColor: "bg-[#eaf2f3]",
    },
    {
      icon: protection,
      title: "Natural Healing",
      description: "Harness the power of nature for healing and rejuvenation.",
      bgColor: "bg-[#eaf2f3]",
    },
    {
      icon: ayurveda,
      title: "Ayurvedic Techniques",
      description: "Experience traditional techniques with modern care.",
      bgColor: "bg-[#e3ebc3]",
    },
    {
      icon: strong,
      title: "Strength and Vitality",
      description: "Boost your strength and vitality naturally.",
      bgColor: "bg-[#b2f1ce9d]",
    },
  ];

  return (
    <div className="mx-auto py-8 md:py-12 lg:py-16 w-full h-auto">
      <div className="container mx-auto px-4 lg:px-8">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-[#3A643B] mt-2 text-center">
          Discover Ayurveda’s Magic With us
        </h2>
        <div className="w-[60%] md:w-[54%] mx-auto h-[3px] lg:h-[4px] mb-6 md:mb-8 bg-[#187716]"></div>
        <p className="text-[16px] md:text-[20px] lg:text-[22px] text-[#666666] font-serif text-center mb-8 md:mb-12">
          Ayurvedic treatment aims to balance your body and mind, bringing harmony <br />
          and vitality. It's like a journey to better health using ancient wisdom, <br />
          a totally effective approach for a better life.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mx-auto px-4 lg:px-8 items-center">
        {/* Left Section */}
        <div className="flex flex-col items-center gap-6 md:gap-8">
          {cardsData.slice(0, 3).map((card, index) => (
            <Card
              key={index}
              icon={card.icon}
              title={card.title}
              description={card.description}
              bgColor={card.bgColor}
            />
          ))}
        </div>

        {/* Middle Section with Image */}
        <div
          style={{
            backgroundImage: `url(${backgroundDesign})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
          className="relative mx-auto flex items-center rounded-lg justify-center w-full h-[350px] md:h-[450px] lg:h-[501px]"
        >
          <img
            src={girl}
            alt="Ayurveda Illustration"
            className="absolute w-[60%] md:w-[80%] lg:w-[409px] h-auto mt-[10px]"
          />
        </div>

        {/* Right Section */}
        <div className="flex flex-col items-center gap-6 md:gap-8">
          {cardsData.slice(3).map((card, index) => (
            <Card
              key={index}
              icon={card.icon}
              title={card.title}
              description={card.description}
              bgColor={card.bgColor}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default AyurvedicTreatment;
