import { motion } from "framer-motion";
import { ShoppingBag, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";

const wigs = [
  {
    id: 1,
    name: "Braiding Expertise",
    description: "Box braids, knotless, cornrows, and more",
    price: "R1,500",
    image: "https://res.cloudinary.com/dnnwvmh3n/image/upload/v1766561186/WhatsApp_Image_2025-12-23_at_21.43.01_tejvzm.jpg",
    tag: "Bestseller",
  },
  {
    id: 2,
    name: "Weave & Styling",
    description: "Sew-ins, quick weaves, and sleek finishes",
    price: "R2,000",
    image: "https://res.cloudinary.com/dnnwvmh3n/image/upload/v1766561111/WhatsApp_Image_2025-12-23_at_21.43.16_sdxlax.jpg",
    tag: "Popular",
  },
  {
    id: 3,
    name: "Premium Wig Collection",
    description: "High-quality wigs for every style",
    price: "R2,500",
    image: "https://res.cloudinary.com/dnnwvmh3n/image/upload/v1766561167/WhatsApp_Image_2025-12-23_at_21.30.22_glop0e.jpg",
    tag: "New",
  },
  {
    id: 4,
    name: "Stylish Hair Design",
    description: "Expert styling and customization",
    price: "R1,800",
    image: "https://res.cloudinary.com/dnnwvmh3n/image/upload/v1766561241/WhatsApp_Image_2025-12-23_at_21.42.46_rlcrc5.jpg",
    tag: "Popular",
  },
  {
    id: 5,
    name: "Professional Hair Services",
    description: "Complete hair transformation services",
    price: "R2,200",
    image: "https://res.cloudinary.com/dnnwvmh3n/image/upload/v1766561240/WhatsApp_Image_2025-12-23_at_21.30.21_ksnsvg.jpg",
    tag: "Bestseller",
  },
  {
    id: 6,
    name: "Luxury Hair Collection",
    description: "Premium quality hair extensions and wigs",
    price: "R2,800",
    image: "https://res.cloudinary.com/dnnwvmh3n/image/upload/v1766561070/WhatsApp_Image_2025-12-23_at_21.30.16_1_lpbmns.jpg",
    tag: "New",
  },
];

const WigCollection = () => {
  return (
    <section id="collection" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium tracking-wider uppercase text-sm">
            Shop Our Collection
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mt-4">
            Premium <span className="text-gradient">Wigs</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Discover our curated selection of high-quality wigs, from natural human hair to premium synthetic options.
          </p>
        </motion.div>

        {/* Wig Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {wigs.map((wig, index) => (
            <motion.div
              key={wig.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-2xl bg-card">
                {/* Tag */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                    {wig.tag}
                  </span>
                </div>

                {/* Image */}
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src={wig.image}
                    alt={wig.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <Button 
                      variant="glow" 
                      size="icon" 
                      className="rounded-full h-12 w-12"
                      asChild
                    >
                      <a 
                        href={`https://wa.me/27833667072?text=Hi! I'd like to see more details about the ${wig.name} wig (${wig.price}).`}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View details of ${wig.name}`}
                      >
                        <Eye size={20} />
                      </a>
                    </Button>
                    <Button 
                      variant="glow" 
                      size="icon" 
                      className="rounded-full h-12 w-12"
                      asChild
                    >
                      <a 
                        href={`https://wa.me/27833667072?text=Hi! I'm interested in purchasing the ${wig.name} wig (${wig.price}). Can you help me?`}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Purchase ${wig.name}`}
                      >
                        <ShoppingBag size={20} />
                      </a>
                    </Button>
                  </div>
                </div>

                {/* Info */}
                <div className="p-6">
                  <h3 className="font-display text-xl font-semibold mb-2">
                    {wig.name}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {wig.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="font-display text-2xl font-bold text-primary">
                      {wig.price}
                    </span>
                    <Button 
                      variant="heroOutline" 
                      size="sm"
                      asChild
                    >
                      <a 
                        href={`https://wa.me/27833667072?text=Hi! I'm interested in the ${wig.name} wig (${wig.price}). Can you tell me more?`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Enquire
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Button 
            variant="hero" 
            size="xl"
            asChild
          >
            <a 
              href="https://wa.me/27833667072?text=Hi! I'd like to see your full wig collection. Can you help me?"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Full Collection
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default WigCollection;