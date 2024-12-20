// src/AyurvedicApproach.jsx
import React from "react";
import iphone from "../assets/iphone.png";
import playstore from "../assets/playstore.png";
import iphone13 from "../assets/iPhone 13.png";

const AyurvedicApproach = () => {
  return (
    <section className="bg-[#FFF7E2] py-12 relative">
      <div className="absolute w-[257.34px] h-[258px] top-[70px] right-[490px] bg-[#3A643B] opacity-10 rounded-full"></div>
      <div className="absolute w-[257.34px] h-[258px] top-[250px] right-[285px] bg-[#3A643B] opacity-10 rounded-full"></div>
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2">
          <h2 className="text-[52px] text-[#3A643B] font-medium mb-4">Amrutam Home App</h2>
          <p className="text-gray-600 mb-6">
            The Amrutam Home App is your one-stop app for all things Ayurveda!
            Apart from mimicking the <br /> significant characteristics of our website, this app offers <br /> a wide range of additional features.
          </p>
          <p className="text-3xl text-[#000000] font-serif mb-6">
            Get A Diet & Lifestyle Consultation With <br /> Ayurvedic Experts Across
            The Globe
          </p>
          <p className="text-[40px] font-medium mb-6">Get The App Now</p>
          <div className="flex space-x-4">
            <a
              href="#"
              className="text-white py-2 px-4 rounded-md flex items-center space-x-2 hover:bg-gray-800"
            >
              <img src={iphone} alt="Google Play" className="w-60 h-25" />
            </a>
            <a
              href="#"
              className="text-white py-1 px-2 rounded-md flex items-center space-x-2 hover:bg-gray-800"
            >
              <img src={playstore} alt="App Store" className="w-60 h-25 border-none" />
            </a>
          </div>
        </div>
        <div className="lg:w-1/2 mt-8 lg:mt-0 w-[734px] h-[565px]">
          <img src={iphone13} alt="App Mockup" className="mx-auto w-3/4" />
        </div>
      </div>
    </section>
  );
};

export default AyurvedicApproach;
