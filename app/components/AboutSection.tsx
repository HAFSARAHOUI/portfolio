"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Code2, Rocket, Sparkles } from "lucide-react";


const highlights = [
  { icon: Code2, title: "Clean Code", desc: "Writing maintainable, scalable code is my priority." },
  { icon: Rocket, title: "Fast Delivery", desc: "Agile workflows to ship features on time." },
  { icon: Sparkles, title: "Creative Eye", desc: "Blending design sense with technical depth." },
];

const AboutSection = () => {
  return (
    <section id="about" className="relative py-24 lg:py-32">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-3xl sm:text-4xl font-bold text-center mb-16"
        >
          About <span className="gradient-text">Me</span>
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-2xl overflow-hidden glass-card glow-border-purple shadow-[0_30px_80px_rgba(0,0,0,0.7)]">
                <Image
                  src="/portfolio.jpeg"
                  alt="Hafsa"
                  fill
                  className="object-cover scale-110"
                  priority
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent/20 rounded-full blur-2xl" />
              <div className="absolute -top-4 -left-4 w-20 h-20 bg-primary/20 rounded-full blur-2xl" />
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
             Full Stack Developer. I design the database, write the API, obsess over the UI, and then wonder why I do all three. The result? Web apps that actually work and don't make people cry.

            </p>

            <div className="grid gap-4">
              {highlights.map(({ icon: Icon, title, desc }, i) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-4 glass-card p-4"
                >
                  <div className="p-2 rounded-lg bg-primary/10 text-primary shrink-0">
                    <Icon size={20} />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-foreground">{title}</h3>
                    <p className="text-sm text-muted-foreground">{desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
