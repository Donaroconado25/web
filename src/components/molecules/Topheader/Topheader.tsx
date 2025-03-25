import { LucideArrowRight } from "lucide-react";

export const Topheader = () => {
  return (
    <section className="hidden md:flex justify-center items-center py-3 bg-blue">
      <div className="inline-flex gap-2 items-center">
        <p className="text-background/70 text-sm">
          Consulta gratuita y sin compromiso. Accede a las mejores opciones de
          seguros de manera rápida y sencilla.
        </p>
        <LucideArrowRight className="text-white inline-flex justify-center items-center w-5 h-5" />
      </div>
    </section>
  );
};
