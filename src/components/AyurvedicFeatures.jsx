import React from "react";
import feature1 from '../assets/feature.png'
import feature2 from '../assets/feature2.png'
import  feature3 from '../assets/feature3.png'

const AyurvedicFeatures = () => {
  return (
    <section className="bg-[#FFFAF1] py-12 px-4 m-auto">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#355E3B] mb-8">
          <span className="underline decoration-[#89CFF0]">What sets Ayurvedic consultations apart?</span>
        </h2>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Sanskrit Quote */}
          <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col justify-center items-center border-t-4 border-[#4CAF50]">
            <h3 className="text-green-700 text-2xl text-center mb-2 font-semibold">
              "स्वस्थस्य स्वास्थ्य रक्षणं, आतुरस्य विकार प्रशमनं ॥"
            </h3>
            <p className="text-gray-600 text-sm text-center">
              [ Meaning: The Goal of Ayurveda is to maintain the health of a healthy person and to cure the disease of
              a diseased person. ]
            </p>
          </div>

          {/* Image Card - Precise Diagnosis */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src={feature1}
              alt="Precise Diagnosis"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-green-800 font-bold mb-2">Precise Diagnosis</h3>
              <p className="text-gray-600">
                Ayurveda's core principles revolve around Vata, Pitta, and Kapha doshas, guiding you with precise
                diagnosis and treatment.
              </p>
            </div>
          </div>

          {/* Zero Side-effects */}
          <div className="bg-white shadow-lg rounded-lg p-6 border-t-4 border-[#4CAF50]">
            <h3 className="text-green-700 font-bold text-lg mb-2">Zero side-effects</h3>
            <p className="text-gray-600">
              Ayurvedic treatments are devoid of chemicals and are based completely on natural herbs.
            </p>
          </div>

          {/* Image Card - Herbal Products */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src={feature2} 
              alt="Herbal Products"
              className="w-full h-48 object-cover"
            />
          </div>

          {/* Individual Treatment */}
          <div className="bg-white shadow-lg rounded-lg p-6 border-t-4 border-[#4CAF50]">
            <h3 className="text-green-700 font-bold text-lg mb-2">Individual Treatment</h3>
            <p className="text-gray-600">
              All treatments are personalized based on a person's unique constitution and health concerns.
            </p>
          </div>

          {/* Image Card - Relaxation */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src={feature3} 
              alt="Relaxation"
              className="w-full h-48 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AyurvedicFeatures;
