"use client";

import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const locales = [
  { code: "en", label: "English", icon: "🇺🇸" },
  { code: "es", label: "Español", icon: "🇪🇸" },
];

export const LanguageSwitcher = () => {
  const params = useParams();
  const pathname = usePathname();
  const currentLocale = params.locale as string; // Idioma actual

  // Find the current locale object
  const currentLocaleObj =
    locales.find((locale) => locale.code === currentLocale) || locales[0];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" className="flex items-center gap-2">
          <span className="text-lg">{currentLocaleObj.icon}</span>
          <ChevronDown className="h-4 w-4 opacity-50" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {locales.map((locale) => {
          // Reemplazar el idioma en la URL o usar la ruta base
          const newPath = pathname.replace(`/${currentLocale}`, "") || "/";

          return (
            <DropdownMenuItem key={locale.code} asChild>
              <Link
                href={`/${locale.code}${newPath}`}
                className={`flex items-center gap-2 w-full ${
                  locale.code === currentLocale ? "font-bold" : ""
                }`}
              >
                <span className="text-lg">{locale.icon}</span>
                <span>{locale.label}</span>
              </Link>
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
