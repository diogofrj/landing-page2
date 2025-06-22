import React from "react";
import Hero from "./components/Hero";
import MethodExplanation from "./components/MethodExplanation";
import Benefits from "./components/Benefits";
import Testimonials from "./components/Testimonials";
import Bonuses from "./components/Bonuses";
import SpecialOffer from "./components/SpecialOffer";
import ProfessionalIntro from "./components/ProfessionalIntro";
import SummaryFAQ from "./components/SummaryFAQ";
import AuthorAbout from "./components/AuthorAbout";
import Footer from "./components/Footer";
import VideoSection from "./components/VideoSection";
import VideoSection2 from "./components/VideoSection2";
import VideoSection3 from "./components/VideoSection3";

function App() {
  return (
    <div className="w-full min-h-screen bg-[#f5f7fa] flex flex-col items-center font-[Montserrat]">
      {/* Hero Section */}
      <section id="hero" className="w-full">
        <Hero />
      </section>

      {/* Method Explanation */}
      <section id="method" className="w-full px-4">
        <MethodExplanation />
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="w-full">
        <Benefits />
      </section>

      {/* Video Section */}
      <section id="video" className="w-full">
        <VideoSection />
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="w-full">
        <Testimonials />
      </section>
      {/* Third Video Section */}
      <section id="video3" className="w-full">
        <VideoSection3 />
      </section>
      {/* Bonuses */}
      <section id="bonuses" className="w-full py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <Bonuses />
        </div>
      </section>

      {/* Second Video Section */}
      <section id="video2" className="w-full">
        <VideoSection2 />
      </section>

      {/* Special Offer */}
      <section id="special-offer" className="w-full">
        <SpecialOffer />
      </section>
      
      {/* Professional Introduction */}
      <section id="professional-intro" className="w-full">
        <ProfessionalIntro />
      </section>

      {/* FAQ Section */}
      <section id="faq" className="w-full py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <SummaryFAQ />
        </div>
      </section>

      {/* Author About */}
      <section id="about" className="w-full py-16 px-4 bg-gradient-to-br from-[#f5f7fa] to-[#e0f2fe]">
        <div className="max-w-5xl mx-auto">
          <AuthorAbout />
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
