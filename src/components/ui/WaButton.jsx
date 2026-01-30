import { MessageCircle } from "lucide-react";
import { Button } from "../ui/Button";

export default function WhatsAppButton() {
  const handleWhatsApp = () => {
    window.open(
      "https://wa.me/6287802102002?text=Halo,%20saya%20tertarik%20dengan%20layanan%20pembuatan%20web%20Anda",
      "_blank",
    );
  };

  return (
    <button
      onClick={handleWhatsApp}
      className="fixed bottom-6 right-6 z-50 w-35 h-13 bg-blue-400 hover:bg-green-700 text-white rounded-xl shadow-2xl hover:shadow-green-500/50 flex items-center justify-center transition-all hover:scale-110 group"
      aria-label="Contact via WhatsApp"
    >
      <Button
        asChild
        size="lg"
        variant="outline"
        className="border-border   bg-transparent"
      >
        <a href="#contact">
          <MessageCircle className="mr-2 h-7 w-7" />
          <p className="text-[15px]">WhatsApp</p>
        </a>
      </Button>
      <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-pulse"></span>
    </button>
  );
}
