import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  const handleWhatsApp = () => {
    window.open(
      "https://wa.me/6287802102002?text=Halo,%20saya%20tertarik%20dengan%20layanan%20pembuatan%20web%20anda",
      "_blank",
    );
  };

  return (
    <button
      onClick={handleWhatsApp}
      aria-label="Contact via WhatsApp"
      className="
        fixed bottom-6 right-6 z-50
        flex items-center justify-center gap-2
        px-4 py-3
        bg-gradient-to-r from-primary to-accent
        text-white
        rounded-xl shadow-2xl
        transition-all hover:scale-110
      "
    >
      {/* ICON */}
      <MessageCircle className="h-6 w-6" />

      {/* TEXT - HILANG DI SMARTPHONE */}
      <span className="hidden sm:inline text-sm font-medium">WhatsApp</span>

      {/* DOT NOTIF */}
      <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse"></span>
    </button>
  );
}
