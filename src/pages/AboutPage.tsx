import { motion } from "framer-motion";
import { Heart, Leaf, Star, Clock } from "lucide-react";
import heroBakery from "/almond.png";

const values = [
  { icon: Heart, title: "Made with Love", desc: "Every recipe carries our family's love and tradition since 1925." },
  { icon: Leaf, title: "Fresh Ingredients", desc: "We source only the finest, freshest ingredients from Lahore." },
  { icon: Star, title: "Premium Quality", desc: "No shortcuts – just pure, authentic flavors passed through generations." },
  { icon: Clock, title: "Baked Daily", desc: "Fresh batches prepared every single day at Mochi Gate." },
];

const AboutPage = () => (
  <div className="min-h-screen pt-24 pb-16">
    <div className="bakery-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-8 sm:mb-16"
      >
        <span className="text-primary font-medium text-sm uppercase tracking-wider">Our Heritage</span>
        <h1 className="font-display text-3xl md:text-5xl font-bold text-foreground mt-2">
          About Khalifa Bakers
        </h1>
        <p className="text-muted-foreground mt-3">A legacy of baking excellence since 1925</p>
      </motion.div>

      <div className="max-w-4xl mx-auto">
        {/* Heritage story with image */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <img
              src={heroBakery}
              alt="Khalifa Bakers heritage – Mochi Gate Lahore bakery since 1925"
              className="rounded-2xl shadow-bakery w-full object-cover aspect-[4/3]"
              loading="lazy"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-card rounded-2xl p-8 shadow-bakery"
          >
            <h2 className="font-display text-2xl font-bold text-foreground mb-4">Our Story</h2>
            <p className="text-foreground leading-relaxed mb-4">
              <span className="font-display font-semibold text-primary">Khalifa Bakers</span> began in 1925 in Mochi Gate, Lahore. For generations, our family has been baking authentic Nan Khatai using traditional recipes and the finest ingredients.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              What started as a small neighborhood bakery has grown into one of Lahore's most cherished institutions. Our Almond Nan Khatai, Bakar Khani, and Cake Rusk have become household favorites across the city.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We're not just a bakery – we're a family that takes pride in making every occasion sweeter. Whether it's a festive celebration or a simple evening chai, Khalifa Bakers is here to add joy to every moment. 💛
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card rounded-2xl p-6 shadow-bakery text-center"
            >
              <motion.div
                whileHover={{ rotate: 15, scale: 1.1 }}
                className="inline-flex p-3 bg-secondary rounded-xl mb-3"
              >
                <v.icon size={24} className="text-primary" />
              </motion.div>
              <h3 className="font-display text-lg font-semibold text-foreground">{v.title}</h3>
              <p className="text-muted-foreground text-sm mt-1">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default AboutPage;
