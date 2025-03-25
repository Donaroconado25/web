import { LanguageSwitcher } from "@/components/atoms";
import Link from "next/link";

export const Menu = () => {
  return (
    <nav className="hidden md:flex gap-5 items-center">
      <Link href="/">¿Quiénes somos?</Link>
      <Link href="/">Cotiza</Link>
      <LanguageSwitcher />
      <button className="bg-red hover:shadow-lg transition-all text-foreground p-2 rounded-lg">
        <Link href="/" className="text-white font-bold">
          Haz tu consulta
        </Link>
      </button>
    </nav>
  );
};
