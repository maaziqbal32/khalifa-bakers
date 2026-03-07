import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  MessageCircle,
  ArrowRight,
  Cookie,
  Cake,
  Heart,
  Star,
} from "lucide-react";
import ProductCard from "@/components/ProductCard";
import TestimonialCarousel from "@/components/TestimonialCarousel";

import heroBakery from "@/assets/hero-khalifa.png";
import almondNaanKhatai from "/almond.png";
import plainNaanKhatai from "/plan.png";
import burfiToffee from "/toffee.png";
import bakarKhani from "/bakar.png";
import cakeRusk from "/cake-rusk.png";
import panjeeri from "/panjeeri.png";

const featuredProducts = [
  {
    name: "Almond Nan Khatai (Full Box)",
    image: almondNaanKhatai,
    price: "Rs 3,500",
    description: "Premium almond-topped shortbread cookies – full box",
  },
  {
    name: "Half Almond Khatai (Half Box)",
    image: almondNaanKhatai,
    price: "Rs 1,750",
    description: "Half box of our signature almond delight",
  },
  {
    name: "Plain Nan Khatai (Full Box)",
    image: plainNaanKhatai,
    price: "Rs 1,200",
    description: "Classic melt-in-your-mouth cookies",
  },
  {
    name: "Plain Nan Khatai (Half Box)",
    image: plainNaanKhatai,
    price: "Rs 600",
    description: "Half box of our classic delight",
  },
  {
    name: "Burfi Toffee",
    image: burfiToffee,
    price: "Rs 800",
    description: "Traditional milk fudge sweets",
  },
  {
    name: "Bakar Khani",
    image: bakarKhani,
    price: "Rs 600",
    description: "Flaky layered pastry bread",
  },
  {
    name: "Cake Rusk",
    image: cakeRusk,
    price: "Rs 500",
    description: "Crispy twice-baked tea companions",
  },
  {
    name: "Panjeeri",
    image: panjeeri,
    price: "Rs 900",
    description: "Nutritious traditional sweet powder",
  },
];

const bestSellers = [
  {
    name: "Almond Nan Khatai",
    image: almondNaanKhatai,
    price: "Rs 3,500",
    rating: 5,
  },
  {
    name: "Plain Nan Khatai (Full Box)",
    image: plainNaanKhatai,
    price: "Rs 1,200",
    rating: 5,
  },
  { name: "Cake Rusk", image: cakeRusk, price: "Rs 500", rating: 5 },
  { name: "Bakar Khani", image: bakarKhani, price: "Rs 600", rating: 5 },
];

const floatingIcons = [
  { icon: Cookie, className: "top-20 left-[10%] animate-float", delay: 0 },
  {
    icon: Cake,
    className: "top-40 right-[15%] animate-float-reverse",
    delay: 1,
  },
  { icon: Heart, className: "bottom-20 left-[20%] animate-float", delay: 2 },
  {
    icon: Cookie,
    className: "bottom-32 right-[10%] animate-float-reverse",
    delay: 0.5,
  },
];

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative min-h-[100vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroBakery}
            alt="Khalifa Bakers – Traditional Nan Khatai bakery in Lahore"
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/50 to-transparent" />
        </div>

        {floatingIcons.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.15 }}
            transition={{ delay: item.delay + 1, duration: 1 }}
            className={`absolute hidden md:block text-primary-foreground ${item.className}`}
          >
            <item.icon size={40} />
          </motion.div>
        ))}

        {/* Added responsive horizontal padding */}
        <div className="relative bakery-container px-4 sm:px-6 py-16 sm:py-0">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            // Fixed: use responsive max-width so text fits on small screens
            className="max-w-full sm:max-w-xl"
          >
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="inline-block bg-accent/90 text-accent-foreground text-sm font-medium px-4 py-1.5 rounded-full mb-6"
            >
              ✨ Authentic Taste Since 1925
            </motion.span>
            <h1 className="text-4xl md:text-6xl font-display font-bold text-primary-foreground leading-tight mb-6">
              Khalifa Bakers – Authentic Taste Since 1925
            </h1>
            <p className="text-primary-foreground/80 text-lg mb-8">
              Traditional bakery famous for Almond Nan Khatai and classic
              Pakistani bakery items from Mochi Gate, Lahore.
            </p>
            <div className="flex flex-nowrap gap-2 sm:gap-4">
              <motion.a
                href="https://wa.me/923001234567?text=Hello%20Khalifa%20Bakers%2C%20I%20would%20like%20to%20place%20an%20order.%0A%0AProduct%3A%0AQuantity%3A%0ADelivery%20Address%3A"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-1 sm:gap-2 bg-whatsapp text-whatsapp-foreground px-3 sm:px-6 py-2 sm:py-3 rounded-full font-semibold shadow-lg text-sm sm:text-base"
              >
                <img
                  src="/whatsapp.png"
                  alt="WhatsApp"
                  className="w-5 h-5 sm:w-6 sm:h-6"
                />
                <span className="whitespace-nowrap text-xs sm:text-base">
                  Order on WhatsApp
                </span>
              </motion.a>
              <Link to="/menu">
                <motion.span
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-1 sm:gap-2 bg-primary-foreground/20 backdrop-blur text-primary-foreground px-3 sm:px-6 py-2 sm:py-3 rounded-full font-semibold border border-primary-foreground/30 text-sm sm:text-base whitespace-nowrap"
                >
                  View Products{" "}
                  <ArrowRight
                    size={18}
                    className="w-4 h-4 sm:w-[18px] sm:h-[18px]"
                  />
                </motion.span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="section-padding gradient-warm">
        {/* Added responsive horizontal padding */}
        <div className="bakery-container px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              Our Specialties
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2">
              Featured Products
            </h2>
            {/* Fixed: responsive max-width for paragraph */}
            <p className="text-muted-foreground mt-3 max-w-full sm:max-w-md mx-auto">
              Hand-crafted with love using traditional family recipes since 1925
            </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {featuredProducts.map((product, i) => (
              <ProductCard key={product.name} {...product} delay={i * 0.1} />
            ))}
          </div>
        </div>
      </section>

      {/* Our Heritage */}
      <section className="section-padding">
        {/* Added responsive horizontal padding */}
        <div className="bakery-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-primary font-medium text-sm uppercase tracking-wider">
                Our Heritage
              </span>
              <h2 className="font-montserrat text-3xl md:text-4xl font-semibold text-foreground mt-2 mb-6">
                A Legacy of Taste Since 1925
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Khalifa Bakers began in 1925 in Mochi Gate, Lahore. For
                generations, our family has been baking authentic Nan Khatai
                using traditional recipes and the finest ingredients.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                What started as a small family bakery has become a beloved
                institution, known across Lahore for our signature Almond Nan
                Khatai, crispy Bakar Khani, and other timeless treats. Every
                bite carries the warmth of nearly a century of baking tradition.
              </p>
              <Link to="/about">
                <motion.span
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-semibold"
                >
                  Read Our Story <ArrowRight size={18} />
                </motion.span>
              </Link>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative w-full"
            >
              <img
                src={heroBakery}
                alt="Khalifa Bakers heritage – traditional bakery at Mochi Gate Lahore"
                className="w-full rounded-2xl shadow-bakery object-cover"
                loading="lazy"
              />

              {/* Badge */}
              <div
                className="
      absolute
      bottom-3 left-3
      bg-accent text-accent-foreground
      rounded-lg
      px-3 py-1.5
      shadow-lg
      font-display font-bold
      text-xs sm:text-sm md:text-base
    "
              >
                Est. 1925
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Best Sellers Carousel */}
      <section className="section-padding gradient-warm">
        {/* Added responsive horizontal padding */}
        <div className="bakery-container px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              Most Popular
            </span>
            <h2 className="font-montserrat text-3xl md:text-4xl font-semibold text-foreground mt-2">
              Best Sellers ⭐
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {bestSellers.map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                whileHover={{ y: -6 }}
                className="bg-card rounded-2xl overflow-hidden shadow-bakery hover:shadow-bakery-hover transition-shadow"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={item.image}
                    alt={`${item.name} – Khalifa Bakers Lahore`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="p-5">
                  <div className="flex gap-0.5 mb-2">
                    {Array.from({ length: item.rating }).map((_, j) => (
                      <Star
                        key={j}
                        size={14}
                        className="fill-golden text-golden"
                      />
                    ))}
                  </div>
                  <h3 className="font-montserrat text-lg font-semibold text-foreground">
                    {item.name}
                  </h3>
                  <p className="text-primary font-bold mt-1">{item.price}</p>
                  <motion.a
                    href={`https://wa.me/923001234567?text=Hi!%20I%20would%20like%20to%20order%20${encodeURIComponent(item.name)}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="mt-3 w-full flex items-center justify-center gap-2 bg-whatsapp text-whatsapp-foreground py-2 rounded-lg font-medium text-sm"
                  >
                    <img
                      src="/whatsapp.png"
                      alt="WhatsApp"
                      className="w-6 h-6"
                    />{" "}
                    Quick Order
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="section-padding">
        {/* Added responsive horizontal padding */}
        <div className="bakery-container px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                to: "/menu",
                icon: Cookie,
                title: "Full Menu",
                desc: "Browse our complete range of treats",
              },
              {
                to: "/order",
                icon: MessageCircle,
                title: "Quick Order",
                desc: "Order in seconds via WhatsApp",
              },
              {
                to: "/about",
                icon: Heart,
                title: "Our Story",
                desc: "A legacy of baking since 1925",
              },
            ].map((item, i) => (
              <motion.div
                key={item.to}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
              >
                <Link
                  to={item.to}
                  className="block bg-card rounded-2xl p-8 shadow-bakery hover:shadow-bakery-hover transition-all duration-300 group text-center"
                >
                  <motion.div
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    className="inline-flex p-4 bg-secondary rounded-xl mb-4"
                  >
                    <item.icon size={28} className="text-primary" />
                  </motion.div>
                  <h3 className="font-display text-xl font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mt-2">
                    {item.desc}
                  </p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding gradient-warm">
        {/* Added responsive horizontal padding */}
        <div className="bakery-container px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              Testimonials
            </span>
            <h2 className="font-montserrat text-3xl md:text-4xl font-semibold text-foreground mt-2">
              What Our Customers Say ❤️
            </h2>
          </motion.div>
          <TestimonialCarousel />
        </div>
      </section>
    </div>
  );
};

export default Index;
