"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";

export const Hero2 = () => {
  const t = useTranslations();
  return (
    <div className="relative w-full h-screen md:h-96 overflow-hidden">
      <video
        src="/resources/hero.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="space-y-4 absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6">
        <h1 className="text-5xl font-bold text-white">{t("home.title")}</h1>
        <p className="text-lg w-full md:max-w-[900px] text-white">
          {t("home.description")}
        </p>
        <div className="flex gap-5 items-center">
          <Link href="https://wa.me/+17865224400" className="cursor-pointer font-bold bg-red hover:shadow-lg transition-all text-white p-2 rounded-lg">
            {t("home.ctaBtnText")}
          </Link>
        </div>
      </div>
    </div>
  );
};
