import Image from "next/image";
import { LucideArrowRight } from "lucide-react";
import HeroImage from "../../../../public/resources/hero.png";

export const Hero = () => {
  return (
    <section className="p-5 md:p-20 bg-radial-[100%_50%_at_0%_100%] from-blue to-transparent">
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-10 place-items-center">
        <div className="order-last md:order-first">
          <Image src={HeroImage} alt="" width={400} height={400} quality={100} priority />
        </div>
        <div className="space-y-4">
          <h1 className="text-5xl font-bold tracking-tighter bg-gradient-to-b from-red to-yellow text-transparent bg-clip-text">
            Protección y tranquilidad para ti y tu familia
          </h1>
          <p className="text-2xl tracking-tight text-black">
            La vida está llena de imprevistos, pero con RD Quality Insurance
            siempre estarás protegido. Ofrecemos seguros de vida, salud y
            suplementarios para garantizar tu bienestar y el de tus seres
            queridos, eso y mucho más.
          </p>
          <div className="flex gap-5 items-center">
            <button className="cursor-pointer font-bold bg-red hover:shadow-lg transition-all text-white p-2 rounded-lg">
              ¡Quiero una consulta gratis!
            </button>
            <button className="cursor-pointer flex items-center bg-background border border-red hover:shadow-lg transition-all text-black p-2 rounded-lg">
              <span>Conoce más</span>
              <LucideArrowRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
