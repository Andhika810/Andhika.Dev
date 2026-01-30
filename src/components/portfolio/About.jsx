import { Code2, Bot, Brain, Layers } from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Custom Landing Page",
    description:
      "Landing pages built fully based on your business goals, audience, and brand identity — no templates, no compromises.",
  },
  {
    icon: Bot,
    title: "Responsive Design",
    description:
      "Pixel-perfect layouts that adapt seamlessly across desktop, tablet, and mobile devices.",
  },
  {
    icon: Brain,
    title: "Performance & SEO Ready",
    description:
      "Fast loading, clean structure, and SEO-friendly code to improve visibility and user retention.",
  },
  {
    icon: Layers,
    title: "Conversion Focused",
    description:
      "Strategic content flow and strong call-to-actions designed to turn visitors into customers.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative py-15 bg-[#050B1A] overflow-hidden lg:px-20"
    >
      {/* Glow Background */}
      <div className="absolute inset-0">
        <div className="absolute left-1/4 top-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-blue-500/20 blur-[160px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-8">
        <div className="flex justify-center items-center">
          <h2 className=" text-3xl sm:text-4xl font-bold mb-10 text-center">
            About <span className="text-gradient">Us</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-stretch">
          {/* LEFT BIG CARD */}
          <div className="lg:col-span-1 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 p-8 shadow-[0_0_40px_rgba(59,130,246,0.25)]">
            <h2 className="text-2xl font-bold text-white mb-4">
              Crafting High-Converting Landing Pages
            </h2>

            <p className="text-sm text-gray-300 leading-relaxed mb-4">
              I specialize in building{" "}
              <span className="text-white font-medium">
                custom landing pages
              </span>
              tailored precisely to your business goals. Every section is
              designed based on your needs — layout, content flow, and
              call-to-action.
            </p>

            <p className="text-sm text-gray-300 leading-relaxed mb-4">
              All landing pages are fully{" "}
              <span className="text-white font-medium">responsive</span>,
              optimized for performance, and crafted with modern UI/UX
              principles to ensure a professional and engaging user experience.
            </p>

            <p className="text-sm text-gray-300 leading-relaxed">
              Whether you’re launching a product, promoting a service, or
              validating an idea, I help turn visitors into customers through
              <span className="text-white font-medium">
                {" "}
                clean design and smart structure
              </span>
              .
            </p>
          </div>

          {/* RIGHT GRID CARDS */}
          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
            {services.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 p-6 hover:shadow-[0_0_30px_rgba(59,130,246,0.25)] transition-all duration-300"
              >
                <div className="w-12 h-12 mb-4 rounded-xl bg-blue-500/20 flex items-center justify-center">
                  <item.icon className="w-6 h-6 text-blue-400" />
                </div>

                <h3 className="text-white font-semibold mb-2">{item.title}</h3>

                <p className="text-sm text-gray-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
