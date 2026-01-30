import { useState } from "react";
import { Send, Phone } from "lucide-react";
import { section } from "framer-motion/client";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    whatsapp: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);

    const text = `
Halo, saya ingin konsultasi proyek pembuatan web.

Nama: ${form.name}
WhatsApp: ${form.phone}
Email: ${form.email}
Jenis Proyek: ${form.project}
Pesan: ${form.message}
    `;

    window.open(
      `https://wa.me/6287802102002?text=${encodeURIComponent(text)}`,
      "_blank",
    );
  };

  return (
    <section id="contact">
      <div className="max-w-xl mx-auto bg-[#0b1220] rounded-2xl p-6 shadow-xl border border-white/10">
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Row 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Nama */}
            <div>
              <label className="text-sm text-white/80 mb-1 block">Nama</label>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Nama Anda"
                className="w-full rounded-xl bg-[#0f172a] border border-white/10 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
            </div>

            {/* WhatsApp */}
            <div>
              <label className="text-sm text-white/80 mb-1 block">
                WhatsApp
              </label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
                <input
                  name="whatsapp"
                  value={form.whatsapp}
                  onChange={handleChange}
                  placeholder="0812..."
                  className="w-full rounded-xl bg-[#0f172a] border border-white/10 pl-10 pr-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  required
                />
              </div>
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="text-sm text-white/80 mb-1 block">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="email@contoh.com"
              className="w-full rounded-xl bg-[#0f172a] border border-white/10 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>

          {/* Pesan */}
          <div>
            <label className="text-sm text-white/80 mb-1 block">Pesan</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Ceritakan project Anda..."
              rows={4}
              className="w-full rounded-xl bg-[#0f172a] border border-white/10 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
              required
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full mt-4 rounded-xl bg-indigo-500 hover:bg-indigo-600 transition text-white py-3 font-medium flex items-center justify-center gap-2"
          >
            Kirim Pesan
            <Send className="w-4 h-4" />
          </button>
        </form>
      </div>
    </section>
  );
}
