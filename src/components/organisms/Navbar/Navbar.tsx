"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, useScroll } from "framer-motion";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Logo from "../../../../public/resources/logotipo.png";
import { useTranslations } from "next-intl";

export function Navbar() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const t = useTranslations();

  useEffect(() => {
    const unsubscribe = scrollY.onChange((latest) => {
      setIsScrolled(latest > 50);
    });
    return () => unsubscribe();
  }, [scrollY]);

  const navLinks = [
    { name: t("navbar.home"), href: "/" },
    { name: t("navbar.about"), href: "/nosotros" },
    { name: t("navbar.contact"), href: "/contacto" },
  ];

  return (
    <motion.header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 py-4 px-5 md:px-20 transition-colors duration-300",
        isScrolled ? "bg-white shadow-sm" : "bg-transparent"
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="container flex items-center justify-between">
        <Link href="/">
          <Image
            src={Logo}
            alt="RD Quality Insurance Logo"
            width={50}
            height={50}
            className="h-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "font-medium transition-colors hover:text-red",
                isScrolled ? "text-black" : "text-white"
              )}
            >
              {link.name}
            </Link>
          ))}
          <Button className="bg-red hover:bg-red/90 text-white">
            <Link href="https://wa.me/+17865224400">
              {t("navbar.ctaBtnText")}
            </Link>
          </Button>
        </nav>

        {/* Mobile Navigation */}
        <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              className={isScrolled ? "text-black" : "text-white"}
            >
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[80%] p-5">
            <SheetTitle className="text-lg">Menu</SheetTitle>
            <div className="flex flex-col h-full">
              <nav className="flex flex-col space-y-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="font-medium text-lg transition-colors hover:text-red"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
                <Button className="bg-red hover:bg-red/90 text-white w-full">
                  ¡Consulta gratis!
                </Button>
              </nav>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </motion.header>
  );
}
