import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Package, MapPin, Store } from "lucide-react";

// Height of the ticker bar in pixels – used to offset the navbar
const TICKER_HEIGHT = 40;

const links = [
  { to: "/", label: "Home" },
  { to: "/menu", label: "Menu" },
  { to: "/about", label: "About Us" },
  { to: "/contact", label: "Contact" },
  { to: "/order", label: "Order Now" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [open]);

  return (
    <>
      {/* CSS for the marquee animation */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
          will-change: transform;
        }
      `}</style>

       {/* FIXED TICKER – always on top */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-red-800 text-white py-3 overflow-hidden whitespace-nowrap shadow-md">
        <div className="animate-marquee inline-flex items-center">
          {/* First set of messages with icons */}
          <span className="mx-4 inline-flex items-center gap-1">
            <Phone size={16} className="inline" />
            Call Now To Order: 0328-7634644
          </span>
          <span className="mx-4 inline-flex items-center gap-1">
            <Package size={16} className="inline" />
            Lahore Flat Delivery Fee: Rs. 399 Only!
          </span>
          <span className="mx-4 inline-flex items-center gap-1">
            <Package size={16} className="inline" />
            Outside Lahore Delivery: Courier Fee: Rs. 499 per kg Only!
          </span>
          <span className="mx-4 inline-flex items-center gap-1">
            <Store size={16} className="inline" />
            Original Old Lahore Mochi Gate Khalifa Bakery!
          </span>

          {/* Duplicate set for seamless loop */}
          <span className="mx-4 inline-flex items-center gap-1">
            <Phone size={16} className="inline" />
            Call Now To Order: 0328-7634644
          </span>
          <span className="mx-4 inline-flex items-center gap-1">
            <Package size={16} className="inline" />
            Lahore Flat Delivery Fee: Rs. 399 Only!
          </span>
          <span className="mx-4 inline-flex items-center gap-1">
            <Package size={16} className="inline" />
            Outside Lahore Delivery: Courier Fee: Rs. 499 per kg Only!
          </span>
          <span className="mx-4 inline-flex items-center gap-1">
            <Store size={16} className="inline" />
            Original Old Lahore Mochi Gate Khalifa Bakery!
          </span>
        </div>
      </div>

      {/* MAIN NAVBAR – fixed below the ticker */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className="fixed left-0 right-0 z-40 bg-card/90 backdrop-blur-md border-b border-border w-screen will-change-transform overflow-hidden"
        style={{ top: TICKER_HEIGHT }} // 👈 offset by ticker height
      >
        <div className="navbar-container bakery-container h-16 md:h-20 flex items-center justify-between">
          <div className="flex items-center flex-1 min-w-0">
            <Link to="/" className="flex items-center gap-2 flex-shrink-0">
              <img
                src="/favicon.png"
                alt="Khalifa Bakers Logo"
                className="h-12 w-12 md:h-16 md:w-16 flex-shrink-0"
              />
              <span className="hidden sm:flex font-display text-xl md:text-2xl font-bold text-primary mt-4 flex-shrink-0">
                Khalifa Bakers
              </span>
            </Link>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center gap-12 ml-auto">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-sm font-medium transition-colors duration-200 relative whitespace-nowrap contain-layout ${
                  location.pathname === link.to
                    ? "text-primary"
                    : "text-muted-foreground hover:text-primary"
                }`}
              >
                {link.label}
                {location.pathname === link.to && (
                  <motion.div
                    layoutId="nav-underline"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 text-foreground w-10 h-10 flex items-center justify-center flex-shrink-0"
            aria-label="Toggle menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-card border-b border-border overflow-hidden"
            >
              <div className="bakery-container py-4 flex flex-col gap-3">
                {links.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    onClick={() => setOpen(false)}
                    className={`text-sm font-medium py-2 ${
                      location.pathname === link.to
                        ? "text-primary"
                        : "text-muted-foreground"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
};

export default Navbar;