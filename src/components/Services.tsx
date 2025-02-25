import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Clock, Globe } from 'lucide-react';

const services = [
  {
    icon: <Leaf className="w-8 h-8 text-blue-600" />,
    title: "100% Natural Approach",
    description: "No protein powders or weight-loss medicines, only real, nourishing food",
  },
  {
    icon: <Clock className="w-8 h-8 text-blue-600" />,
    title: "24x7 Support",
    description: "Stay connected with me for real-time meal guidance and ongoing motivation",
  },
  {
    icon: <Globe className="w-8 h-8 text-blue-600" />,
    title: "Global Reach",
    description: "Transforming lives across India, Canada, the US, Australia, Nigeria, and Dubai",
  },
];

const Services = () => {
  return (
    <section className="py-16 px-4 md:px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-xl border border-blue-100 hover:shadow-lg transition-shadow bg-gradient-to-br from-white to-blue-50"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;