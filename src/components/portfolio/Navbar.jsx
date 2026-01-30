import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "../ui/Button";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Workflow", href: "#workflow" },
  { name: "Contact", href: "#contact" },
];
const handleWhatsApp = () => {
  window.open(
    "https://wa.me/6287802102002?text=Halo,%20saya%20ingin%20menggunakan%20jasa%20website%20Anda",
    "_blank",
  );
};
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 glass"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#home"
            className="text-xl font-bold text-gradient"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Andhika.dev
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 md:flex">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group relative text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-gradient-to-r from-primary to-accent transition-all duration-300 group-hover:w-full" />
              </motion.a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              asChild
              onClick={handleWhatsApp}
              className="mt-4 w-full bg-gradient-to-r from-primary to-accent text-primary-foreground transition-opacity hover:opacity-90"
            >
              <p>Hire Me</p>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="text-foreground md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="glass border-t border-border md:hidden"
          >
            <div className="space-y-3 px-4 py-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block py-2 text-muted-foreground transition-colors hover:text-foreground"
                >
                  {item.name}
                </a>
              ))}
              <Button
                asChild
                onClick={handleWhatsApp}
                className="mt-4 w-full bg-gradient-to-r from-primary to-accent text-primary-foreground transition-opacity hover:opacity-90"
              ></Button>
              Hire Me
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
