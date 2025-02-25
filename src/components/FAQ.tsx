
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "What are your clinic hours?",
    answer: "Our clinic is open Monday through Friday from 8:00 AM to 6:00 PM, and Saturdays from 9:00 AM to 2:00 PM.",
  },
  {
    question: "Do you accept health insurance?",
    answer: "Yes, we accept most major health insurance plans. Please contact our office to verify your specific coverage.",
  },
  {
    question: "How can I make an appointment?",
    answer: "You can schedule an appointment by calling our office, using our online booking system, or visiting us in person.",
  },
];

const FAQ = () => {
  return (
    <section className="py-16 px-4 md:px-6 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Frequently Ask Question
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="border border-blue-100 rounded-lg overflow-hidden"
            >
              <button className="w-full flex items-center justify-between p-4 text-left hover:bg-blue-50 transition-colors">
                <span className="font-medium">{faq.question}</span>
                <ChevronDown className="w-5 h-5 text-blue-600" />
              </button>
              <div className="px-4 pb-4 text-gray-600">
                {faq.answer}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;