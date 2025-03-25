"use client";

import { useState, useEffect } from "react";
import { MessageSquare } from "lucide-react";

interface WhatsAppBubbleProps {
  phoneNumber: string;
  message?: string;
  showOnMobile?: boolean;
}

export const WhatsAppBubble = ({
  phoneNumber,
  message = "Hello! I'm interested in your services.",
  showOnMobile = true,
}: WhatsAppBubbleProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show the bubble after a short delay for better UX
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleClick = () => {
    // Format the phone number (remove any non-digit characters)
    const formattedPhone = phoneNumber.replace(/\D/g, "");

    // Create the WhatsApp URL with the phone number and optional message
    const whatsappUrl = `https://wa.me/${formattedPhone}?text=${encodeURIComponent(
      message
    )}`;

    // Open WhatsApp in a new tab
    window.open(whatsappUrl, "_blank");
  };

  if (!isVisible) return null;

  return (
    <div
      className={`fixed bottom-5 cursor-pointer right-5 z-50 ${
        !showOnMobile ? "hidden md:block" : ""
      }`}
    >
      <button
        onClick={handleClick}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-all hover:scale-110 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2"
        aria-label="Contact us on WhatsApp"
      >
        <MessageSquare className="h-6 w-6" />
      </button>
      <span className="absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-black px-3 py-1 text-xs text-white opacity-0 transition-opacity group-hover:opacity-100">
        Chat with us
      </span>
    </div>
  );
};
