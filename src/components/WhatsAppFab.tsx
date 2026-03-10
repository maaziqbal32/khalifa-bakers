import { motion } from "framer-motion";

const WhatsAppFab = () => {
  return (
    <>
      {/* Bottom Right Floating WhatsApp Button */}
      <motion.a
        href="https://wa.me/923287634644?text=Hello%20Khalifa%20Bakers%2C%20I%20would%20like%20to%20place%20an%20order.%0A%0AProduct%3A%0AQuantity%3A%0ADelivery%20Address%3A"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-green-500 flex items-center justify-center text-white shadow-lg will-change-transform"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Order on WhatsApp"
      >
        <img src="/whatsapp.png" alt="WhatsApp" className="w-10 h-10" />
      </motion.a>
    </>
  );
};

export default WhatsAppFab;