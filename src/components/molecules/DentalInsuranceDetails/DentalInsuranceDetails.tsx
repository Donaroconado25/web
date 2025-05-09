import { useTranslations } from "next-intl";

export const DentalInsuranceDetails = () => {
  const t = useTranslations("home.services.details.dentalInsurance");
  return (
    <div className="text-sm text-gray-700">
      <h3 className="text-xl font-semibold mb-3">{t("title")}</h3>
      <p className="mb-4">{t("description")}</p>
      <ul className="list-disc pl-5 space-y-2">
        <li>{t("benefits.itemOne")}</li>
        <li>{t("benefits.itemTwo")}</li>
        <li>{t("benefits.itemThree")}</li>
      </ul>
      <p className="mt-4">{t("resume")}</p>
    </div>
  );
};
