import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Landing Page Strategy",
    skills: [
      { name: "Business Goal Analysis", level: 95 },
      { name: "Target Audience Research", level: 90 },
      { name: "Conversion Flow Planning", level: 95 },
      { name: "CTA Strategy Optimization", level: 90 },
    ],
  },
  {
    title: "UI / UX Design",
    skills: [
      { name: "Modern Layout Design", level: 95 },
      { name: "User Experience Optimization", level: 90 },
      { name: "Mobile-First Design", level: 95 },
      { name: "Visual Hierarchy & Clarity", level: 90 },
    ],
  },
  {
    title: "Responsive Development",
    skills: [
      { name: "Multi-Device Compatibility", level: 95 },
      { name: "Cross-Browser Support", level: 90 },
      { name: "Performance-Oriented Layout", level: 90 },
      { name: "Scalable Component Structure", level: 85 },
    ],
  },
  {
    title: "Performance & SEO",
    skills: [
      { name: "Fast Page Load Optimization", level: 90 },
      { name: "SEO-Friendly Structure", level: 85 },
      { name: "Core Web Vitals", level: 85 },
      { name: "Clean & Semantic HTML", level: 90 },
    ],
  },
  {
    title: "Client-Oriented Delivery",
    skills: [
      { name: "Custom Requirement Handling", level: 95 },
      { name: "Flexible Design Revisions", level: 90 },
      { name: "Clear Communication", level: 95 },
      { name: "On-Time Project Delivery", level: 90 },
    ],
  },
];

function SkillBar({ name, level, delay }) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between text-sm">
        <span className="text-foreground">{name}</span>
        <span className="text-muted-foreground">{level}%</span>
      </div>
      <div className="h-2 bg-secondary rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ delay, duration: 1, ease: "easeOut" }}
          className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
        />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative lg:px-20">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building modern digital solutions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1, duration: 0.5 }}
              className="glass rounded-2xl p-6"
            >
              <h3 className="text-lg font-semibold mb-6 text-gradient">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    delay={categoryIndex * 0.1 + skillIndex * 0.1}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
