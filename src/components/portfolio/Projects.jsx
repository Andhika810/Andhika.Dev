import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import project1 from "../../assets/project.png";

const projects = [
  {
    title: "Landing Page for Company",
    description:
      "A modern company landing page built to attract customers, highlight services, and increase conversions.",
    tech: ["React", "Tailwind"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative lg:px-20">
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Selected <span className="text-gradient">Project</span>
          </h2>
        </motion.div>

        {/* GRID 1 CARD */}
        <div className="grid grid-cols-1">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass rounded-2xl overflow-hidden glow-primary"
            >
              {/* IMAGE */}
              <div className="relative h-56 w-full">
                <img
                  src={project1}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>

              {/* CONTENT */}
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2">{project.title}</h3>

                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>

                {/* TECH STACK */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* ACTION */}
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
                >
                  View Case Study
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
