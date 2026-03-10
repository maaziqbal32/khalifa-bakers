import { Link } from "react-router-dom";
import { Heart, Phone, MapPin, MessageCircle } from "lucide-react";

const Footer = () => (
  <footer className="bg-warm-brown text-primary-foreground">
    <div className="bakery-container py-12 md:py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="font-display text-xl sm:text-2xl font-bold mb-4">
            Khalifa Bakers
          </h3>
          <p className="text-primary-foreground/70 text-sm sm:text-lg leading-relaxed">
            Authentic taste since 1925 <br />
            Traditional bakery at Mochi Gate, Lahore.
          </p>
        </div>
        <div>
          <h4 className="font-display text-lg sm:text-xl font-semibold mb-4">
            Quick Links
          </h4>
          <div className="flex flex-col gap-2">
            {[
              { to: "/", label: "Home" },
              { to: "/menu", label: "Menu" },
              { to: "/about", label: "About Us" },
              { to: "/order", label: "Order Now" },
              { to: "/contact", label: "Contact" },
            ].map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-sm sm:text-base text-primary-foreground/70 hover:text-primary-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-display text-lg sm:text-xl font-semibold mb-4">
            Contact Us
          </h4>
          <div className="flex flex-col gap-3 text-sm sm:text-base text-primary-foreground/70">
            <a
              href="https://wa.me/923287634644"
              className="flex items-center gap-2 hover:text-primary-foreground transition-colors"
            >
              <MessageCircle size={16} /> WhatsApp Order
            </a>
            <a
              href="tel:+923287634644"
              className="flex items-center gap-2 hover:text-primary-foreground transition-colors"
            >
              <Phone size={16} /> 0328 7634644
            </a>
            <a
              href="mailto:khalifabakers.1925.org@gmail.com"
              className="flex items-center gap-2 hover:text-primary-foreground transition-colors"
            >
              <Heart size={16} /> khalifabakers.1925.org@gmail.com
            </a>
            <span className="flex items-center gap-2">
              <MapPin size={16} /> Mochi Gate, Lahore
            </span>
          </div>
        </div>
      </div>
      <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm sm:text-lg text-primary-foreground/60">
        <p className="flex items-center justify-center gap-1">
          {/* © {new Date().getFullYear()} Khalifa Bakers • Freshly baked with care
          🥐 */}
          © 1925 - 2026 Khalifa Bakers Lahore.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
