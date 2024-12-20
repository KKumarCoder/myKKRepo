import React from "react";
import speech from "../assets/speech-bubble (2) 1.svg";
import shield from "../assets/shield 1.png";
import doctor from '../assets/doctor (1) 1.png';
import prescription from '../assets/prescription (1) 1.svg';

export default function Experties() {
  const data = [
    {
      icon: speech,
      title: "Convenient Online & <br /> In-Clinic Consultations",
    },
    {
      icon: shield,
      title: "Secure & <br /> Confidential",
    },
    {
      icon: doctor,
      title: "Certified Doctors & <br /> Experts",
    },
    {
      icon: prescription,
      title: "Personalized <br /> Treatment Plans",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-8 bg-[#FFF7E2] justify-center items-center">
      {/* Reusable Message Component */}
      {data.map((item, index) => (
        <div
          id={`message-${index}`}
          key={index}
          className="flex items-center space-x-4"
        >
          {/* Icon */}
          <div
            id="icon"
            className="w-16 h-16 border-2 border-[#3A643B] rounded-full flex items-center justify-center"
          >
            <img
              className="w-10 h-10 bg-white p-2 rounded-full"
              src={item.icon}
              alt={`Icon ${index}`}
            />
          </div>
          {/* Title */}
          <div
            id="title"
            className="flex flex-col items-start justify-center"
          >
            <p
              className="text-[14px] sm:text-[16px] md:text-[18px] leading-snug text-[#3A643B] font-serif"
              dangerouslySetInnerHTML={{ __html: item.title }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
