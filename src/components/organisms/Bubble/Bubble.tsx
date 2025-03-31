"use client";

import { useState } from "react";
import { MessageSquare, Globe, Menu } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

const phoneNumber = "+17865224400";
const message = "Hello! How can I help you?";

export const Bubble = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const toggleLanguage = () => {
    const currentLocale = pathname.startsWith("/es") ? "es" : "en";
    const newLocale = currentLocale === "en" ? "es" : "en";
    const newPath = pathname.replace(`/${currentLocale}`, `/${newLocale}`);
    router.push(newPath);
  };

  const handleClickWhatsApp = () => {
    const formattedPhone = phoneNumber.replace(/\D/g, "");
    const whatsappUrl = `https://wa.me/${formattedPhone}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3">
      {/* Opciones desplegables */}
      <div
        className={`flex flex-col items-end gap-3 transition-opacity ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <button
          onClick={handleClickWhatsApp}
          className="flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-110"
        >
          <MessageSquare className="h-5 w-5" />
        </button>
        <button
          onClick={toggleLanguage}
          className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg transition-transform hover:scale-110"
        >
          <Globe className="h-5 w-5" />
        </button>
      </div>

      {/* Botón principal */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-black text-white shadow-lg transition-all hover:scale-110"
      >
        <Menu className="h-6 w-6" />
      </button>
    </div>
  );
};
