import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  { name: "Ayesha K.", text: "Lahore ki sab se behtreen Nan Khatai! Badam wali bilkul lajawab hai. Meri family har week order karti hai! 💛", rating: 5 },
  { name: "Ahmed R.", text: "Khalifa Bakers kabhi disappoint nahi karte. Fresh aur bohat tasty, aur WhatsApp se seedha ghar tak delivery. Bohat easy!", rating: 5 },
  { name: "Fatima S.", text: "Bakar Khani bilkul crispy aur perfect hai! Aur unka Cake Rusk chai ke sath zabardast lagta hai. Must try!", rating: 5 },
  { name: "Hassan M.", text: "Bohat fresh Cake Rusk aur delicious bakery items. Mochi Gate se order karna ab bohat asaan ho gaya hai!", rating: 5 },

  { name: "Ali Z.", text: "Nan Khatai ka taste bilkul purana Lahore yaad dila deta hai. Bohat zabardast!", rating: 5 },
  { name: "Sara T.", text: "Cake Rusk chai ke sath perfect hai. Ghar walon ko bhi bohat pasand aya.", rating: 5 },
  { name: "Usman A.", text: "Delivery fast thi aur bakery items bilkul fresh thay. Definitely dubara order karunga.", rating: 5 },
  { name: "Hira M.", text: "Badam Nan Khatai meri favorite hai. Taste aur quality dono amazing hain.", rating: 5 },
  { name: "Bilal H.", text: "Khalifa Bakers ki Bakar Khani sach mein crispy aur tasty hai. Highly recommended!", rating: 5 },
  { name: "Zainab F.", text: "Har dafa same fresh taste milta hai. Quality kabhi change nahi hoti.", rating: 5 },
  { name: "Omar S.", text: "Mochi Gate ki classic bakery taste yahan mil jata hai. Bohat acha experience tha.", rating: 5 },
  { name: "Maryam A.", text: "Nan Khatai itni soft aur tasty thi ke sab ne enjoy ki. Must try!", rating: 5 },
  { name: "Hamza Q.", text: "WhatsApp se order karna bohat easy hai aur delivery bhi time par milti hai.", rating: 5 },
  { name: "Sana K.", text: "Cake Rusk bilkul perfect bake hua tha. Chai ke sath best combination.", rating: 5 },
  { name: "Adnan R.", text: "Purani Lahore wali bakery ka asli taste. Bohat hi lajawab!", rating: 5 },
  { name: "Iqra N.", text: "Fresh bakery items aur bohat acha customer service. Mujhe bohat pasand aya.", rating: 5 },
  { name: "Danish P.", text: "Family gathering ke liye order kiya tha, sab ko Nan Khatai bohat pasand ayi.", rating: 5 },
  { name: "Rabia S.", text: "Quality aur taste dono outstanding hain. Definitely recommend karungi.", rating: 5 },
  { name: "Shahzaib M.", text: "Bakar Khani aur Cake Rusk dono zabardast thay. Lahore mein best bakery!", rating: 5 },
  { name: "Nadia I.", text: "Simple, fresh aur bohat tasty bakery items. Har bite mein maza aya.", rating: 5 },
];

const TestimonialCarousel = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrent((c) => (c + 1) % testimonials.length), 5000);
    return () => clearInterval(timer);
  }, []);

  const maxDots = 10;

  const getVisibleDots = () => {
    if (testimonials.length <= maxDots) {
      return testimonials.map((_, i) => i);
    }

    let start = Math.max(0, current - Math.floor(maxDots / 2));
    let end = start + maxDots;

    if (end > testimonials.length) {
      end = testimonials.length;
      start = end - maxDots;
    }

    return Array.from({ length: end - start }, (_, i) => start + i);
  };

  return (
    <div className="relative max-w-2xl mx-auto">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.4 }}
          className="bg-card rounded-2xl p-8 shadow-bakery text-center"
        >
          <div className="flex justify-center gap-1 mb-4">
            {Array.from({ length: testimonials[current].rating }).map((_, i) => (
              <Star key={i} size={18} className="fill-golden text-golden" />
            ))}
          </div>
          <p className="text-foreground text-lg italic leading-relaxed">"{testimonials[current].text}"</p>
          <p className="mt-4 font-display font-semibold text-primary">{testimonials[current].name}</p>
        </motion.div>
      </AnimatePresence>
      <div className="flex justify-center gap-4 mt-6">
        <button
          onClick={() => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length)}
          className="p-2 rounded-full bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
          aria-label="Previous testimonial"
        >
          <ChevronLeft size={20} />
        </button>
        <div className="flex items-center gap-2">
          {getVisibleDots().map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2.5 h-2.5 rounded-full transition-colors ${i === current ? "bg-primary" : "bg-border"}`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
        <button
          onClick={() => setCurrent((c) => (c + 1) % testimonials.length)}
          className="p-2 rounded-full bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
          aria-label="Next testimonial"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
