import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

interface ProductCardProps {
  name: string;
  image: string;
  price: string;
  description?: string;
  delay?: number;
}

const ProductCard = ({
  name,
  image,
  price,
  description,
  delay = 0,
}: ProductCardProps) => {
  const whatsappUrl = `https://wa.me/923287634644?text=Hi!%20I%20would%20like%20to%20order%20${encodeURIComponent(name)}.`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -8 }}
      className="group bg-card rounded-2xl overflow-hidden shadow-bakery hover:shadow-bakery-hover transition-shadow duration-300 flex flex-col h-full"
    >
      <div className="relative overflow-hidden aspect-square">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="p-4 flex-1 flex flex-col">
        <h3 className="font-montserrat text-lg font-semibold text-foreground">
          {name}
        </h3>

        {/* Description with fixed height for alignment */}
        {description && (
          <p className="text-muted-foreground font-semibold text-sm mt-1 line-clamp-2 min-h-[2.5rem]">
            {description}
          </p>
        )}

        {/* If no description, add a spacer to keep height consistent */}
        {!description && <div className="min-h-[2.5rem]" />}

        <div className="mt-auto">
          <p className="text-primary font-bold text-lg mb-3">{price}</p>

          <motion.a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="w-full flex items-center justify-center gap-2 bg-whatsapp text-whatsapp-foreground py-2.5 rounded-lg font-medium text-sm transition-colors hover:brightness-110"
          >
            <img src="/whatsapp.png" alt="WhatsApp" className="w-6 h-6" />
            Order on WhatsApp
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
