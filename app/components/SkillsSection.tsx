"use client";

import { motion } from "framer-motion";

const skills = [
  { name: "React", color: "primary" },
  { name: "TypeScript", color: "accent" },
  { name: "Node.js", color: "primary" },
  { name: "Python", color: "secondary" },
  { name: "MySQL", color: "accent" },
  { name: "Tailwind CSS", color: "primary" },
  { name: "Next.js", color: "secondary" },
  { name: "Laravel", color: "accent" },
  { name: "PHP", color: "primary" },
  { name: "Git", color: "secondary" },
  { name: "MongoDB", color: "primary" },
  { name: "Figma", color: "accent" },
];

const colorClasses: Record<string, string> = {
  primary: "border-primary/30 text-primary bg-primary/5 hover:bg-primary/10 hover:border-primary/60",
  secondary: "border-secondary/30 text-secondary bg-secondary/5 hover:bg-secondary/10 hover:border-secondary/60",
  accent: "border-accent/30 text-accent bg-accent/5 hover:bg-accent/10 hover:border-accent/60",
};

const SkillsSection = () => {
  return (
    <section id="skills" className="relative py-24 lg:py-32">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-3xl sm:text-4xl font-bold text-center mb-4"
        >
          Skills & <span className="gradient-text-cyan">Technologies</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-muted-foreground text-center mb-16 max-w-lg mx-auto"
        >
          Tools and technologies I use to bring products to life.
        </motion.p>

        <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
          {skills.map((skill, i) => (
            <motion.span
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              whileHover={{ scale: 1.1 }}
              className={`px-5 py-2.5 rounded-full border font-display text-sm font-medium cursor-default transition-all duration-300 ${colorClasses[skill.color]}`}
            >
              {skill.name}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
