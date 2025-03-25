"use client";

import { LucideArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";

export const Topheader = () => {
  const t = useTranslations();
  return (
    <section className="hidden md:flex justify-center items-center py-3 bg-blue">
      <div className="inline-flex gap-2 items-center">
        <p className="text-background/70 text-sm">{t("topHeader.message")}</p>
        <LucideArrowRight className="text-white inline-flex justify-center items-center w-5 h-5" />
      </div>
    </section>
  );
};
