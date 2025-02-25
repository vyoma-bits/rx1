import React from 'react';
import { motion } from 'framer-motion';

const videos = [
  {
    embedId: "AynSaorXrb8",
    title: "",
    category: "",
    date: "Mar 15, 2024",
  },
  {
    embedId: "bw5KMYhP2fE",
    title: "",
    category: "",
    date: "Mar 14, 2024",
  },
  {
    embedId: "p8d1q04vNSI",
    title: "",
    category: "",
    date: "Mar 13, 2024",
  },
  {
    embedId: "y2Dwyarumd8",
    title: "",
    category: "",
    date: "Mar 12, 2024",
  },
  {
    embedId: "s53zR89ra4o",
    title: "",
    category: "",
    date: "Mar 12, 2024",
  },
  {
    embedId: "D1quRpDlgIA",
    title: "",
    category: "",
    date: "Mar 12, 2024",
  }
];

const News = () => {
  const handleViewAllClick = () => {
    window.location.href = "https://www.youtube.com/@NitiMunjal"; // Replace with your YouTube link
  };

  return (
    <section className="py-16 px-4 md:px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl font-bold">Video Gallery</h2>
          <button
            onClick={handleViewAllClick}
            className="text-blue-600 hover:text-blue-700 font-medium"
          >
            View All →
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {videos.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-xl mb-4">
                <div className="aspect-video">
                  <iframe
                    className="w-full h-full"
                    src={`https://www.youtube.com/embed/${item.embedId}`}
                    title={item.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                </div>
                {/* <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                  {item.category}
                </div> */}
              </div>
              <div className="space-y-2">
                <p className="text-gray-500 text-sm">{item.date}</p>
                {/* <h3 className="font-semibold group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3> */}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;
