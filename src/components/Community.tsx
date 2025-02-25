import React from 'react';
import { motion } from 'framer-motion';
import { School, Users, CheckCircle2 } from 'lucide-react';
import Workshops from "../../utils/images/workshops.JPG"
const schoolWorkshops = [
  "Women's health & child nutrition sessions at leading schools – DPS, Mothers Pride, Salwan Public School, Kidzee",
  "University lectures on nutrition at Jain University, Bangalore",
];

const Community = () => {
  return (
    <section className="py-16 px-4 md:px-6 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Community Initiatives</h2>
          <p className="text-xl text-gray-600">Empowering Communities Through Nutrition Awareness</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white p-8 rounded-2xl shadow-lg"
          >
            <img src={Workshops} alt="Community Initiatives" className="w-full h-full object-cover rounded-xl mb-2" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            {/* Workshops & Talks */}
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center gap-4 mb-4">
                <School className="w-8 h-8 text-blue-600" />
                <h3 className="text-xl font-semibold">Workshops & Talks</h3>
              </div>
              <ul className="space-y-3">
                {schoolWorkshops.map((workshop, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">{workshop}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Diet Confab & Pink Confab */}
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center gap-4 mb-4">
                <Users className="w-8 h-8 text-blue-600" />
                <h3 className="text-xl font-semibold">Founder, Diet Confab & Pink Confab</h3>
              </div>
              <p className="text-gray-600">
                A 1000+ member strong women's wellness community that promotes holistic well-being and preventive health.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Community;