import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const WhatsAppFab = () => {
  return (
    <>
      {/* Sticky Button Under Navbar (Top Left) */}
      <motion.a
        href="https://wa.me/923001234567?text=Hello%20Khalifa%20Bakers%2C%20I%20would%20like%20to%20place%20an%20order."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed top-20 left-6 z-50 items-center gap-2 px-5 py-2 rounded-full bg-green-500 text-white font-semibold shadow-lg animate-pulse hidden sm:flex"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
      >
        <MessageCircle size={20} />
        Order Now +923001234567
      </motion.a>

      {/* Bottom Right Floating WhatsApp Button */}
      <motion.a
        href="https://wa.me/923001234567?text=Hello%20Khalifa%20Bakers%2C%20I%20would%20like%20to%20place%20an%20order.%0A%0AProduct%3A%0AQuantity%3A%0ADelivery%20Address%3A"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-green-500 flex items-center justify-center text-white shadow-lg animate-pulse"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Order on WhatsApp"
      >
        <MessageCircle size={28} />
      </motion.a>
    </>
  );
};

export default WhatsAppFab;