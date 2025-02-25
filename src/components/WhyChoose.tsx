import React from "react";
import { CheckCircle2 } from "lucide-react";

const benefits = [
  "Hundreds of success stories – Clients have reversed diabetes, high BP, obesity, and PCOD",
  "100% Natural Food-Based Approach – No meal replacements or weight-loss drugs",
  "24x7 Client Support – I'm always connected to solve any dietary concerns instantly",
  "Global Reach – Consultations available across India, US, Canada, Australia, Nigeria & Dubai",
  "Specialized in Disease Management – Personalized diet plans for diabetes, hypertension, metabolic disorders, PCOD, and post-surgical recovery",
];

const WhyChoose = () => {
  return (
    <section className="py-16 px-4 md:px-6 bg-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <div className="relative w-full aspect-w-16 aspect-h-9">
            <iframe
              className="rounded-2xl shadow-xl w-full h-[315px] md:h-[400px]"
              src="https://www.youtube.com/embed/y2Dwyarumd8?autoplay=1&mute=0&rel=0"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        
        <div>
          <h2 className="text-3xl font-bold mb-6">
            Meet Dt. Niti Munjal – A Pioneer in Online Nutrition Counseling
          </h2>
          <p className="text-gray-600 mb-8">
            As a Certified Nutritionist & Diabetes Educator, I have been at the
            forefront of online diet planning since 2009. My goal is to empower
            individuals to take charge of their health through sustainable
            dietary changes.
          </p>
          <h3 className="text-xl font-semibold mb-4">Why Choose My Program?</h3>
          <ul className="space-y-4">
            {benefits.map((benefit, index) => (
              <li
                key={index}
                className="flex items-center gap-3"
              >
                <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <span className="text-gray-700">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;