"use client";
import type React from "react";
import ILife from "../../../../public/resources/icons/ilife.svg";
import IHealth from "../../../../public/resources/icons/ihealth.svg";
import IOther from "../../../../public/resources/icons/iother.svg";
import IVision from "../../../../public/resources/icons/ivision.svg";
import IAccident from "../../../../public/resources/icons/iaccident.svg";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import {
  AccidentInsuranceDetails,
  DentalInsuranceDetails,
  HealthInsuranceDetails,
  LifeInsuranceDetails,
  MedicalInsuranceDetails,
} from "@/components/molecules";
import { VisionInsuranceDetails } from "@/components/molecules/VisionInsuranceDetails/VisionInsuranceDetails";

interface ServiceProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon: any;
  title: string;
  description: string;
  isExpanded: boolean;
  expandedContent: React.ReactNode;
  onToggleExpand: () => void;
}

const Service = ({
  icon,
  title,
  description,
  isExpanded,
  expandedContent,
  onToggleExpand,
}: ServiceProps) => {
  const t = useTranslations();
  return (
    <div className="flex h-full flex-col rounded-lg border border-gray bg-gray-50 p-6 shadow-sm transition-all hover:shadow-md">
      <div className="mb-4 flex flex-col justify-between h-full">
        <div className="flex justify-start gap-4 items-center">
          <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-red text-white">
            <Image
              className="text-white fill-white"
              src={icon}
              alt={title}
              width={80}
              height={80}
            />
          </div>
          <h3 className="mb-2 text-xl font-semibold text-black">{t(title)}</h3>
        </div>
        <p className="mb-4 text-black/50">{t(description)}</p>
        <button
          onClick={onToggleExpand}
          className="flex gap-2 justify-center items-center w-full p-2 bg-red rounded-lg text-white transition-all cursor-pointer"
        >
          <span>{t("home.services.btnMore")}</span>
          <span>
            {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </span>
        </button>
      </div>
      {isExpanded && expandedContent && (
        <div className="mt-4 p-4 bg-gray-50 rounded-lg border animate-in fade-in duration-200">
          {expandedContent}
        </div>
      )}
    </div>
  );
};

export const Services = () => {
  const t = useTranslations();
  const [expandedServiceIndex, setExpandedServiceIndex] = useState<
    number | null
  >(null);

  const toggleExpand = (index: number) => {
    setExpandedServiceIndex(expandedServiceIndex === index ? null : index);
  };
  const services = [
    {
      icon: ILife,
      title: "home.services.lifeInsurances.title",
      description: "home.services.lifeInsurances.description",
      expandedContent: <LifeInsuranceDetails />,
    },
    {
      icon: IHealth,
      title: "home.services.healthInsurances.title",
      description: "home.services.healthInsurances.description",
      expandedContent: <HealthInsuranceDetails />,
    },
    {
      icon: IOther,
      title: "home.services.otherInsurances.title",
      description: "home.services.otherInsurances.description",
      expandedContent: <DentalInsuranceDetails />,
    },
    {
      icon: IVision,
      title: "home.services.visionInsurances.title",
      description: "home.services.visionInsurances.description",
      expandedContent: <VisionInsuranceDetails />,
    },
    {
      icon: IAccident,
      title: "home.services.accidentInsurances.title",
      description: "home.services.accidentInsurances.description",
      expandedContent: <AccidentInsuranceDetails />,
    },
    {
      icon: ILife,
      title: "home.services.medicalInsurances.title",
      description: "home.services.medicalInsurances.description",
      expandedContent: <MedicalInsuranceDetails />,
    },
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
        <div className="grid gap-6 sm:grid-cols-2">
          {services.map((service, index) => (
            <Service
              key={index}
              {...service}
              isExpanded={expandedServiceIndex === index}
              onToggleExpand={() => toggleExpand(index)}
              expandedContent={service.expandedContent}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
