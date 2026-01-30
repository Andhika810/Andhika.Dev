import { motion } from "framer-motion";
import {
  Lightbulb,
  Palette,
  Code,
  TestTube,
  Rocket,
  Wrench,
} from "lucide-react";

const steps = [
  {
    icon: Lightbulb,
    title: "Requirement & Goal Discovery",
    description:
      "Understanding your business goals, target audience, and conversion objectives to ensure the landing page is built with clear purpose.",
  },
  {
    icon: Palette,
    title: "UI/UX & Content Structure",
    description:
      "Designing layout flow, section hierarchy, and visual direction that guides visitors toward action naturally.",
  },
  {
    icon: Code,
    title: "Landing Page Development",
    description:
      "Building a fast, clean, and responsive landing page using modern frontend technologies and best practices.",
  },
  {
    icon: TestTube,
    title: "Optimization & Testing",
    description:
      "Testing responsiveness, performance, and usability across devices to ensure a smooth user experience.",
  },
  {
    icon: Rocket,
    title: "Launch & Deployment",
    description:
      "Deploying the landing page with optimized assets, SEO-ready structure, and fast load performance.",
  },
  {
    icon: Wrench,
    title: "Iteration & Improvement",
    description:
      "Providing updates, refinements, and improvements based on feedback or business growth needs.",
  },
];

export default function Timeline() {
  return (
    <section id="workflow" className="py-24 relative">
      <div className="absolute inset-0">
        <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Landing Page <span className="text-gradient">Workflow</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A proven process focused on clarity, performance, and conversion
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-blue-400 md:-translate-x-1/2" />

          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={`relative flex items-center mb-8 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Dot */}
              <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-primary to-accent md:-translate-x-1/2 glow-primary z-10" />

              {/* Card */}
              <div
                className={`ml-12 md:ml-0 md:w-[calc(50%-40px)] ${
                  index % 2 === 0 ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"
                }`}
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="glass rounded-2xl p-6 glow-primary"
                >
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                      <step.icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-xs text-muted-foreground">
                      Step {index + 1}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {step.description}
                  </p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
