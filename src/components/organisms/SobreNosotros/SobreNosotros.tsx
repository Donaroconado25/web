"use client";

import { useTranslations } from "next-intl";

export const SobreNosotros = () => {
  const t = useTranslations();
  return (
    <section className="mt-20 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="mb-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {t("about.title")}
          </h2>
          <p className="mx-auto max-w-2xl text-gray-600">
            {t("about.description")}
          </p>
        </div>
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
          <div className="bg-gray-50 p-5 md:p-10 rounded-lg border">
            <h3 className="text-center font-bold text-2xl mb-5">
              {t("about.mision.title")}
            </h3>
            <span className="text-gray-600">
              {t("about.mision.description")}
            </span>
          </div>
          <div className="bg-gray-50 p-5 md:p-10 rounded-lg border">
            <h3 className="text-center font-bold text-2xl mb-5">
              {t("about.values.title")}
            </h3>
            <span className="text-gray-600">
              {t("about.values.description")}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
