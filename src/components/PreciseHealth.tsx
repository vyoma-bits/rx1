import React from 'react';
import { motion } from 'framer-motion';
import { Tv, Newspaper, Mic } from 'lucide-react';
import media1 from "../../utils/images/media_1.jpg"
import media2 from "../../utils/images/media_2.jpg"

import media3 from "../../utils/images/media_3.jpg"

import media4 from "../../utils/images/media_4.jpg"
import media5 from "../../utils/images/media_5.jpg"

const mediaAppearances = [
  {
    category: "TV & Radio Appearances",
    icon: <Tv className="w-6 h-6" />,
    items: [
      "NDTV, CNBC Awaaz",
      "Radio Indigo (FM 91.9 Bangalore)",
    ],
  },
  {
    category: "Print & Digital Media Features",
    icon: <Newspaper className="w-6 h-6" />,
    items: [
      "Business Standard & other reputed health magazines",
    ],
  },
  {
    category: "Medical Talks & Guest Speaker Invitations",
    icon: <Mic className="w-6 h-6" />,
    items: [
      "Obesity India 2024 – Roles of Micronutrients in Obesity Management",
      "Pregnancy Study Group (PSG) – Medical Nutrition Therapy in Gestational Diabetes",
      "CME, Sri Devaraj URs Medical College – Intermittent Fasting & Type-2 Diabetes",
      "Chief Guest Talks – Women's Day & Food Wastage Awareness",
    ],
  },
];

const MediaPresence = () => {
  return (
    <section className="py-16 px-4 md:px-6 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="relative grid grid-cols-2 gap-4"
        >
          {[
    media1,media2,media3,media4,media5
          ].map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`overflow-hidden rounded-full ${
                index === 4 ? "col-span-2 w-2/3 mx-auto" : ""
              }`}
            >
              <img
                src={image}
                alt="Media Appearance"
                className="w-full h-full object-cover aspect-square"
              />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-4">Media & Events</h2>
          <h3 className="text-xl font-semibold text-blue-600 mb-6">
            Recognized Health Expert Featured on Leading Platforms
          </h3>
          <p className="text-gray-600 mb-8">
            As a recognized Diet & Diabetes Expert, I am regularly invited as a speaker and panelist on TV channels, medical forums, and universities to share insights on nutrition, lifestyle diseases, and diabetes management. I have spoken at leading medical conferences, debates, and talk shows, training doctors and medical students on the latest advancements in diet-based disease management. My expertise has been featured on NDTV, CNBC Awaaz, Business Standard, and reputed health magazines, reinforcing my commitment to public health awareness and education.
          </p>

          <div className="space-y-6">
            {mediaAppearances.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <div className="flex items-center gap-3 text-blue-600 mb-3">
                  {category.icon}
                  <h4 className="font-semibold">{category.category}</h4>
                </div>
                <ul className="space-y-2 pl-9">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-gray-700">✔ {item}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MediaPresence;