"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Nanny Now",
    image: "/NannyNow.PNG",
    desc: "A platform connecting families with trusted nannies. Nannies apply to join, admins review and approve profiles, and parents can browse available nannies or post childcare requests that nannies can apply for.",
    tags: ["Laravel", "PHP", "MySQL", "JavaScript"],
    color: "primary" as const,
  },
  {
    title: "Ashkid Travel",
    image: "/AshkidTravel.PNG",
    desc: "A tourism platform for a Moroccan travel agency showcasing tours and destinations across Morocco. Users can book trips, explore a travel blog, and discover rich information about Moroccan tourism.",
    tags: ["React", "Laravel", "Node.js", "Tailwind", "MySQL"],
    color: "accent" as const,
  },
  {
    title: "Commerce Manager",
    image: "/CommerceManager.PNG",
    desc: "A full-scale company management system with products, invoices, stock tracking, HR, receipts, and detailed reports. Role-based access lets the admin control exactly what each user can see and do.",
    tags: ["React", "Laravel", "Node.js", "Tailwind", "MySQL"],
    color: "secondary" as const,
  },
  {
    title: "Portfolio",
    image: "/Portfolio.PNG",
    desc: "This very portfolio — a personal website built to showcase my projects, skills, and journey as a developer. Designed with a focus on smooth animations, clean aesthetics, and a great developer experience.",
    tags: ["React", "Next.js", "Tailwind", "Framer Motion"],
    color: "primary" as const,
  },
];

const colorMap = {
  primary: "hover:glow-border-purple",
  secondary: "hover:border-secondary/50",
  accent: "hover:glow-border-cyan",
};

const tagColorMap = {
  primary: "bg-primary/10 text-primary",
  secondary: "bg-secondary/10 text-secondary",
  accent: "bg-accent/10 text-accent",
};

const ProjectsSection = () => {
  return (
    <section id="projects" className="relative py-24 lg:py-32">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-3xl sm:text-4xl font-bold text-center mb-4"
        >
          Featured <span className="gradient-text">Projects</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-muted-foreground text-center mb-16 max-w-lg mx-auto"
        >
          A selection of projects I've built, from concept to deployment.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`glass-card rounded-2xl p-6 group transition-all duration-300 shadow-[0_42px_110px_rgba(0,0,0,0.68)] hover:shadow-[0_50px_130px_rgba(0,0,0,0.78)] ${colorMap[p.color]}`}
            >
              <div className="relative mb-5 h-48 overflow-hidden rounded-xl border border-border/60 bg-black/20 shadow-[0_20px_50px_rgba(0,0,0,0.42)]">
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                {p.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{p.desc}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {p.tags.map((tag) => (
                  <span key={tag} className={`text-xs px-3 py-1 rounded-full ${tagColorMap[p.color]}`}>
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-3">
                <a href="#" className="p-2 rounded-lg border border-border text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-all">
                  <Github size={18} />
                </a>
                <a href="#" className="p-2 rounded-lg border border-border text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-all">
                  <ExternalLink size={18} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
