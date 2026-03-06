import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  { name: "Ayesha K.", text: "Best Nan Khatai in Lahore! The almond ones are absolutely divine. My family orders every week! 💛", rating: 5 },
  { name: "Ahmed R.", text: "Khalifa Bakers never disappoints. Fresh, flavorful, and delivered right to my door via WhatsApp ordering. So easy!", rating: 5 },
  { name: "Fatima S.", text: "The Bakar Khani is crispy perfection! And their Cake Rusk is perfect with chai. Highly recommend!", rating: 5 },
  { name: "Hassan M.", text: "Very fresh cake rusk and delicious bakery items. Ordering from Mochi Gate has never been easier!", rating: 5 },
];

const TestimonialCarousel = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrent((c) => (c + 1) % testimonials.length), 5000);
    return () => clearInterval(timer);
  }, []);

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
          {testimonials.map((_, i) => (
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
