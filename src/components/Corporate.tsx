import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Rocket, Check } from 'lucide-react';
import startup from '../../utils/images/startup.jpg'

import corporate from '../../utils/images/corporate.png'

const corporateClients = [
  "DSM – Employee nutrition programs, corporate audits & dietary plans",
  "Dr. Lal Path Labs – Designed Diabetes Management Program, webinars & patient counseling",
  "Serensa Health – Nutrition planning for long-term post-surgical rehabilitation",
  "Terumo India, NIIT, EVOK, Bhartiya International – Talks & customized nutrition plans",
];

const startupClients = [
  "Blufit (Japan) – Head Dietitian for Keto meal planning & program implementation",
  "The Fine Fettle – Custom wellness and meal planning solutions",
  "Blue Broccoli & Olives – Corporate healthy menu planning",
];

const Corporate = () => {
  return (
    <section className="py-16 px-4 md:px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >

        </motion.div>

        {/* Startup Section */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-lg"
          >
            <div className="flex items-center gap-4 mb-6">
              <Rocket className="w-8 h-8 text-blue-600" />
              <h3 className="text-2xl font-semibold">Start-up Collaborations</h3>
            </div>
            <p className="text-gray-600 mb-6">
              I partner with health-focused start-ups to design customized nutrition programs, meal plans, and wellness strategies. From keto meal planning to healthy corporate menus, my expertise helps start-ups bring evidence-based nutrition solutions to their customers.
            </p>
            <ul className="space-y-4">
              {startupClients.map((client, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <Check className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  <span className="text-gray-700">{client}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <img
              src={corporate}
              alt="Startup Collaboration"
              className="w-full h-[480px] object-cover rounded-2xl shadow-lg"
            />
          </motion.div>
        </div>

        {/* Corporate Section */}
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <img
              src={startup}
              alt="Corporate Wellness"
              className="w-full h-full object-cover rounded-2xl shadow-lg"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-lg"
          >
            <div className="flex items-center gap-4 mb-6">
              <Building2 className="w-8 h-8 text-blue-600" />
              <h3 className="text-2xl font-semibold">Corporate Wellness Partnerships</h3>
            </div>
            <p className="text-gray-600 mb-6">
              I work with corporates to enhance employee well-being through nutritional counseling, lifestyle coaching, and health workshops. My programs focus on preventing lifestyle diseases, boosting energy levels, and promoting long-term health, leading to a more productive workforce.
            </p>
            <ul className="space-y-4">
              {corporateClients.map((client, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <Check className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  <span className="text-gray-700">{client}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Corporate;