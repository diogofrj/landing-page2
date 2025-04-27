import React from "react";

function App() {
  return (
    <div className="w-full min-h-screen bg-[#f9f9f9] flex flex-col items-center font-sans">
      {/* Hero Section */}
      <section id="hero" className="w-full flex flex-col items-center bg-gradient-to-tr from-[#27385f] to-[#192447] text-white py-10 px-2">
        {/* Notice/alert */}
        {/* Headline & Subheadline */}
        {/* Program Image(s) */}
        {/* Price, Guarantee, CTA */}
      </section>
      {/* Method Explanation */}
      <section id="method" className="w-full max-w-2xl bg-white shadow py-8 px-4 -mt-6 mb-6 rounded-lg z-10">
        {/* What is the method, and for whom */}
      </section>
      {/* Benefits/What you receive */}
      <section id="benefits" className="w-full max-w-2xl flex flex-col items-center mb-6">
        {/* Flex boxes or cards for Mobilidade, Estabilidade, Fortalecimento */}
      </section>
      {/* Testimonials */}
      <section id="testimonials" className="w-full max-w-2xl mb-6 flex flex-col items-center">
        {/* Testimonial/avatars grid or carousel */}
      </section>
      {/* Bonuses */}
      <section id="bonuses" className="w-full max-w-2xl space-y-6 mb-6">
        {/* Cards for each bonus */}
      </section>
      {/* Special Offer Section */}
      <section id="special-offer" className="w-full bg-black text-white py-10 mb-6 flex flex-col items-center">
        {/* Checklist, Price, CTA, Urgency/badge */}
      </section>
      {/* Summary/FAQ/Objections Section */}
      <section id="faq" className="w-full max-w-2xl bg-white shadow py-8 px-4 mb-6 rounded-lg flex flex-col items-center">
        {/* Text for summary, objections, payment assurance */}
      </section>
      {/* Author/About */}
      <section id="about" className="w-full max-w-2xl py-8 px-4 mb-6 flex flex-col items-center bg-[#ededed] rounded-lg">
        {/* Author image & description */}
      </section>
      {/* Footer */}
      <footer className="w-full bg-black text-white text-xs py-4 flex flex-col items-center">
        {/* Policy links etc. */}
      </footer>
    </div>
  );
}

export default App;
