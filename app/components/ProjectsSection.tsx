"use client";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    desc: "A full-featured online store with payments, auth, and admin dashboard built with React and Node.js.",
    tags: ["React", "Node.js", "Stripe", "PostgreSQL"],
    color: "primary" as const,
  },
  {
    title: "AI Chat Application",
    desc: "Real-time messaging app powered by AI with smart suggestions and natural language processing.",
    tags: ["TypeScript", "OpenAI", "WebSocket", "Tailwind"],
    color: "secondary" as const,
  },
  {
    title: "Task Management Tool",
    desc: "Collaborative project management app with drag-and-drop boards, deadlines, and team features.",
    tags: ["React", "Supabase", "DnD Kit", "Framer Motion"],
    color: "accent" as const,
  },
  {
    title: "Portfolio Generator",
    desc: "Dynamic portfolio builder that lets developers create stunning portfolios with zero configuration.",
    tags: ["Next.js", "MDX", "Vercel", "Tailwind CSS"],
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
              className={`glass-card p-6 group transition-all duration-300 ${colorMap[p.color]}`}
            >
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
