import { useTranslations } from "next-intl";

export const LifeInsuranceDetails = () => {
  const t = useTranslations("home.services.details.lifeInsurance");
  return (
    <div className="text-sm text-gray-700">
      <h3 className="text-xl font-semibold mb-3">{t("title")}</h3>
      <p className="mb-4">{t("description")}</p>
      <ul className="list-disc pl-5 mb-4 space-y-2">
        <li>{t("itemOne")}</li>
        <li>{t("itemTwo")}</li>
      </ul>
      <p className="my-4">{t("itemNote")}</p>
    </div>
  );
};
