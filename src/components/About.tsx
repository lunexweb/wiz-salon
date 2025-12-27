import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const highlights = [
  "Premium quality wigs and hair products",
  "Expert stylists with 10+ years experience",
  "Personalized consultations",
  "Comfortable, luxurious salon environment",
  "Affordable pricing without compromising quality",
  "Aftercare support and maintenance tips",
];

const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary font-medium tracking-wider uppercase text-sm">
              About Us
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">
              Where <span className="text-gradient">Beauty</span> Meets Excellence
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              At Waz Wigs, we believe every woman deserves to feel confident and beautiful. Located in the heart of Kempton Park, Johannesburg, our salon is a sanctuary where artistry meets passion.
            </p>
            <p className="text-muted-foreground mb-8">
              With over a decade of experience in the hair industry, we specialize in creating stunning looks that enhance your natural beauty. Whether you're looking for a complete transformation or a subtle enhancement, our expert team is here to bring your vision to life.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 className="text-primary flex-shrink-0" size={20} />
                  <span className="text-foreground/80">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Side - Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-6">
              {[
                { value: "10+", label: "Years of Excellence" },
                { value: "500+", label: "Happy Clients" },
                { value: "50+", label: "Wig Styles Available" },
                { value: "100%", label: "Client Satisfaction" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="glass rounded-2xl p-8 text-center glow"
                >
                  <p className="font-display text-4xl md:text-5xl font-bold text-gradient">
                    {stat.value}
                  </p>
                  <p className="text-muted-foreground mt-2">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            {/* Decorative Element */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;