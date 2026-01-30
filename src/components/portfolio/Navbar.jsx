import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "../ui/Button";

const navItems = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Projects", id: "projects" },
  { name: "Skills", id: "skills" },
  { name: "Workflow", id: "workflow" },
  { name: "Contact", id: "contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavigate = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  const handleWhatsApp = () => {
    window.open(
      "https://wa.me/6287802102002?text=Halo,%20saya%20ingin%20menggunakan%20jasa%20website%20Anda",
      "_blank",
    );
    setIsOpen(false);
  };

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md glass w-full overflow-x-hidden"
      initial={{ y: -80 }}
      animate={{ y: 0 }}
    >
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex h-16 items-center justify-between">
          {/* LOGO BALIK KE AWAL */}
          <motion.button
            onClick={() => handleNavigate("home")}
            className="text-xl font-bold text-gradient md:text-2xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Andhika.dev
          </motion.button>

          {/* DESKTOP NAV */}
          <div className="hidden md:flex gap-8 items-center">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigate(item.id)}
                className="text-sm text-muted-foreground hover:text-foreground transition"
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* DESKTOP HIRE ME RADIUS */}
          <div className="hidden md:block">
            <Button
              onClick={handleWhatsApp}
              className="rounded-xl bg-gradient-to-r from-primary to-accent px-5 py-2 text-primary-foreground hover:opacity-90"
            >
              Hire Me
            </Button>
          </div>

          {/* BURGER */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden glass border-t border-border"
          >
            <div className="flex flex-col gap-3 px-4 py-5">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavigate(item.id)}
                  className="w-full rounded-lg py-3 text-center text-base font-medium text-muted-foreground hover:bg-white/10 hover:text-foreground transition"
                >
                  {item.name}
                </button>
              ))}

              {/* MOBILE HIRE ME RADIUS */}
              <Button
                onClick={handleWhatsApp}
                className="w-full rounded-xl bg-gradient-to-r from-primary to-accent py-3 text-base font-semibold text-primary-foreground hover:opacity-90"
              >
                Hire Me
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
