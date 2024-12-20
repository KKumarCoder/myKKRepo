import React, { useState } from 'react';
import expertstartImg from '../assets/expertstart.png'; // Import image

const AyurvedaExperts = () => {
  const experts = [
    {
      name: 'Dr. Vaishali Sharma',
      title: 'Ayurveda Practitioner (BAMS, MD)',
      experience: '25 years of experience',
      specialty: 'Skin Specialist',
      rating: 4.5,
      image: expertstartImg, // Correct the image reference
    },
    {
      name: 'Dr. Rajesh Kumar',
      title: 'Ayurveda Practitioner (BAMS, MD)',
      experience: '20 years of experience',
      specialty: 'Digestive Health',
      rating: 4.8,
      image: expertstartImg, // Correct the image reference
    },
    {
      name: 'Dr. Aarti Sharma',
      title: 'Ayurveda Practitioner (BAMS, MD)',
      experience: '30 years of experience',
      specialty: 'Women\'s Health',
      rating: 4.7,
      image: expertstartImg, // Correct the image reference
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % experts.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? experts.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="bg-white py-8 px-4 md:px-8">
      <h2 className="text-center text-2xl md:text-4xl font-bold text-green-800 mb-6">
        Meet Our Ayurveda Experts
      </h2>

      <div className="relative flex items-center justify-center">
        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          className="absolute left-0 bg-gray-100 rounded-full p-2 hover:bg-gray-300 transition"
        >
          &#8592;
        </button>

        {/* Expert Cards */}
        <div className="flex overflow-hidden w-full max-w-4xl mx-auto">
          {experts.map((expert, index) => (
            <div
              key={index}
              className={`flex-shrink-0 w-full md:w-1/3 px-4 transition-transform duration-500 ${
                index === currentIndex ? 'translate-x-0' : '-translate-x-full'
              }`}
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              <div className="bg-amber-50 shadow-lg rounded-lg overflow-hidden text-center">
                <img
                  src={expert.image}
                  alt={expert.name}
                  className="w-32 h-32 mx-auto rounded-full mt-4"
                />
                <div className="p-4">
                  <h3 className="text-lg font-bold text-gray-700">{expert.name}</h3>
                  <p className="text-gray-500">{expert.title}</p>
                  <div className="flex items-center justify-center mt-2">
                    <span className="text-yellow-500 font-bold mr-1">{expert.rating}</span>
                    <span className="text-yellow-400">★</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-2">
                    <span className="font-bold text-xl">📝</span>
                    {expert.experience}
                  </p>
                  <div className="mt-2">
                    <span className="inline-block bg-green-100 text-green-700 text-xs px-3 py-1 rounded-full">
                      {expert.specialty}
                    </span>
                  </div>
                  <button className="mt-4 bg-green-700 text-white py-2 px-4 rounded-full hover:bg-green-600 transition">
                    Book a session
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          className="absolute right-0 bg-gray-100 rounded-full p-2 hover:bg-gray-300 transition"
        >
          &#8594;
        </button>
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center mt-4 space-x-2">
        {experts.map((_, idx) => (
          <span
            key={idx}
            className={`w-3 h-3 rounded-full ${
              idx === currentIndex ? 'bg-green-600' : 'bg-gray-300'
            }`}
          ></span>
        ))}
      </div>

      {/* Find More Experts */}
      <div className="flex justify-center mt-6">
        <button className="border-2 border-green-600 text-green-700 py-2 px-4 rounded-full hover:bg-green-600 hover:text-white transition">
          Find more experts →
        </button>
      </div>
    </div>
  );
};

export default AyurvedaExperts;
