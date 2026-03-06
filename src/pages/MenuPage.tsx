import { motion } from "framer-motion";
import ProductCard from "@/components/ProductCard";

import almondNaanKhatai from "@/assets/almond-naan-khatai.jpg";
import plainNaanKhatai from "@/assets/plain-naan-khatai.jpg";
import burfiToffee from "@/assets/burfi-toffee.jpg";
import bakarKhani from "@/assets/bakar-khani.jpg";
import cakeRusk from "@/assets/cake-rusk.jpg";
import frenchHeart from "@/assets/french-heart.jpg";
import panjeeri from "@/assets/panjeeri.jpg";

const categories = [
  {
    name: "Cookies & Biscuits",
    items: [
      { name: "Almond Naan Khatai (Full Box)", image: almondNaanKhatai, price: "₨3,500", description: "Premium box of almond-topped shortbread" },
      { name: "Almond Naan Khatai (Half Box)", image: almondNaanKhatai, price: "₨1,750", description: "Half box of almond delight" },
      { name: "Plain Naan Khatai", image: plainNaanKhatai, price: "₨1,200", description: "Classic melt-in-your-mouth cookies" },
      { name: "French Heart Biscuits", image: frenchHeart, price: "₨700", description: "Elegant heart-shaped butter biscuits" },
    ],
  },
  {
    name: "Sweets & Treats",
    items: [
      { name: "Burfi Toffee", image: burfiToffee, price: "₨800", description: "Traditional milk fudge sweets" },
      { name: "Panjeeri", image: panjeeri, price: "₨900", description: "Nutritious traditional sweet powder" },
    ],
  },
  {
    name: "Breads & Rusks",
    items: [
      { name: "Bakar Khani", image: bakarKhani, price: "₨600", description: "Flaky layered pastry bread" },
      { name: "Cake Rusk", image: cakeRusk, price: "₨500", description: "Crispy twice-baked tea companions" },
    ],
  },
];

const MenuPage = () => (
  <div className="min-h-screen pt-24 pb-16">
    <div className="bakery-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <span className="text-primary font-medium text-sm uppercase tracking-wider">Our Menu</span>
        <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-2">
          Freshly Baked Goodness 🥮
        </h1>
        <p className="text-muted-foreground mt-3 max-w-md mx-auto">
          Browse our complete range of traditional bakery delights
        </p>
      </motion.div>

      {categories.map((category, ci) => (
        <div key={category.name} className="mb-16">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="font-display text-2xl font-bold text-foreground mb-6 flex items-center gap-3"
          >
            <span className="w-8 h-0.5 bg-primary rounded-full" />
            {category.name}
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {category.items.map((item, i) => (
              <ProductCard key={item.name} {...item} delay={i * 0.1} />
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default MenuPage;
