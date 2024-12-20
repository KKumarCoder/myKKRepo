import twitter from "../assets/twitter.png";
import linkdin from "../assets/Vectorlinkdin.png";
import youtube from "../assets/youtube.png";
import facebook from "../assets/facebook.png";
import instagram from "../assets/instagram.png";
import printer from "../assets/printer.png";

const Footer = () => {
  const socialMedia = [
    { src: twitter, alt: "Twitter", link: "#" },
    { src: linkdin, alt: "LinkedIn", link: "#" },
    { src: youtube, alt: "YouTube", link: "#" },
    { src: facebook, alt: "Facebook", link: "#" },
    { src: instagram, alt: "Instagram", link: "#" },
    { src: printer, alt: "Printer", link: "#" },
  ];

  return (
    <footer className="bg-[#3A643B2E] w-full py-16">
      <div className="flex flex-col md:flex-row md:justify-between w-full max-w-6xl mx-auto px-4">
        {/* Information Section */}
        <div className="hidden md:flex flex-col space-y-4 md:space-y-2">
          <h1 className="text-3xl font-semibold text-[#3A643B]">Information</h1>
          <nav className="flex flex-col font-thin text-[24px] text-[#303030] space-y-2">
            {[
              "About Us",
              "Terms and Conditions",
              "Privacy Policy",
              "Privacy Policy for Mobile Apps",
              "Shipping and Returns Policy",
              "International Delivery",
              "For Businesses, Hotels and Resorts",
            ].map((item, index) => (
              <a
                key={index}
                href="#"
                className="hover:underline text-[#3A643B] focus:outline-none focus:ring-2 focus:ring-[#3A643B] focus:ring-offset-2"
                aria-label={item}
              >
                {item}
              </a>
            ))}
          </nav>
        </div>

        {/* For smaller screens, stack sections vertically */}
        <div className="md:hidden flex flex-col space-y-8">
          {/* Get in Touch Section */}
          <div className="flex flex-col space-y-4 md:space-y-2">
            <h1 className="text-3xl font-semibold text-[#3A643B]">
              Get in touch
            </h1>
            <nav className="flex flex-col text-[24px] font-thin text-[#303030] space-y-2">
              <a
                href="mailto:support@amrutam.co.in"
                className="hover:underline text-[#3A643B] focus:outline-none focus:ring-2 focus:ring-[#3A643B] focus:ring-offset-2"
              >
                support@amrutam.co.in
              </a>
              <a
                href="#"
                className="hover:underline text-[#3A643B] focus:outline-none focus:ring-2 focus:ring-[#3A643B] focus:ring-offset-2"
              >
                Amrutam Pharmaceuticals Pvt Ltd., <br /> Chitragupt Ganj, Nai
                Sadak, Lashkar,
                <br /> Gwalior - 474001
              </a>
              <a
                href="tel:+919713171999"
                className="hover:underline text-[#3A643B] focus:outline-none focus:ring-2 focus:ring-[#3A643B] focus:ring-offset-2"
              >
                +91 9713171999
              </a>
            </nav>

            {/* Social Media Icons */}
            <div className="flex space-x-4">
              {socialMedia.map((icon, index) => (
                <a
                  key={index}
                  href={icon.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={icon.alt}
                  className="flex w-16 h-16 bg-lime-600 rounded-full p-4 justify-center items-center hover:bg-lime-500 transition duration-300 focus:outline-none focus:ring-2 focus:ring-[#3A643B] focus:ring-offset-2"
                >
                  <img
                    src={icon.src}
                    alt={icon.alt}
                    className="w-10 h-10 object-contain filter hover:brightness-125 hover:contrast-125"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Information Section */}
          <div className="flex flex-col space-y-4 md:space-y-2">
            <h1 className="text-3xl font-semibold text-[#3A643B]">
              Information
            </h1>
            <nav className="flex flex-col font-thin text-[24px] text-[#303030] space-y-2">
              {[
                "About Us",
                "Terms and Conditions",
                "Privacy Policy",
                "Privacy Policy for Mobile Apps",
                "Shipping and Returns Policy",
                "International Delivery",
                "For Businesses, Hotels and Resorts",
              ].map((item, index) => (
                <a
                  key={index}
                  href="#"
                  className="hover:underline text-[#3A643B] focus:outline-none focus:ring-2 focus:ring-[#3A643B] focus:ring-offset-2"
                  aria-label={item}
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>

          {/* Newsletter Section */}
          <div className="flex flex-col space-y-4 md:space-y-2">
            <div className="flex flex-col space-y-4 md:space-y-2 p-6" dir="ltr">
              <h1 className="md:text-2xl font-semibold text-[#3A643B]">
                Subscribe to our Newsletter and join Amrutam Family today!
              </h1>
              <div className="flex flex-row space-x-4 md:space-x-2 justify-center items-center">
                <input
                  className="border-1 border-gray-500 text-center rounded-s-full w-[200px] h-20 p-4"
                  type="email"
                  placeholder="Enter your email"
                />
                <button className=" bg-[#070807] hover:bg-red-600 text-white rounded-e-full border-2 text-xl font-serif border-gray-500 w-[150px] h-20">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
