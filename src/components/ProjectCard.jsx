import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

export default function ProjectCard({ project, index }) {
  return (
    <motion.a
      href={project.link || undefined}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group relative overflow-hidden rounded-3xl bg-surface-container-lowest shadow-[0_20px_40px_rgba(96,89,135,0.06)] transition-all duration-500 hover:scale-[1.01] hover:shadow-2xl"
    >
      <div className="aspect-video relative overflow-hidden">
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
      
      <div className="p-10">
        <div className="flex justify-between items-start mb-4">
          <h4 className="text-2xl font-bold text-on-background">{project.name}</h4>
          <ArrowUpRight className="text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </div>
        
        <p className="text-on-surface-variant font-light leading-relaxed mb-6">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="text-[10px] font-bold uppercase tracking-widest text-primary/60 px-3 py-1 bg-primary-container/30 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.a>
  );
}
