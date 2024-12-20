import bg1 from "../assets/backgroung2.png";
import bg2 from "../assets/backgroundimage1.png";

const Hero = () => {
  return (
    <>
    <section
      className="relative h-[60vh] flex w-full items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `url(${bg1})`,
        backgroundSize : "contain"
      }}
    >
      {/* Desktop Background */}
      <div
        className="absolute inset-0 hidden md:block"
        style={{
          backgroundImage: `url(${bg2})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      {/* Dark Overlay */}
      <div   style={{
          background:
            "linear-gradient(90deg, rgb(31,20,20) 0%, hsl(0,22%,10%) 50%, rgba(255,0,0,0.0) 100%)",
        }}
        className="absolute inset-0 w-2/3 "
      >
        <div className="relative px-6 py-8 md:p-12 max-w-3xl md:ml-24 flex flex-col justify-center items-start text-start text-gray-200">
          <h1 className="text-sm md:text-xl font-thin mb-4">
            Namaste, Welcome to Amrutam{" "}
          </h1>
          <h2 className="text-xl md:text-4xl font-serif leading-relaxed mb-4">
            Step into Holistic Healing with{" "}
            <span className="underline decoration-white hover:decoration-blue-400">
              Ayurveda
            </span>
            <br />
            Book Consultation with Certified Experts.
          </h2>
          <p className="text-xs md:text-lg text-gray-400 mb-4">
            Dive into the world of Ayurveda and experience personalized health
            solutions and holistic guidance from trusted Ayurvedic doctors —
            anytime, anywhere.
          </p>
          <button className="bg-[#3A643B] hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-md mt-4">
            Book an Appointment
          </button>
        </div>
      </div>
      
     
      
    </section>
    
    </>
    
    
  );
};

export default Hero;
