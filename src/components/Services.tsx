import { motion } from "framer-motion";
import { Scissors, Crown, Sparkles, Heart, Wand2, Star } from "lucide-react";
import styleBraidsImage from "@/assets/style-braids.jpg";
import styleWeaveImage from "@/assets/style-weave.jpg";

const services = [
  {
    icon: Crown,
    title: "Wig Installation",
    description: "Flawless wig application and customization for a natural, undetectable look.",
    price: "From R800",
  },
  {
    icon: Scissors,
    title: "Box Braids",
    description: "Classic and trendy box braids in various sizes and lengths.",
    price: "From R600",
  },
  {
    icon: Wand2,
    title: "Knotless Braids",
    description: "Lightweight, tension-free braids for comfortable long-term wear.",
    price: "From R700",
  },
  {
    icon: Sparkles,
    title: "Weave Installation",
    description: "Seamless sew-ins and quick weaves for versatile styling options.",
    price: "From R500",
  },
  {
    icon: Heart,
    title: "Cornrows",
    description: "Intricate cornrow designs from simple to complex patterns.",
    price: "From R300",
  },
  {
    icon: Star,
    title: "Wig Customization",
    description: "Bleaching, tinting, plucking, and styling to personalize your wig.",
    price: "From R400",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium tracking-wider uppercase text-sm">
            What We Offer
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mt-4">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            From stunning braids to flawless wig installations, we offer a range of premium services to help you look and feel your best.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="glass rounded-2xl p-8 h-full transition-all duration-500 hover:border-primary/50 hover:shadow-[0_0_40px_hsl(var(--primary)/0.1)]">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="text-primary" size={28} />
                </div>
                <h3 className="font-display text-xl font-semibold mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <p className="text-primary font-semibold">{service.price}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Featured Styles */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-8"
        >
          <div className="relative group overflow-hidden rounded-2xl">
            <img
              src={styleBraidsImage}
              alt="Box braids hairstyle"
              className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <h3 className="font-display text-2xl font-bold mb-2">Braiding Expertise</h3>
              <p className="text-muted-foreground">
                Box braids, knotless, cornrows, and more
              </p>
            </div>
          </div>

          <div className="relative group overflow-hidden rounded-2xl">
            <img
              src={styleWeaveImage}
              alt="Sleek weave hairstyle"
              className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <h3 className="font-display text-2xl font-bold mb-2">Weave & Styling</h3>
              <p className="text-muted-foreground">
                Sew-ins, quick weaves, and sleek finishes
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;