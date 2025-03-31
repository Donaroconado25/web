"use client";
import type React from "react";
import ILife from "../../../../public/resources/icons/ilife.svg";
import IHealth from "../../../../public/resources/icons/ihealth.svg";
import IOther from "../../../../public/resources/icons/iother.svg";
import IVision from "../../../../public/resources/icons/ivision.svg";
import IAccident from "../../../../public/resources/icons/iaccident.svg";
import Image from "next/image";
import { useTranslations } from "next-intl";

interface ServiceProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon: any;
  title: string;
  description: string;
}

const Service = ({ icon, title, description }: ServiceProps) => {
  const t = useTranslations();
  return (
    <div className="flex h-full flex-col rounded-lg border border-gray bg-gray-50 p-6 shadow-sm transition-all hover:shadow-md">
      <div className="mb-4">
        <div className="flex justify-start gap-4 items-center">
          <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-light text-red">
            <Image src={icon} alt={title} width={80} height={80} />
          </div>
          <h3 className="mb-2 text-xl font-semibold text-black">{t(title)}</h3>
        </div>
        <p className="mb-4 text-black/50">{t(description)}</p>
      </div>
    </div>
  );
};

export const Services = () => {
  const t = useTranslations();
  const services = [
    {
      icon: ILife,
      title: "home.services.lifeInsurances.title",
      description: "home.services.lifeInsurances.description",
    },
    {
      icon: IHealth,
      title: "home.services.healthInsurances.title",
      description: "home.services.healthInsurances.description",
    },
    {
      icon: IOther,
      title: "home.services.otherInsurances.title",
      description: "home.services.otherInsurances.description",
    },
    {
      icon: IVision,
      title: "home.services.visionInsurances.title",
      description: "home.services.visionInsurances.description",
    },
    {
      icon: IAccident,
      title: "home.services.accidentInsurances.title",
      description: "home.services.accidentInsurances.description",
    }
  ];

  return (
    <section className="py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="mb-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {t("home.services.title")}
          </h2>
          <p className="mx-auto max-w-2xl text-gray-600">
            {t("home.services.description")}
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
