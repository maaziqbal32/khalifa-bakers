import { motion } from "framer-motion";
import { Phone, MapPin, Mail } from "lucide-react";
import { useState } from "react";
const ContactPage = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hi Khalifa Bakers! My name is ${form.name}. ${form.message}`;
    window.open(
      `https://wa.me/923287634644?text=${encodeURIComponent(text)}`,
      "_blank",
    );
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="bakery-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-6 sm:mb-12"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Get in Touch
          </span>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-4">
            Contact Us
          </h1>
          <p className="text-muted-foreground mt-3">
            We'd love to hear from you!
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {[
              {
                icon: "/whatsapp.png",
                label: "WhatsApp",
                value: "+92 328 7634644",
                href: "https://wa.me/923287634644",
                color: "bg-whatsapp text-whatsapp-foreground",
              },
              {
                icon: Phone,
                label: "Phone",
                value: "0328 7634644",
                href: "tel:+923287634644",
                color: "bg-primary text-primary-foreground",
              },
              {
                icon: Mail,
                label: "Email",
                value: "khalifabakers.1925.org@gmail.com",
                href: "https://mail.google.com/mail/?view=cm&fs=1&to=khalifabakers.1925.org@gmail.com",
                color: "bg-accent text-accent-foreground",
              },
              {
                icon: MapPin,
                label: "Address",
                value: "Mochi Gate, Lahore",
                href: "#map",
                color: "bg-secondary text-secondary-foreground",
              },
            ].map((item, i) => (
              <motion.a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ x: 5 }}
                className="flex items-center gap-4 bg-card rounded-xl p-4 shadow-bakery hover:shadow-bakery-hover transition-shadow"
              >
                <div className={`p-3 rounded-xl ${item.color}`}>
                  {typeof item.icon === "string" ? (
                    <img src={item.icon} alt={item.label} className="w-6 h-6" />
                  ) : (
                    <item.icon size={20} />
                  )}
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{item.label}</p>
                  <p className="font-medium text-foreground">{item.value}</p>
                </div>
              </motion.a>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-card rounded-2xl p-8 shadow-bakery space-y-4"
          >
            <h3 className="font-display text-xl font-semibold text-foreground mb-2">
              Send us a message
            </h3>
            <input
              type="text"
              placeholder="Your Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full bg-secondary text-secondary-foreground rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary placeholder:text-muted-foreground"
              required
            />
            <input
              type="email"
              placeholder="Your Email (optional)"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full bg-secondary text-secondary-foreground rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary placeholder:text-muted-foreground"
            />
            <textarea
              placeholder="Your Message"
              rows={4}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full bg-secondary text-secondary-foreground rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary resize-none placeholder:text-muted-foreground"
              required
            />
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-whatsapp text-whatsapp-foreground py-3 rounded-lg font-semibold flex items-center justify-center gap-2"
            >
              <img src="/whatsapp.png" alt="WhatsApp" className="w-7 h-7" />{" "}
              Send via WhatsApp
            </motion.button>
          </motion.form>
        </div>

        {/* Google Maps */}
        <motion.div
          id="map"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 rounded-2xl overflow-hidden shadow-bakery"
        >
          <iframe
            title="Khalifa Bakers Location – Mochi Gate Lahore"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3399.8!2d74.316!3d31.584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sMochi+Gate+Lahore!5e0!3m2!1sen!2spk!4v1"
            width="100%"
            height="350"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default ContactPage;
