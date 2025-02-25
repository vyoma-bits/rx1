import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const services = [
  {
    title: "Weight Loss & Obesity Management",
    description: "Achieve sustainable weight loss without crash diets or harmful supplements. My personalized plans focus on balanced nutrition, portion control, and lifestyle modifications to help you shed excess weight naturally and permanently.",
  },
  {
    title: "Diabetes & Hypertension Reversal",
    description: "Hundreds of clients have successfully controlled and even reversed their diabetes and BP through my custom meal plans.",
  },
  {
    title: "PCOD & Women's Health",
    description: "Holistic nutrition programs to balance hormones, improve fertility, and regulate cycles naturally.",
  },
  {
    title: "Sustainable Weight Management",
    description: "No crash diets – just long-term solutions for healthy weight loss or gain.",
  },
  {
    title: "Therapeutic Diets for Medical Conditions",
    description: "Tailored meal plans for heart health, kidney health, post-surgical recovery, thyroid management, and digestive disorders.",
  },
  {
    title: "24x7 Diet Support",
    description: "Your dietitian is always just a message away for meal-by-meal guidance.",
  },
];

const DetailedServices = () => {
  return (
    <section className="py-16 px-4 md:px-6 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Personalized Diet Plans for a Healthier You</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <Check className="w-5 h-5 text-blue-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DetailedServices;