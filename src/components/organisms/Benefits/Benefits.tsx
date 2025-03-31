"use client";

import { Check } from "lucide-react";
import { useTranslations } from "next-intl";

export const Benefits = () => {
  const t = useTranslations();
  const benefits = [
    {
      title: "home.benefits.reasonOne.title",
      description: "home.benefits.reasonOne.description",
    },
    {
      title: "home.benefits.reasonTwo.title",
      description: "home.benefits.reasonTwo.description",
    },
    {
      title: "home.benefits.reasonThree.title",
      description: "home.benefits.reasonThree.description",
    },
    {
      title: "home.benefits.reasonFour.title",
      description: "home.benefits.reasonFour.description",
    },
  ];
  return (
    <section className="py-24 bg-gradient-to-b from-background to-background/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight mb-4">
            {t("home.benefits.title")}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            {t("home.benefits.description")}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group relative flex gap-8 items-start mb-16 last:mb-0"
            >
              {/* Left side with number and line */}
              <div className="hidden md:flex flex-col items-center">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-red text-primary-foreground text-2xl font-bold z-10">
                  {index + 1}
                </div>
                {index < benefits.length - 1 && (
                  <div className="w-1 bg-primary/20 h-full absolute top-16 left-8 -z-10"></div>
                )}
              </div>

              {/* Right side with content */}
              <div className="flex-1 bg-card hover:bg-card/80 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-primary/10">
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <Check className="h-6 w-6 text-red flex-shrink-0" />
                      <h3 className="font-bold text-2xl">{t(benefit.title)}</h3>
                    </div>
                  </div>
                </div>
                <p className="text-muted-foreground text-lg ml-8">
                  {t(benefit.description)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
