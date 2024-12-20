const OurAyurvedicApproach = () => {
    // Step Data for Dynamic Rendering
    const steps = [
      {
        id: 1,
        title: "Make Appointment",
        description:
          "You must make an appointment in advance, to choose the service and date.",
      },
      {
        id: 2,
        title: "Consultations",
        description:
          "The next stage involves a thorough consultation with an Ayurveda practitioner.",
      },
      {
        id: 3,
        title: "Treatment Planning",
        description:
          "The Ayurvedic practitioner creates a personalized treatment plan for you.",
      },
      {
        id: 4,
        title: "Maintenance",
        description:
          "These visits allow for assessment of progress, adjustments to the treatment.",
      },
    ];
  
    return (
      <section className="py-12 bg-white">
        {/* Title Section */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-extrabold text-green-700">
            Our Ayurvedic Approach
          </h2>
          <p className="text-gray-600 mt-2 max-w-3xl mx-auto px-4">
            At Amrutam we follow a unique and personalized approach to healing.
            Our expert practitioners begin each treatment process by conducting a
            thorough analysis of the patient’s body type, medical history, and
            current health conditions.
          </p>
        </div>
  
        {/* Steps Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
          {steps.map((step) => (
            <div
              key={step.id}
              className="relative bg-yellow-50 p-8 min-h-[280px] w-[90%] max-w-sm mx-auto flex flex-col justify-center text-center rounded-3xl shadow-lg hover:scale-105 transform transition duration-300"
              style={{
                boxShadow:
                  "0px -8px 15px rgba(107, 114, 128, 0.3), 0px 4px 10px rgba(0, 0, 0, 0.2)",
              }}
            >
              {/* Circle Icon */}
              <div className="w-16 h-16 mx-auto bg-green-700 text-white flex items-center justify-center rounded-full text-lg font-bold">
                {step.id}
              </div>
  
              {/* Step Title */}
              <h3 className="text-xl font-bold text-green-700 mt-6">
                {step.title}
              </h3>
  
              {/* Step Description */}
              <p className="text-gray-600 mt-4">{step.description}</p>
  
              {/* 3D Corner Effect */}
              <div
                className="absolute top-0 left-0 w-full h-2 bg-gray-500 rounded-t-3xl"
                style={{
                  boxShadow: "0px -8px 10px rgba(107, 114, 128, 0.5)",
                }}
              ></div>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default OurAyurvedicApproach;
  