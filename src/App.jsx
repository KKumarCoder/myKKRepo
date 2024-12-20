import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import AyurvedicFeatures from "./components/AyurvedicFeatures";
import RestoreHarmonyBanner from "./components/RestoreHarmonyBanner";
import OurAyurvedicApproach from "./components/OurAyurvedicApproach";
import CustomerStories from "./components/CustomerStories";
import AyurvedaExperts from "./components/AyurvedaExperts";
import AyurvedicApproach from "./components/AyurvedicApproach";
import ServiceCard from "./components/ServiceCard";
import Experties from "./components/experties";
import AyurvedicTreatment from "./components/AyurvedicTreatment";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Experties />
      <AyurvedicTreatment />
      <ServiceCard />
      <AyurvedicFeatures/>
      <RestoreHarmonyBanner />
      <OurAyurvedicApproach />
      <CustomerStories />
      <AyurvedaExperts />
      <AyurvedicApproach />
      <Footer />
    </>
  );
}

export default App;
