import type React from "react";
import {
  ShieldCheck,
  Car,
  Home,
  Heart,
  Umbrella,
  Briefcase,
} from "lucide-react";

interface ServiceProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  ctaText?: string;
  ctaLink?: string;
}

const Service = ({
  icon,
  title,
  description,
  ctaText = "Learn More",
  ctaLink = "#",
}: ServiceProps) => {
  return (
    <div className="flex h-full flex-col rounded-lg border border-gray bg-white p-6 shadow-sm transition-all hover:shadow-md">
      <div className="mb-4">
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-light text-red">
          {icon}
        </div>
        <h3 className="mb-2 text-xl font-semibold text-black">{title}</h3>
        <p className="mb-4 text-black/50">{description}</p>
      </div>
      <div className="mt-auto">
        <a
          href={ctaLink}
          className="inline-block w-full rounded-md border border-red px-4 py-2 text-center font-medium text-red transition-colors hover:bg-red hover:text-white"
        >
          {ctaText}
        </a>
      </div>
    </div>
  );
};

export const Services = () => {
  const services = [
    {
      icon: <Car className="h-6 w-6" />,
      title: "Auto Insurance",
      description:
        "Comprehensive coverage for your vehicles with competitive rates and 24/7 claims assistance.",
      ctaLink: "/services/auto",
    },
    {
      icon: <Home className="h-6 w-6" />,
      title: "Home Insurance",
      description:
        "Protect your home and belongings with our customizable home insurance policies.",
      ctaLink: "/services/home",
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Life Insurance",
      description:
        "Secure your family's financial future with our flexible life insurance plans.",
      ctaLink: "/services/life",
    },
    {
      icon: <ShieldCheck className="h-6 w-6" />,
      title: "Health Insurance",
      description:
        "Quality healthcare coverage with access to top medical providers and specialists.",
      ctaLink: "/services/health",
    },
    {
      icon: <Umbrella className="h-6 w-6" />,
      title: "Liability Insurance",
      description:
        "Protect yourself and your business from unexpected liability claims and legal expenses.",
      ctaLink: "/services/liability",
    },
    {
      icon: <Briefcase className="h-6 w-6" />,
      title: "Business Insurance",
      description:
        "Comprehensive coverage solutions tailored to your business needs and industry requirements.",
      ctaLink: "/services/business",
    },
  ];

  return (
    <section className="py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="mb-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Nuestros servicios
          </h2>
          <p className="mx-auto max-w-2xl text-gray-600">
            Estamos transformando la forma en que las personas adquieren seguros en el mundo.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Service key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};
