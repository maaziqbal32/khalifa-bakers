import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { useState } from "react";
import { ChevronDown } from "lucide-react"; // Add this import at the top of your file

const OrderPage = () => {
  const [form, setForm] = useState({
    name: "",
    order: "",
    quantity: "1",
    delivery: "delivery",
    special: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `🧁 *New Order - Khalifa Bakers*\n\n👤 *Name:* ${form.name}\n📦 *Order:* ${form.order}\n🔢 *Quantity:* ${form.quantity}\n🚗 *Type:* ${form.delivery === "delivery" ? "Delivery" : "Pickup"}\n📝 *Special Requests:* ${form.special || "None"}\n\nPlease confirm my order. Thank you! 💛`;
    window.open(
      `https://wa.me/923127079861?text=${encodeURIComponent(text)}`,
      "_blank",
    );
  };

  return (
    <>
      <div className="min-h-screen pt-24 pb-16">
        <div className="bakery-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-8 sm:mb-12"
          >
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              Quick Order
            </span>
            <div className="flex items-center justify-center gap-3 sm:mt-2">
              <h1 className="font-display text-2xl md:text-5xl font-bold text-foreground mt-2">
                Order via WhatsApp
              </h1>
              <img src="/whatsapp.png" alt="WhatsApp" className="w-10 sm:w-14 pt-2 sm:pt-4" />
            </div>
            <p className="text-muted-foreground sm:mt-3 max-w-md mx-auto">
              Fill in your details and we'll confirm your order instantly!
            </p>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-lg mx-auto bg-card rounded-2xl p-8 shadow-bakery space-y-5"
          >
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">
                Your Name *
              </label>
              <input
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full bg-secondary text-secondary-foreground rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary placeholder:text-muted-foreground"
                placeholder="Enter your name"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">
                What would you like to order? *
              </label>
              <textarea
                value={form.order}
                onChange={(e) => setForm({ ...form, order: e.target.value })}
                rows={3}
                className="w-full bg-secondary text-secondary-foreground rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary resize-none placeholder:text-muted-foreground"
                placeholder="e.g., 1 Full Box Almond Naan Khatai, 2 Cake Rusk"
                required
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">
                  Quantity
                </label>
                <input
                  type="number"
                  min="1"
                  value={form.quantity}
                  onChange={(e) =>
                    setForm({ ...form, quantity: e.target.value })
                  }
                  className="w-full bg-secondary text-secondary-foreground rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary placeholder:text-muted-foreground"
                />
              </div>

              {/* ... rest of your form ... */}

              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">
                  Delivery / Pickup
                </label>
                <div className="relative">
                  <select
                    value={form.delivery}
                    onChange={(e) =>
                      setForm({ ...form, delivery: e.target.value })
                    }
                    className="w-full bg-secondary text-secondary-foreground rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary appearance-none pr-10"
                  >
                    <option value="delivery">🚗 Delivery</option>
                    <option value="pickup">🏪 Pickup</option>
                  </select>
                  <ChevronDown
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground pointer-events-none"
                    size={18}
                  />
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">
                Special Requests
              </label>
              <textarea
                value={form.special}
                onChange={(e) => setForm({ ...form, special: e.target.value })}
                rows={2}
                className="w-full bg-secondary text-secondary-foreground rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary resize-none placeholder:text-muted-foreground"
                placeholder="Any special instructions or notes"
              />
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-whatsapp text-whatsapp-foreground py-3.5 rounded-lg font-semibold flex items-center justify-center gap-2 sm:text-lg"
            >
              <Send size={20} /> Confirm Order on WhatsApp
            </motion.button>

            <p className="text-center text-muted-foreground text-xs sm:text-sm">
              Your order will be sent directly to our WhatsApp. We'll confirm
              within minutes!
            </p>
          </motion.form>
        </div>
      </div>
    </>
  );
};

export default OrderPage;
