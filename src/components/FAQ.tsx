
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "What is RxOcean.com, and how can it help me?",
    answer: "RxOcean.com is an online diet and diabetes management platform offering personalized meal plans, expert counseling, and sustainable weight loss solutions. Whether you want to lose weight, manage diabetes, or improve overall health, we provide science-backed guidance to help you achieve your goals.",
  },
  {
    question: "How do I get a customized diet plan?",
    answer: "Simply contact us on RxOcean.com, share your health details, and our expert dietitians will create a tailored meal plan based on your goals, dietary preferences, and medical conditions like PCOS, insulin resistance, or menopause.",
  },
  {
    question: "What is the best diet for weight loss?",
    answer: "A balanced diet rich in fiber, protein, and healthy fats helps with sustainable weight loss. We focus on portion control, metabolism-boosting foods, and practical meal planning rather than extreme calorie restrictions.",
  },
  {
    question: "Can I reverse prediabetes with diet?",
    answer: "Yes! A low-GI, high-fiber diet combined with exercise can significantly improve insulin sensitivity and prevent diabetes progression. Our expert-designed meal plans focus on stabilizing blood sugar naturally.",
  },
  {
    question: "What foods help control insulin resistance?",
    answer: "To manage insulin resistance, eat high-fiber foods, lean proteins, healthy fats, and complex carbs like nuts, seeds, whole grains, and non-starchy vegetables. Our insulin-friendly meal plans are designed to keep blood sugar stable.",
  },
  {
    question: "Can I follow your diet if I have PCOS or thyroid issues?",
    answer: "Yes! We provide PCOS-friendly and thyroid-balancing diet plans that help regulate hormones, manage weight, and reduce inflammation naturally.",
  },
  {
    question: "Do you offer diet plans for menopause?",
    answer: "Yes! Our menopause diet plans focus on managing weight gain, mood swings, and hot flashes with hormone-balancing foods, rich in calcium, omega-3s, and phytoestrogens.",
  },
  {
    question: "Can I eat sweets if I have diabetes?",
    answer: "Yes, but in moderation. We provide diabetes-friendly meal plans that include healthy alternatives to keep your cravings in check while maintaining balanced blood sugar levels.",
  },
  {
    question: "How do I book an online diet consultation?",
    answer: "You can book a virtual diet consultation via RxOcean.com, WhatsApp, or email. Our expert dietitians will guide you with a personalized meal plan and lifestyle modifications based on your health goals.",
  },
  {
    question: "Can I eat out while following your diet?",
    answer: "Absolutely! We provide smart eating-out tips so you can enjoy your favourite restaurants while staying on track with your health and weight loss goals.",
  },
];
``

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