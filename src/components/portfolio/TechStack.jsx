import { motion } from "framer-motion";

const technologies = [
  { name: "React", icon: "⚛️" },
  { name: "Tailwind", icon: "🎨" },
  { name: "Node.js", icon: "🟢" },
  { name: "Python", icon: "🐍" },
  { name: "Figma", icon: "🎯" },
];

function TechIcon({ name, icon }) {
  return (
    <div className="mx-4 flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-6 py-3 backdrop-blur">
      <span className="text-2xl">{icon}</span>
      <span className="font-medium text-white">{name}</span>
    </div>
  );
}

export default function TechStack() {
  const duplicatedTech = [...technologies, ...technologies];

  return (
    <section className="overflow-hidden border-y border-white/10 py-16 bg-slate-750 text-white">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-10 text-center"
      >
        <p className="text-sm uppercase tracking-widest text-white/60">
          Technologies I Work With
        </p>
      </motion.div>

      <div className="relative">
        {/* Fade kiri */}
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-slate-950 to-transparent" />

        {/* Marquee */}
        <div className="flex animate-marquee whitespace-nowrap">
          {duplicatedTech.map((tech, index) => (
            <TechIcon
              key={`${tech.name}-${index}`}
              name={tech.name}
              icon={tech.icon}
            />
          ))}
        </div>

        {/* Fade kanan */}
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-slate-950 to-transparent" />
      </div>
    </section>
  );
}
