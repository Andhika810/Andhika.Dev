import { motion } from "framer-motion";
import { Check } from "lucide-react";

const pricingPlans = [
  {
    title: "Basic Landing Page",
    price: "Rp 500.000",
    tech: "HTML & CSS (Vanilla)",
    glowClass: "glow-accent border border-accent/30",
    recommended: false,
    features: [
      "1 halaman landing page",
      "Responsive design",
      "Modern UI layout",
      "Fast loading",
      "Cocok untuk UMKM & personal",
    ],
  },
  {
    title: "Standard Landing Page",
    price: "Rp 1.000.000",
    tech: "React.js & Tailwind CSS",
    glowClass: "glow-primary border border-accent/30",
    recommended: true,
    features: [
      "React component based",
      "Reusable & scalable code",
      "Responsive all devices",
      "Smooth animation",
      "Optimized performance",
    ],
  },
  {
    title: "Advanced Landing Page",
    price: "Rp 2.000.000",
    tech: "Advanced Framework & Optimization",
    glowClass: "glow-accent border border-accent/30",
    recommended: false,
    features: [
      "High-conversion layout",
      "Advanced animations & interaction",
      "SEO & performance optimization",
      "Custom section & flow",
      "Business-oriented structure",
    ],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 relative lg:px-20">
      {/* background blur */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 w-[700px] h-[400px] -translate-x-1/2 -translate-y-1/2 bg-primary/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Landing Page <span className="text-gradient">Pricing</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Flexible pricing based on technology, complexity, and business needs
          </p>
        </motion.div>

        {/* pricing grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.03 }}
              className={`relative glass rounded-2xl p-8 flex flex-col ${plan.glowClass}`}
            >
              {plan.recommended && (
                <div className="absolute -top-3 -left-3 bg-red-500 text-white text-[10px] font-semibold px-3 py-1 rounded-br-lg shadow-md">
                  RECOMMENDED
                </div>
              )}

              {/* title */}
              <h3 className="text-xl font-semibold mb-1">{plan.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{plan.tech}</p>

              {/* price */}
              <div className="text-3xl font-bold mb-6 text-gradient">
                {plan.price}
              </div>

              {/* features */}
              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm">
                    <Check className="w-4 h-4 text-primary mt-1" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
