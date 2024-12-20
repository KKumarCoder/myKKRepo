import qnik from "../assets/qnik.png"
const RestoreHarmonyBanner = () => {
    return (
      <section
        className="relative h-96 flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `url('/assets/qnik.png')`, // Default for mobile screens
        }}
      >
        {/* Desktop Image via Tailwind Media Query */}
        <div
          className="absolute object-cover inset-0 hidden md:block"
          style={{
            backgroundImage: `url(${qnik})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>
  
        {/* Overlay for Darkening Background */}
        <div className="absolute inset-0 bg-black opacity-40"></div>
  
        {/* Content */}
        <div className="relative text-center text-white px-4">
          <h2 className="text-2xl md:text-4xl font-extrabold mb-6">
            Ready to restore harmony in your mind, body and spirit?
          </h2>
          <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-md">
            Book a consultation
          </button>
        </div>
      </section>
    );
  };
  
  export default RestoreHarmonyBanner;
  
  