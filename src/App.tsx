import * as React from "react";
import Hero from "./components/Hero";
import MethodExplanation from "./components/MethodExplanation";
import Benefits from "./components/Benefits";
import Testimonials from "./components/Testimonials";
import Bonuses from "./components/Bonuses";
import SpecialOffer from "./components/SpecialOffer";
import SummaryFAQ from "./components/SummaryFAQ";
import AuthorAbout from "./components/AuthorAbout";
import Footer from "./components/Footer";

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
      <section id="benefits" className="w-full py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <Benefits />
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="w-full py-16 px-4 bg-gradient-to-br from-[#f5f7fa] to-[#e0f2fe]">
        <div className="max-w-5xl mx-auto">
          <Testimonials />
        </div>
      </section>

      {/* Bonuses */}
      <section id="bonuses" className="w-full py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <Bonuses />
        </div>
      </section>

      {/* Special Offer */}
      <section id="special-offer" className="w-full">
        <SpecialOffer />
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
