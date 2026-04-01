"use client";
import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "1s" }} />

      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-accent font-display text-sm tracking-widest uppercase mb-4"
        >
          Full Stack Developer
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="font-display text-5xl sm:text-7xl lg:text-8xl font-bold mb-6"
        >
          Hi, I'm{" "}
          <span className="gradient-text">Hafsa</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-muted-foreground text-lg sm:text-xl max-w-2xl mx-auto mb-10"
        >
         I build web things that work, look great, and don't fall apart at 3am. Full-stack, fast, and weirdly proud of my commit messages.

        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="flex items-center justify-center gap-4 mb-16"
        >
          <a
            href="#projects"
            className="px-8 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-3 rounded-lg border border-border text-foreground font-medium hover:bg-muted transition-colors"
          >
            Get In Touch
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex items-center justify-center gap-6 mb-16"
        >
          {[
            { icon: Github, href: "https://github.com/HAFSARAHOUI" },
            { icon: Linkedin, href: "https://www.linkedin.com/in/hafsarahoui/" },
            { icon: Mail, href: "hrworkarea@gmail.com" },
          ].map(({ icon: Icon, href }, i) => (
            <a
              key={i}
              href={href}
              className="p-3 rounded-full border border-border text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300"
            >
              <Icon size={20} />
            </a>
          ))}
        </motion.div>

        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="inline-block animate-float text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowDown size={24} />
        </motion.a>
      </div>
    </section>
  );
};

export default HeroSection;
