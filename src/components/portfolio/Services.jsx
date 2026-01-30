import { motion } from "framer-motion";
import { Sparkles, TrendingUp, Target } from "lucide-react";

const reasons = [
  {
    icon: Sparkles,
    title: "Conversion-Focused Design",
    description:
      "Every landing page is designed with a clear conversion goal in mind — guiding visitors through a structured flow that turns attention into action.",
  },
  {
    icon: TrendingUp,
    title: "Responsive & High Performance",
    description:
      "Landing pages are fully responsive across all devices, optimized for fast loading, smooth interactions, and consistent user experience.",
  },
  {
    icon: Target,
    title: "Tailored to Client Goals",
    description:
      "I build landing pages based on your business objectives, audience behavior, and campaign needs — not generic templates.",
  },
];

export default function Services() {
  return (
    <section className="py-24 relative px-20">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-r from-primary/10 to-accent/10 rounded-full blur-[100px]" />
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
            Why <span className="text-gradient">Choose Me</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            What sets my work apart and drives exceptional results
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="glass rounded-2xl p-8 text-center glow-primary group cursor-pointer"
            >
              <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <reason.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{reason.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
