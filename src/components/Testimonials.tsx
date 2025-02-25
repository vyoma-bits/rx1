import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Volume2, VolumeX } from 'lucide-react';
import Viren from "../../utils/images/VIREN.jpg";
import testi1 from "../../utils/images/testi_imag1.jpg";
import testi2 from "../../utils/images/testi_2_image.png";
import testi3 from "../../utils/images/testi_image_3.png";
import testi4 from "../../utils/images/testi_image4.png";
import testi5 from "../../utils/images/testi_image5.jpg";
import testi6 from "../../utils/images/testi_image6.jpg";

const transformations = [
  {
    type: "text-image",
    name: "",
    achievement: "",
    media: Viren,
  },
  {
    type: "text-image",
    name: "",
    achievement: "",
    media: testi1,
  },
  {
    type: "text-image",
    name: "",
    achievement: "",
    media: testi2,
  },
  {
    type: "text-image",
    name: "",
    achievement: "",
    media: testi3,
  },
  {
    type: "text-image",
    name: "",
    achievement: "",
    media: testi4,
  },
  {
    type: "text-image",
    name: "",
    achievement: "",
    media: testi5,
  },
  {
    type: "text-image",
    name: "",
    achievement: "",
    media: testi6,
  }
];

const videoTestimonials = [
  {
    id: "video1",
    embedId: "ExSNCjq5yg0", // Replace with your actual YouTube video IDs
  },
  {
    id: "video2",
    embedId: "KjA7wYQhBAg",
  },
  {
    id: "video3",
    embedId: "D7BoGwF1HNA",
  },
  {
    id: "video4",
    embedId: "QP0ahLETyN0",
  },
  {
    id: "video5",
    embedId: "5TN-C50ccyY",
  },
  {
    id: "video6",
    embedId: "xTVJ9wduSUE",
  },
];

const ScrollingRow = ({ items, type }) => {
  const scrollRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isTouched, setIsTouched] = useState(false);
  const intervalRef = useRef(null);

  const startScroll = () => {
    if (intervalRef.current) return;

    intervalRef.current = setInterval(() => {
      if (scrollRef.current) {
        if (scrollRef.current.scrollLeft >= scrollRef.current.scrollWidth - scrollRef.current.clientWidth) {
          scrollRef.current.scrollLeft = 0;
        } else {
          scrollRef.current.scrollLeft += 1;
        }
      }
    }, 30);
  };

  const stopScroll = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  useEffect(() => {
    startScroll();
    return () => stopScroll();
  }, []);

  useEffect(() => {
    if (isHovered || isTouched) {
      stopScroll();
    } else {
      startScroll();
    }
  }, [isHovered, isTouched]);

  if (type === 'video') {
    return (
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto whitespace-nowrap pb-6 mt-8 no-scrollbar"
        style={{ scrollBehavior: 'smooth' }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onTouchStart={() => setIsTouched(true)}
        onTouchEnd={() => setIsTouched(false)}
      >
        {[...items, ...items].map((video, index) => (
          <div key={`${video.id}-${index}`} className="min-w-[300px] md:min-w-[400px] bg-white rounded-2xl shadow-xl overflow-hidden flex-shrink-0">
            <div className="relative aspect-video">
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${video.embedId}`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div
      ref={scrollRef}
      className="flex gap-6 overflow-x-auto whitespace-nowrap pb-6 no-scrollbar"
      style={{ scrollBehavior: 'smooth' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={() => setIsTouched(true)}
      onTouchEnd={() => setIsTouched(false)}
    >
      {[...items, ...items].map((transformation, index) => (
        <div key={index} className="min-w-[300px] md:min-w-[400px] bg-white rounded-2xl shadow-xl overflow-hidden flex-shrink-0">
          <div className="relative">
            <img
              src={transformation.media}
              alt={`${transformation.name}'s transformation`}
              className="w-full h-[300px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <h3 className="text-xl font-semibold">{transformation.name}</h3>
              <p className="mt-2">{transformation.achievement}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const Testimonials = () => {
  return (
    <section className="py-16 px-4 md:px-6 bg-gradient-to-br from-blue-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Success Stories</h2>
          <p className="text-xl text-gray-600">Real Results, Real Transformations</p>
        </motion.div>

        <ScrollingRow items={transformations} type="image" />
        <ScrollingRow items={videoTestimonials} type="video" />
      </div>
    </section>
  );
};

export default Testimonials;